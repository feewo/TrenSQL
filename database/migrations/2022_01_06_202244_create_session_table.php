<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSessionTable extends Migration
{
    public $timestamps = true;
    public function up()
    {
        Schema::connection('sql')->create('Sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('task_id')->constrained()->onDelete('cascade');
            $table->boolean("result");
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::connection('sql')->dropIfExists('Sessions');
    }
}
