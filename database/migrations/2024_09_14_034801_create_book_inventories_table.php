<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('book_inventory', function (Blueprint $table) {
            $table->id();
            $table->foreignId('book_id');
            $table->foreignId('inventory_id');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('book_inventory');
    }
};
