<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

// добавленные
use App\Models\User; // позволяет показывать таблицу
use App\Http\Resources\UserResource; // указывает какие именно столбцы показывать
use Illuminate\Support\Facades\DB;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    // ------------------------------
    //      топ нынешнего года
    // ------------------------------
    public function NowYearTop()
    {
        // выбираем пользователей по запросу
        $users = DB::select(
            "SELECT t.user, sum(t.score) as score
            from(
                SELECT login, CONCAT(users.fname,' ', users.nname) as user, levels.score, Count(tasks.id) AS count, 
                if (((DATE_FORMAT(users.created_at , '%m') >= 09 AND DATE_FORMAT(users.created_at , '%m') <= 12) AND (DATE_FORMAT(users.created_at , '%Y') = Year(Now()) OR DATE_FORMAT(users.created_at , '%Y') = Year(Now()) - 1))
                OR ((DATE_FORMAT(users.created_at , '%m') >= 01 AND DATE_FORMAT(users.created_at , '%m') <= 08) AND DATE_FORMAT(users.created_at , '%Y') = Year(Now()) 
                AND MONTH(Now()) <= 09 ), 
                '+','-') as now
                FROM levels INNER JOIN (tasks INNER JOIN (users INNER JOIN sessions ON users.id = sessions.user_id) ON tasks.id = sessions.task_id) ON levels.id = tasks.level_id
                WHERE sessions.result = 1
                GROUP BY tasks.id, users.login, levels.score
                )t
            WHERE now='+'
            GROUP BY t.user, login
            ORDER BY score DESC LIMIT 25;"
        );
        // возвращаем топ пользователей
        return $users;
    }
    // ------------------------------
    //      топ прошлого года
    // ------------------------------
    public function LastYearTop()
    {
        // выбираем пользователей по запросу
        $users = DB::select(
            "SELECT t.user, sum(t.score) as score
            from(             
                SELECT login, CONCAT(users.fname,' ', users.nname) as user, levels.score, Count(tasks.id) AS count, 
                if (((DATE_FORMAT(users.created_at , '%m') >= 09 AND DATE_FORMAT(users.created_at , '%m') <= 12) AND (DATE_FORMAT(users.created_at , '%Y') = Year(Now()) - 2))
                OR ((DATE_FORMAT(users.created_at , '%m') >= 01 AND DATE_FORMAT(users.created_at , '%m') <= 08) AND (DATE_FORMAT(users.created_at , '%Y') = Year(Now()) 
                AND MONTH(Now()) >= 09) AND (DATE_FORMAT(users.created_at , '%Y') = Year(Now()-1) AND MONTH(Now()) >= 01)), 
                '+','-') as now
                FROM levels INNER JOIN (tasks INNER JOIN (users INNER JOIN sessions ON users.id = sessions.user_id) ON tasks.id = sessions.task_id) ON levels.id = tasks.level_id 
                WHERE sessions.result = 1
                GROUP BY tasks.id, users.login, levels.score
            )t
            WHERE now='+'
            GROUP BY t.user, login
            ORDER BY score DESC LIMIT 25;"
        );
        // возвращаем топ пользователей
        return $users;
    }
    // ------------------------------
    //     топ общий (за все года)
    // ------------------------------
    public function Top()
    {
        // выбираем пользователей по запросу
        $users = DB::select(
            "SELECT t.user, sum(t.score) as score
            from(
                SELECT login, CONCAT(users.fname,' ', users.nname) as user, levels.score, Count(tasks.id) AS count
                FROM (levels INNER JOIN tasks ON levels.id = tasks.level_id) INNER JOIN (users INNER JOIN sessions ON users.id = sessions.user_id) ON tasks.id = sessions.task_id
                WHERE (((sessions.result)=1))
                GROUP BY tasks.id, users.login, levels.score
            )t
            GROUP BY t.user, login
            ORDER BY score DESC LIMIT 25;"
        );
        // возвращаем топ пользователей
        return $users;
    }
    // ------------------------------
    //     топ 5 за нынешний год
    // ------------------------------
    public function Top5()
    {
        // выбираем пользователей по запросу
        $users = DB::select(
            "SELECT t.user, sum(t.score) as score
            from(
                SELECT login, CONCAT(users.fname,' ', users.nname) as user, levels.score, Count(tasks.id) AS count, 
                if (((DATE_FORMAT(users.created_at , '%m') >= 09 AND DATE_FORMAT(users.created_at , '%m') <= 12) AND (DATE_FORMAT(users.created_at , '%Y') = Year(Now()) OR DATE_FORMAT(users.created_at , '%Y') = Year(Now()) - 1))
                OR ((DATE_FORMAT(users.created_at , '%m') >= 01 AND DATE_FORMAT(users.created_at , '%m') <= 08) AND DATE_FORMAT(users.created_at , '%Y') = Year(Now()) 
                AND MONTH(Now()) <= 09 ), 
                '+','-') as now
                FROM levels INNER JOIN (tasks INNER JOIN (users INNER JOIN sessions ON users.id = sessions.user_id) ON tasks.id = sessions.task_id) ON levels.id = tasks.level_id
                WHERE sessions.result = 1
                GROUP BY tasks.id, users.login, levels.score
                )t
            WHERE now='+'
            GROUP BY t.user, login
            ORDER BY score DESC LIMIT 5;"
        );
        // возвращаем топ пользователей
        return $users;
    }

    public function UserUpdate(Request $request) 
    {
        // валидация приходящих данных
        $validator = Validator::make($request->all(), [
            "fname" => 'required|max:30', // обязательно поле, максимум 30 символов
            "nname" => 'required|max:30', // обязательно поле, максимум 30 символов
            "oname" => 'required|max:30', // обязательно поле, максимум 30 символов
            "group" => 'required|max:10', // обязательно поле, максимум 10 символов
            "password" => 'max:128', // максимум 128 символов
        ]);
        // если с валидацией проблемы..
        if ($validator->fails()) {
            // определеяем ошибку..
            $error = $validator->errors()->first();
            // и выводим  ее
            return response()->json([
                'status'=> 'Error', 
                'message' => $error, 
                'data' => null
            ], 400);
        }
        // находим под каким пользователем мы сидим
        $user = Auth::user();
        // если пароль пустой, то..
        if (is_null($request->password))
        {
            // оставляем пароль таким, каким он был раньше
            $request->password = User::where('id', $user->id)->get()[0]['password'];
        }
        else
        {
            // изменяем пароль, захэшировав его
            $request->password = Hash::make($request->password);
        }
        $user->fname = $request->fname; // указываем новые данные поля
        $user->nname = $request->nname; // указываем новые данные поля
        $user->oname = $request->oname; // указываем новые данные поля
        $user->group = $request->group; // указываем новые данные поля
        $user->password = $request->password; // указываем новые данные поля
        $user->save(); // сохраняем
        // возвращаем сообщение об успешной операции
        return response()->json([
            'status'=> 'Success', 
            'message' => 'Save', 
            'data' => $user
        ], 202);
    }
}