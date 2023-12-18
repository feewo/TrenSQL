<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLevelTable extends Migration
{
    
    public function up()
    {
        Schema::connection('sql')->create('Levels', function (Blueprint $table) {
            $table->id();
            $table->string('lvl', 30);
            $table->integer('score');
        });
    }
    public function down()
    {
        Schema::connection('sql')->dropIfExists('levels');
    }
}