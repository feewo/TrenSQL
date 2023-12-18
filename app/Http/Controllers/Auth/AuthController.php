<?php

namespace App\Http\Controllers\Auth;

// use App\User;
use App\Models\User;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Laravel\Passport\Passport;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthController extends Controller
{
    use ApiResponser; // благодаря ей возвращается стандартный json-ответ app\Traits\ApiResponser.php
    // ----------------------------------------------------------
    //  показываю страницы по запросу в web.php (routes\web.php)
    // ----------------------------------------------------------
    // возвращаем страницу с регистрацией
    public function showRegisterForm() 
    {
        return view('auth.register');
    }
    // возвращаем страницу с логином
    public function showLoginForm() 
    {
        return view('auth.login');
    }
    // ------------------
    //       ЛОГИН
    // ------------------
    public function login(Request $request)
    {
        // валидация
        $validator = Validator::make($request->all(), [
            "login" => 'required|exists:users', // обязательное поле, должно совпадать хотя бы с одним user
            "password" => 'required' // обязательное поле
        ]);
        // если валидация прошла безуспешно..
        if ($validator->fails()) {
            // находим ошибку
            $error = $validator->errors()->first();
            // отправляем ее
            return $this->error($error, 401);
        }
        // Получаем проверенные данные...
        $attr = $validator->validated();
        // если пользователя такого нет
        if (!Auth::attempt($attr)) {
            // выводим ошибку
            return $this->error('Credentials mismatch', 401);
        }
        // если пользователь такой есть, то 
        // находим этого пользователя с его баллами
        $user = DB::select(
            "SELECT t.login, t.fname, t.nname, t.oname, t.group, sum(t.score) as score
            from(
            SELECT users.login, users.fname, users.nname, users.oname, users.group , levels.score, Count(tasks.id) AS count
            FROM (levels INNER JOIN tasks ON levels.id = tasks.level_id) INNER JOIN (users INNER JOIN sessions ON users.id = sessions.user_id) ON tasks.id = sessions.task_id
            WHERE users.login='" . $attr['login'] . "'and sessions.result=1
            GROUP BY tasks.id, users.login, levels.score
            )t
            GROUP BY t.login"
        );
        // если массив пустой (это бывает в случае, когда пользователь не решал задания)..
        if ($user  === array()) {
            // создаем такой же массив, но с 0 баллами
            $user = DB::select(
                "SELECT users.login, users.fname, users.nname, users.oname, users.group, '0' as score
                FROM users
                WHERE users.login='" . $attr['login'] . "'"
            );
        }
        // определяем роль этого пользователя (admin или user)
        $admin_token = User::select("role_id")->where("login", $attr['login'])->get()[0]['role_id'];
        // возвращаем токен и пользователя PS:token->app\Traits\ApiResponser.php, getPersonalAccessToken->самая нижняя функция этого класса
        return $this->token($user, $this->getPersonalAccessToken($admin_token));
    }
    // ------------------
    //     РЕГИСТРАЦИЯ
    // ------------------
    public function signup(Request $request)
    {
        // валидируем данные
        $validator = Validator::make($request->all(), [
            "login" => 'required|unique:users,login', // обязательное поле, логин должен быть уникальным
            "fname" => 'required', // обязательное поле
            "nname" => 'required', // обязательное поле
            "oname" => 'required', // обязательное поле
            "group" => 'required', // обязательное поле
            "password" => 'required' // обязательное поле
        ]);
        // если валидация прошла безуспешно..
        if ($validator->fails()) {
            // находим ошибку
            $error = $validator->errors()->first();
            // отправляем ее
            return $this->error($error, 400);
        }
        // Получить проверенные данные...
        $attr = $validator->validated();
        // создаем нового пользователя
        User::create([
            "login" => $attr['login'],
            "fname" => $attr['fname'],
            "nname" => $attr['nname'],
            "oname" => $attr['oname'],
            "group" => $attr['group'],
            "password" => Hash::make($attr['password']),
            "role_id" => 1,
        ]);
        // выводим полученные логин и пароль
        Auth::attempt(['login' => $attr['login'], 'password' => $attr['password']]);
        // возвращаем созданного пользователя PS:success->app\Traits\ApiResponser.php
        return $this->success($attr, 'User Created', 201);
    }
    // ---------------------
    //   ВЫХОД ИЗ АККАУНТА
    // ---------------------
    public function logout()
    {
        // удаляем токена пользователя
        Auth::user()->token()->revoke();
        // возвращаем об успешном выходе пользователя
        return $this->success('User Logged Out', 200);
    }

    public function getPersonalAccessToken($admin_token)
    {
        // если пользователь является администратором
        if ($admin_token == '2') {
            // назначаем ему scope(права) 'get-admin' и создаем токен
            return Auth::user()->createToken('Personal Access Token', ['get-admin']);
        }
        // иначе создаем токен обычным смертным
        return Auth::user()->createToken('Personal Access Token');
    }
}