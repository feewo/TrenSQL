<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLaureatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('nobel')->create('laureats', function (Blueprint $table) {
            $table->id();
            $table->integer("year");
            $table->string("name", 50);
            $table->foreignId("country_id")->constrained()->onDelete('cascade');
            $table->foreignId("type_id")->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('nobel')->dropIfExists('laureats');
    }
}
