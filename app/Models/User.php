<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $fillable = [
        'login',
        'fname',
        'nname',
        'oname',
        'group',
        'password',
        'role_id',
    ];
    protected $hidden = [
        'remember_token',
        'created_at', 
        'updated_at'
    ];
    public function session()
    {
        return $this->hasMany(Session::class);
    }
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}