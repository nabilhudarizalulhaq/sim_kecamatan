import React from 'react';
import Layout from './Layout';

export default function Dashboard({ desa, penduduk, layanan, pengaduan }) {
    return (
        <Layout title="Dashboard Admin">
            <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white shadow rounded p-4">
                    <h2 className="text-gray-500">Desa</h2>
                    <p className="text-2xl font-bold">{desa}</p>
                </div>
                <div className="bg-white shadow rounded p-4">
                    <h2 className="text-gray-500">Penduduk</h2>
                    <p className="text-2xl font-bold">{penduduk}</p>
                </div>
                <div className="bg-white shadow rounded p-4">
                    <h2 className="text-gray-500">Layanan</h2>
                    <p className="text-2xl font-bold">{layanan}</p>
                </div>
                <div className="bg-white shadow rounded p-4">
                    <h2 className="text-gray-500">Pengaduan</h2>
                    <p className="text-2xl font-bold">{pengaduan}</p>
                </div>
            </div>
        </Layout>
    );
}