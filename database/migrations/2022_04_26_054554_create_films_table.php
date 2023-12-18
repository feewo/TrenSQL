<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('film')->create('films', function (Blueprint $table) {
            $table->id();
            $table->string("name", 50);
            $table->integer('duration');
            $table->integer('year');
            $table->foreignId('genre_id')->constrained()->onDelete('cascade');
            $table->foreignId("actor_id")->constrained()->onDelete('cascade');
            $table->foreignId("producer_id")->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('film')->dropIfExists('films');
    }
}
