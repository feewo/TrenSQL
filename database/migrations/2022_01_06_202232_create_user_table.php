<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTable extends Migration
{
    public function up()
    {
        Schema::connection('sql')->create('Users', function (Blueprint $table) {
            $table->id();
            $table->string('login', 30);
            $table->string('fname', 30);
            $table->string('nname', 30);
            $table->string('oname', 30);
            $table->string('group', 10);
            $table->string('password', 128);
            $table->foreignId('role_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::connection('sql')->dropIfExists('Users');
    }
}