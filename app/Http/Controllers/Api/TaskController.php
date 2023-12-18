<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Task;
use App\Http\Requests\TaskRequest;
use App\Models\Session;
use App\Models\Base;
use App\Models\User;
use App\Models\Level;

use App\Http\Resources\TaskFrontResource;
use App\Http\Resources\LevelResource;
use App\Http\Resources\TaskResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class TaskController extends Controller
{
    // ---------------------------------------
    //      определение существующих ID
    // ---------------------------------------
    public function taskId($id)
    {
        // если такого задания не нашлось, то...
        if (sizeof(Task::where('id', $id)->get())==0)
        {
            // выводим ошибку
            abort(404);
        };
        // иначе показываем задание
        return view('task');
    }
    // ---------------------------------------
    //      вывод уровней сложности
    // ---------------------------------------
    public function levels()
    {
        // находим уровни
        $levels = Level::select('id', 'lvl', 'score')->get();
        // если количество заданий не равно 0, то..
        if (count($levels)) {
            // возвращаем список уровней
            return response()->json([
                'status'=> 'Success', 
                'message' => 'Found', 
                'data' => LevelResource::collection($levels),
            ], 200);
        // иначе..
        } else {
            // показываем ошибку 404
            abort(404);
        }
    }
    // -----------------------------------------------
    //  список заданий по указанному уровню сложности
    // -----------------------------------------------
    public function listtask($lvl)
    {
        // находим нужные там заданий по указанному уровню, сортируем эти задания по алфавиту
        $task = Task::where('level_id', $lvl)->orderBy('name', 'ASC')->get();
        // если количество заданий не равно 0, то..
        if (count($task)) {
            // возвращаем список этих заданий PS:TaskFrontResorce == Select, находится в папке app\Http\Resources\TaskFrontResource.php
            return TaskFrontResource::collection($task);
        // иначе..
        } else {
            // показываем ошибку 404
            abort(404);
        }
    }
    // -----------------------------------------------
    //        вывод задания по указанному ID
    // -----------------------------------------------
    public function task($id, Request $request)
    {
        // определяем какой пользователей зарегестрирован
        $user_id = Auth::user()->id;
        // определяем какие задания решены у данного пользователя
        $solved = Session::where(['user_id'=> $user_id, 'task_id' => $id, 'result' => 1])->get();
        // если список пуст..
        if (sizeof($solved)) 
        {
            $solved = true; // решено
        }
        // иначе..
        else 
        {
            $solved = false; // не решено
        };
        // создаем массив с выбранным заданием PS:TaskFrontResorce == Select, находится в папке app\Http\Resources\TaskResource.php
        $data = new TaskResource(Task::with('level')->findorfail($id));
        // выводим результут
        return response()->json([
            'status'=> 'Success', 
            'message' => 'Found', 
            'data' => $data, // задание
            'solved' => $solved // решено у пользователя или нет
        ], 200);
    }
    // ------------------------------
    //       проверка задания
    // ------------------------------
    public function taskCheck($id, Request $request) 
    {
        // валидация (не особо нужная, тк все проверяется на клиенте, но пусть, так правильнее)
        $validator = Validator::make($request->all(), [
            "result" => 'required'
        ]);
        
        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json([
                'status'=> 'Error', 
                'message' => $error, 
                'data' => null,
                'solved' => null
            ], 400);
        }
        // определяем пользователя
        $user = Auth::user()->id;
        // определяем бд задания
        $base_id = Task::where('id', $id)->get()[0]['base_id'];
        $base = Base::where('id', $base_id)->get()[0]['dbname'];
        // определяем очки за уровень
        $level_id = Task::where('id', $id)->get()[0]['level_id'];
        $level = Level::where('id', $level_id)->get()[0]['score'];
        
        // проверяем решение студента на работоспособность
        try {
            $data_stud = DB::connection($base)->select($request['result']);
        } catch (QueryException $e) {
            $data_stud = "error";
        }
        // обрабатываем истинное решение
        $data = Task::where('id', $id)->get()[0]['ssql'];
        $data_result = DB::connection($base)->select($data);

        // проверка решения студента по результату
        if ($data_stud == $data_result)
        {
            // правильно!
            // определяем набранные баллы
            // если пользователь решал это задание несколько раз, то...
            if (sizeof(Session::where(['user_id' => $user, 'task_id' => $id, 'result' => 1])->get())) 
            {
                // получает 0 баллов
                $result = 0;
            }
            else
            {
                // получает заслуженные баллы
                $result = $level;
            }
            // создаем новую сессию
            Session::create([
                "user_id" => $user,
                "task_id" => $id,
                "result" => '1',
            ]);
            // узнаем общие баллы студента
            $score = DB::select(
                "SELECT t.user, sum(t.score) as score
                from(
                    SELECT sessions.user_id as user, levels.score, Count(tasks.id) AS count
                    FROM (levels INNER JOIN tasks ON levels.id = tasks.level_id) INNER JOIN (users INNER JOIN sessions ON users.id = sessions.user_id) ON tasks.id = sessions.task_id
                    WHERE (((sessions.result)=1)) and sessions.user_id = ". $user ."
                    GROUP BY tasks.id, users.login, levels.score
                )t
                GROUP BY t.user;");
            $score = (integer)  array_column($score, 'score')[0];
            
            // возвращаем json
            return response()->json([
                'status'=> 'Success', 
                'message' => true,
                'result' => $result,
                "score" => $score,
            ], 202);
        }
        // неправильно!
        else
        {
            // создаем новую сессию
            Session::create([
                "user_id" => $user,
                "task_id" => $id,
                "result" => '0',
            ]);
            // возвращаем json
            return response()->json([
                'status'=> 'Success', 
                'message' => false,
                'result' => 0,
                'score' => 'without changes'
            ], 202);
        };
    }
    public function taskCount(Request $request) 
    {
        // определяем пользователя
        $user = Auth::user()->id;
        // считаем сколько заданий он решил правильно
        $taskCount = DB::select(
            "SELECT count(`user_id`) as 'task_count' FROM `sessions` WHERE `result`=1 and user_id = $user;"
        )[0];
        // возвращаем полученное число
        return response()->json($taskCount);
    }
}