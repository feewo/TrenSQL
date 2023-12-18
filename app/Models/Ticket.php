<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Flight;
use App\Models\Customer;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        "flight_id",
        "customer_id",
        "row",
        "seat",
        "date_fly"
    ];

    public function flights()
    {
        return $this->belongsTo(Flight::class);
    }
    public function customers()
    {
        return $this->belongsTo(Customer::class);
    }
}
