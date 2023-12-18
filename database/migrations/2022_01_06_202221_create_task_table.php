<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskTable extends Migration
{
    public function up()
    {
        Schema::connection('sql')->create('Tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('base_id')->constrained()->onDelete('cascade');
            $table->string('name', 70);
            $table->string('task', 200);
            $table->foreignId('level_id')->constrained()->onDelete('cascade');
            $table->string('ssql', 300);
            $table->string('img', 100);
        });
    }
    public function down()
    {
        Schema::connection('sql')->dropIfExists('Tasks');
    }
    
}