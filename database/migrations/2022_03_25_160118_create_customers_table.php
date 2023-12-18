<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    public function up()
    {
        Schema::connection('avia_ticket')->create('customers', function (Blueprint $table) {
            $table->id();
            $table->string("fam", 30);
            $table->string("name", 30);
            $table->string("surname", 30);
            $table->string("address", 100);
            $table->string("passport", 11);
            $table->boolean("child")->default(0);
        });
    }

    public function down()
    {
        Schema::connection('avia_ticket')->dropIfExists('customers');
    }
}
