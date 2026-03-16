import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Layout({ children, title }) {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow flex flex-col">
                <div className="p-6 text-xl font-bold border-b">Admin Panel</div>
                <nav className="flex-1 p-4">
                    <ul>
                        <li className="mb-2">
                            <Link href="/admin/dashboard" className="block p-2 rounded hover:bg-gray-200">Dashboard</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="block p-2 rounded hover:bg-gray-200">Layanan</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#" className="block p-2 rounded hover:bg-gray-200">Pengaduan</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-auto">
                <Head title={title} />
                <header className="bg-white shadow p-4">Navbar</header>
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}