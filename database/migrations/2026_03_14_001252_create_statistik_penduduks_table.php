<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('statistik_penduduk', function (Blueprint $table) {
    $table->id();
    $table->year('tahun');
    $table->integer('jumlah_penduduk');
    $table->integer('laki_laki');
    $table->integer('perempuan');
    $table->integer('jumlah_kk');
    $table->timestamps();
});;
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statistik_penduduks');
    }
};
