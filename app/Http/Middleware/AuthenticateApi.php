<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class AuthenticateApi extends Middleware
{
    public function authenticate($request, array $guards)
    {
        $token = $request->query('api_token');
        if (empty($token)){
            $token = $request->header('X-API-KEY');
        }
        if ($token === config('apitokens')[0]) return;
        return abort(403);
        // $this->unauthenticated($request, $guards);
    }
}