<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('avia_ticket')->create('tickets', function (Blueprint $table) {
            $table->id();
            $table->integer("flight_id")->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer("customer_id")->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer("row");
            $table->integer("seat");
            $table->date("date_fly");
        });
    }

    public function down()
    {
        Schema::connection('avia_ticket')->dropIfExists('tickets');
    }
}
