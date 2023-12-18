<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlightsTable extends Migration
{
    public function up()
    {
        Schema::connection('avia_ticket')->create('flights', function (Blueprint $table) {
            $table->id();
            $table->string("number", 4);
            $table->time("time_fly", $precision = 0);
            $table->foreignId("aircrafts_id")->constrained()->onDelete('cascade');
            $table->string("town_from", 30);
            $table->string("town_to", 30);
            $table->double("price", 10, 2);
        });
    }

    public function down()
    {
        Schema::connection('avia_ticket')->dropIfExists('flights');
    }
}
