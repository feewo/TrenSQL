<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Base extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        "dbname"
    ];

    public function task()
    {
        return $this->hasMany(Task::class);
    }
}