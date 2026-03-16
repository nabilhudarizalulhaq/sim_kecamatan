<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Admin Kecamatan',
            'email' => 'admin@kecamatan.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'Operator Kecamatan',
            'email' => 'operator@kecamatan.com',
            'password' => Hash::make('password'),
            'role' => 'operator',
        ]);
    }
}