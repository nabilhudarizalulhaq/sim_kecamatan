<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Desa;
use App\Models\StatistikPenduduk;
use App\Models\PermohonanLayanan;
use App\Models\Pengaduan;

class DashboardController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function index()
    {
        return inertia('Admin/Dashboard', [
            'desa' => Desa::count(),
            'penduduk' => StatistikPenduduk::sum('jumlah_penduduk'),
            'layanan' => PermohonanLayanan::count(),
            'pengaduan' => Pengaduan::count(),
        ]);
  }
}