<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWatchFilmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('film')->create('watch_films', function (Blueprint $table) {
            $table->id();
            $table->foreignId("film_id")->constrained()->onDelete('cascade');
            $table->foreignId("cinema_id")->constrained()->onDelete('cascade');
            $table->date("date");
            $table->integer("price");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('film')->dropIfExists('watch_films');
    }
}
