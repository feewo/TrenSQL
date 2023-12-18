<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Flight;

class Aircraft extends Model
{
    use HasFactory;
    protected $fillable = [
        "name_aircraft",
        "сountry"
    ];

    public function flights()
    {
        return $this->hasMany(Flight::class);
    }
}
