<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class level extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        "lvl",
        "score"
    ];
    
    public function task()
    {
        return $this->hasMany(Task::class);
    }
}