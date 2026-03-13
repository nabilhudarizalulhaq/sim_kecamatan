import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />

            <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200">

                {/* Navbar */}
                <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold text-indigo-600">
                        MyApp
                    </h1>

                    <div className="space-x-4">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="px-4 py-2 rounded-lg hover:text-indigo-600 transition"
                                >
                                    Login
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-5xl font-bold leading-tight mb-6">
                            Build Modern Web Apps
                            <span className="text-indigo-600"> Faster</span>
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Laravel + React + Inertia memberikan pengalaman
                            pengembangan yang powerful untuk membuat aplikasi
                            web modern yang cepat, scalable, dan elegan.
                        </p>

                        <div className="flex gap-4">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("register")}
                                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                                    >
                                        Get Started
                                    </Link>

                                    <Link
                                        href={route("login")}
                                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                    >
                                        Login
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </section>

                {/* Features */}
                <section className="max-w-7xl mx-auto px-8 py-16">

                    <h3 className="text-3xl font-bold text-center mb-12">
                        Why Choose Our Platform
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
                            <h4 className="text-xl font-semibold mb-3">
                                ⚡ Fast Development
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                Laravel dan React membuat proses development
                                lebih cepat dan efisien.
                            </p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
                            <h4 className="text-xl font-semibold mb-3">
                                🔒 Secure
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                Dibangun dengan standar keamanan modern.
                            </p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
                            <h4 className="text-xl font-semibold mb-3">
                                🎨 Modern UI
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                Tampilan clean, responsive, dan user friendly.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center py-10 text-sm text-gray-500 border-t dark:border-gray-800">
                    Laravel v{laravelVersion} (PHP v{phpVersion})
                </footer>

            </div>
        </>
    );
}

// import { Head, Link } from "@inertiajs/react";

// export default function Welcome() {
//     return (
//         <>
//             <Head title="Website Kecamatan" />

//             <div className="min-h-screen bg-gray-50 text-gray-800">

//                 {/* Navbar */}
//                 <nav className="bg-white shadow">
//                     <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//                         <h1 className="text-xl font-bold text-blue-700">
//                             Kecamatan Sukamaju
//                         </h1>

//                         <div className="space-x-6">
//                             <a href="#" className="hover:text-blue-600">Beranda</a>
//                             <a href="#" className="hover:text-blue-600">Profil</a>
//                             <a href="#" className="hover:text-blue-600">Layanan</a>
//                             <a href="#" className="hover:text-blue-600">Berita</a>
//                             <a href="#" className="hover:text-blue-600">Kontak</a>
//                         </div>
//                     </div>
//                 </nav>

//                 {/* Hero */}
//                 <section className="bg-blue-700 text-white py-20">
//                     <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
//                         <div>
//                             <h2 className="text-4xl font-bold mb-4">
//                                 Selamat Datang di Website Resmi Kecamatan
//                             </h2>

//                             <p className="text-lg mb-6">
//                                 Portal informasi pelayanan masyarakat,
//                                 berita daerah, dan pengumuman resmi
//                                 Kecamatan Sukamaju.
//                             </p>

//                             <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
//                                 Lihat Layanan
//                             </button>
//                         </div>

//                         <img
//                             src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
//                             className="rounded-lg shadow-lg"
//                         />
//                     </div>
//                 </section>

//                 {/* Layanan */}
//                 <section className="max-w-7xl mx-auto px-6 py-16">
//                     <h3 className="text-3xl font-bold text-center mb-12">
//                         Layanan Kecamatan
//                     </h3>

//                     <div className="grid md:grid-cols-3 gap-8">

//                         <div className="bg-white p-6 rounded-xl shadow">
//                             <h4 className="text-xl font-semibold mb-2">
//                                 Surat Domisili
//                             </h4>
//                             <p className="text-gray-600">
//                                 Pelayanan pembuatan surat domisili untuk warga.
//                             </p>
//                         </div>

//                         <div className="bg-white p-6 rounded-xl shadow">
//                             <h4 className="text-xl font-semibold mb-2">
//                                 Surat Usaha
//                             </h4>
//                             <p className="text-gray-600">
//                                 Pengajuan surat keterangan usaha.
//                             </p>
//                         </div>

//                         <div className="bg-white p-6 rounded-xl shadow">
//                             <h4 className="text-xl font-semibold mb-2">
//                                 Surat Pindah
//                             </h4>
//                             <p className="text-gray-600">
//                                 Pelayanan administrasi pindah domisili.
//                             </p>
//                         </div>

//                     </div>
//                 </section>

//                 {/* Berita */}
//                 <section className="bg-gray-100 py-16">
//                     <div className="max-w-7xl mx-auto px-6">

//                         <h3 className="text-3xl font-bold text-center mb-12">
//                             Berita Terbaru
//                         </h3>

//                         <div className="grid md:grid-cols-3 gap-8">

//                             <div className="bg-white rounded-xl shadow overflow-hidden">
//                                 <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"/>
//                                 <div className="p-6">
//                                     <h4 className="font-semibold mb-2">
//                                         Program Bantuan UMKM
//                                     </h4>
//                                     <p className="text-gray-600 text-sm">
//                                         Kecamatan meluncurkan program bantuan
//                                         untuk UMKM lokal.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="bg-white rounded-xl shadow overflow-hidden">
//                                 <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786"/>
//                                 <div className="p-6">
//                                     <h4 className="font-semibold mb-2">
//                                         Pelayanan Administrasi Online
//                                     </h4>
//                                     <p className="text-gray-600 text-sm">
//                                         Kini pelayanan administrasi bisa
//                                         dilakukan secara online.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="bg-white rounded-xl shadow overflow-hidden">
//                                 <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"/>
//                                 <div className="p-6">
//                                     <h4 className="font-semibold mb-2">
//                                         Sosialisasi Program Desa
//                                     </h4>
//                                     <p className="text-gray-600 text-sm">
//                                         Sosialisasi program pembangunan desa.
//                                     </p>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </section>

//                 {/* Statistik */}
//                 <section className="max-w-7xl mx-auto px-6 py-16">
//                     <h3 className="text-3xl font-bold text-center mb-12">
//                         Statistik Wilayah
//                     </h3>

//                     <div className="grid md:grid-cols-4 gap-8 text-center">

//                         <div>
//                             <p className="text-4xl font-bold text-blue-700">
//                                 12
//                             </p>
//                             <p>Desa</p>
//                         </div>

//                         <div>
//                             <p className="text-4xl font-bold text-blue-700">
//                                 45
//                             </p>
//                             <p>RT/RW</p>
//                         </div>

//                         <div>
//                             <p className="text-4xl font-bold text-blue-700">
//                                 32K
//                             </p>
//                             <p>Penduduk</p>
//                         </div>

//                         <div>
//                             <p className="text-4xl font-bold text-blue-700">
//                                 250
//                             </p>
//                             <p>UMKM</p>
//                         </div>

//                     </div>
//                 </section>

//                 {/* Footer */}
//                 <footer className="bg-blue-700 text-white py-8 text-center">
//                     <p>
//                         © 2026 Website Resmi Kecamatan Sukamaju
//                     </p>
//                 </footer>

//             </div>
//         </>
//     );
// }