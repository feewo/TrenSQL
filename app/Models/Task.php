<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        "base_id",
        "name",
        "task",
        "level_id",
        "ssql",
        "img"
    ];

    public function base()
    {
        return $this->belongsTo(Base::class);
    }
    public function level()
    {
        return $this->belongsTo(Level::class);
    }
    
    public function sessions()
    {
        return $this->hasMany(Session::class);
    }
}