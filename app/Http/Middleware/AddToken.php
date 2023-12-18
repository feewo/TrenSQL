<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AddToken
{
    public function handle($request, Closure $next)
    {
        $token = isset($_COOKIE["token"])?$_COOKIE["token"]:"";
        //$request['token'] = $token;//this is working
        $request->headers->set("Authorization", "Bearer $token");//this is working
        $response = $next($request);
        //$response->header('header name', 'header value');
        return $response;
    }
}