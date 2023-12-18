<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        "role",
    ];
    public function user()
    {
        return $this->hasMany(User::class);
    }
}