<?php

namespace App\Traits;

use Carbon\Carbon;

trait ApiResponser{
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //  Данный файл служит для облегчения отправки ответов в виде json, шаблонизирование ответов
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	// -----------------------
	//  возвращение с токеном
	// -----------------------
	protected function token($data, $personalAccessToken, $message = null, $code = 200)
	{
		// создаем массив
		$tokenData = [
			'access_token' => $personalAccessToken->accessToken, // указываем полученный токен
            'token_type' => 'Bearer', // вид токена
            'expires_at' => Carbon::parse($personalAccessToken->token->expires_at)->toDateTimeString(), // дата до какого числа токен действует
		];
		// возвращаем ответ
		return response()->json([
			'status'=> 'Success',  
			'message' => $message,  // null, если не указано сообщение
			'token' => $tokenData, // массив с информацией о токене
			'data' => $data // принятый массив (пользователь в auth)
		], $code); // 200
	}
	
	// -----------------------------------
	//  возвращение положительного ответа
	// -----------------------------------
    protected function success($data, $message = null, $code = 200)
	{
		return response()->json([
			'status'=> 'Success', 
			'message' => $message, // null, если не указано сообщение
			'data' => $data // принятый массив (пользователь в auth)
		], $code); // 200
	}
	// ---------------------
	//  возвращение ошибки
	// ---------------------
	protected function error($message = null, $code)
	{
		return response()->json([
			'status'=>'Error',
			'message' => $message, // null, если не указано сообщение
			'data' => null // null
		], $code); // ошибка
	}

}