<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Ticket;
use App\Models\Aircraft;

class Flight extends Model
{
    use HasFactory;
    protected $fillable = [
        "number",
        "time_fly",
        "aircraft_id",
        "town_from",
        "town_to",
        "price"
    ];

    public function aircrafts()
    {
        return $this->belongsTo(Aircraft::class);
    }
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
