import { Head } from "@inertiajs/react";
import FrontendLayout from "@/Layouts/FrontendLayout";

export default function Welcome() {
    return (
        <FrontendLayout>

            <Head title="Website Kecamatan" />

            {/* Hero */}
            <section className="bg-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h2 className="text-4xl font-bold mb-4">
                            Selamat Datang di Website Resmi Kecamatan
                        </h2>

                        <p className="text-lg mb-6">
                            Portal informasi pelayanan masyarakat,
                            berita daerah, dan pengumuman resmi
                            Kecamatan Sukamaju.
                        </p>

                        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
                            Lihat Layanan
                        </button>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                        className="rounded-lg shadow-lg"
                    />

                </div>
            </section>


            {/* Layanan */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <h3 className="text-3xl font-bold text-center mb-12">
                    Layanan Kecamatan
                </h3>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h4 className="text-xl font-semibold mb-2">
                            Surat Domisili
                        </h4>
                        <p className="text-gray-600">
                            Pelayanan pembuatan surat domisili untuk warga.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h4 className="text-xl font-semibold mb-2">
                            Surat Usaha
                        </h4>
                        <p className="text-gray-600">
                            Pengajuan surat keterangan usaha.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h4 className="text-xl font-semibold mb-2">
                            Surat Pindah
                        </h4>
                        <p className="text-gray-600">
                            Pelayanan administrasi pindah domisili.
                        </p>
                    </div>

                </div>

            </section>


            {/* Berita */}
            <section className="bg-gray-100 py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <h3 className="text-3xl font-bold text-center mb-12">
                        Berita Terbaru
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white rounded-xl shadow overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"/>
                            <div className="p-6">
                                <h4 className="font-semibold mb-2">
                                    Program Bantuan UMKM
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Kecamatan meluncurkan program bantuan untuk UMKM lokal.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786"/>
                            <div className="p-6">
                                <h4 className="font-semibold mb-2">
                                    Pelayanan Administrasi Online
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Kini pelayanan administrasi bisa dilakukan secara online.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"/>
                            <div className="p-6">
                                <h4 className="font-semibold mb-2">
                                    Sosialisasi Program Desa
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Sosialisasi program pembangunan desa.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


            {/* Statistik */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <h3 className="text-3xl font-bold text-center mb-12">
                    Statistik Wilayah
                </h3>

                <div className="grid md:grid-cols-4 gap-8 text-center">

                    <div>
                        <p className="text-4xl font-bold text-blue-700">12</p>
                        <p>Desa</p>
                    </div>

                    <div>
                        <p className="text-4xl font-bold text-blue-700">45</p>
                        <p>RT/RW</p>
                    </div>

                    <div>
                        <p className="text-4xl font-bold text-blue-700">32K</p>
                        <p>Penduduk</p>
                    </div>

                    <div>
                        <p className="text-4xl font-bold text-blue-700">250</p>
                        <p>UMKM</p>
                    </div>

                </div>

            </section>

        </FrontendLayout>
    );
}