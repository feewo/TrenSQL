<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = [
        "fam",
        "name",
        "surname",
        "address",
        "passport"
    ];
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
