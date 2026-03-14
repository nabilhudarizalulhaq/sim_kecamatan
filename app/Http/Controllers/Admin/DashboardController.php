<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Desa;
use App\Models\StatistikPenduduk;
use App\Models\PermohonanLayanan;
use App\Models\Pengaduan;

class DashboardController extends Controller
{
    public function index()
    {
        $desa = Desa::count();
        $penduduk = StatistikPenduduk::sum('jumlah_penduduk');
        $layanan = PermohonanLayanan::count();
        $pengaduan = Pengaduan::count();

        return inertia('Admin/Dashboard', [
            'desa' => $desa,
            'penduduk' => $penduduk,
            'layanan' => $layanan,
            'pengaduan' => $pengaduan
        ]);
    }
}