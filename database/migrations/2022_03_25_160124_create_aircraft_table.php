<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAircraftTable extends Migration
{

    public function up()
    {
        Schema::connection('avia_ticket')->create('aircrafts', function (Blueprint $table) {
            $table->id();
            $table->string("name_aircraft", 30);
            $table->string("country", 30);
        });
    }


    public function down()
    {
        Schema::connection('avia_ticket')->dropIfExists('aircrafts');
    }
}
