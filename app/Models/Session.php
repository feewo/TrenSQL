<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;
    protected $fillable = [
        "result",
        "user_id",
        "task_id"
    ];

    public function users()
    {
        return $this->belongto(User::class);
    }
    public function tasks()
    {
        return $this->belongto(Task::class);
    }
}
