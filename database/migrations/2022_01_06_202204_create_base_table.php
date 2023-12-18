<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBaseTable extends Migration
{
    public function up()
    {
        Schema::connection('sql')->create('Bases', function (Blueprint $table) {
            $table->id();
            $table->string('dbname', 30);
        });
    }
    public function down()
    {
        Schema::connection('sql')->dropIfExists('Bases');
    }
}
