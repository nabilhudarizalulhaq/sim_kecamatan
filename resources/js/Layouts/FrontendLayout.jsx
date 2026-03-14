import { Link } from "@inertiajs/react";

export default function FrontendLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">

            {/* Navbar */}
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    <h1 className="text-xl font-bold text-blue-700">
                        Kecamatan Sukamaju
                    </h1>

                    <div className="space-x-6">
                        <Link href="/" className="hover:text-blue-600">Beranda</Link>
                        <Link href="/profil" className="hover:text-blue-600">Profil</Link>
                        <Link href="/layanan" className="hover:text-blue-600">Layanan</Link>
                        <Link href="/berita" className="hover:text-blue-600">Berita</Link>
                        <Link href="/kontak" className="hover:text-blue-600">Kontak</Link>
                    </div>

                </div>
            </nav>

            {/* Content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-blue-700 text-white py-8 text-center mt-20">
                <p>© 2026 Website Resmi Kecamatan Sukamaju</p>
            </footer>

        </div>
    );
}