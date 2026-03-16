import { Link } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-blue-800 text-white">

                <div className="p-6 text-xl font-bold border-b border-blue-700">
                    Admin Kecamatan
                </div>

                <nav className="p-4 space-y-2">

                    <Link href="/admin/dashboard" className="block p-2 rounded hover:bg-blue-700">
                        Dashboard
                    </Link>

                    <Link href="/admin/desa" className="block p-2 rounded hover:bg-blue-700">
                        Data Desa
                    </Link>

                    <Link href="/admin/statistik" className="block p-2 rounded hover:bg-blue-700">
                        Statistik Penduduk
                    </Link>

                    <Link href="/admin/layanan" className="block p-2 rounded hover:bg-blue-700">
                        Layanan
                    </Link>

                    <Link href="/admin/berita" className="block p-2 rounded hover:bg-blue-700">
                        Berita
                    </Link>

                    <Link href="/admin/pengaduan" className="block p-2 rounded hover:bg-blue-700">
                        Pengaduan
                    </Link>

                </nav>

            </aside>


            {/* Content */}
            <div className="flex-1">

                {/* Topbar */}
                <header className="bg-white shadow p-4 flex justify-between">
                    <h1 className="font-semibold">Dashboard Admin</h1>

                    <div>
                        Admin
                    </div>
                </header>


                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>

            </div>

        </div>
    );
}