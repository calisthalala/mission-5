import React from "react";
import Navbar from "../components/navbar";


const videos = [
  { title: "Big 4 Auditor Financial Analyst", image: "/a.png", mentorAvatar: "/aa.png" },
  { title: "Big 4 Auditor Financial Analyst", image: "/b.png", mentorAvatar: "/bb.png" },
  { title: "Big 4 Auditor Financial Analyst", image: "/c.png", mentorAvatar: "/cc.png" },
  { title: "Big 4 Auditor Financial Analyst", image: "/d.png", mentorAvatar: "/dd.png" },
  { title: "Big 4 Auditor Financial Analyst", image: "/e.png", mentorAvatar: "/ee.png" },
  { title: "Big 4 Auditor Financial Analyst", image: "/f.png", mentorAvatar: "/ff.png" },
  { title: "Big 4 Auditor Financial Analyst", image: "/g.png", mentorAvatar: "/gg.png" },
  { title: "Big 4 Auditor Financial Analyst", image: "/h.png", mentorAvatar: "/hh.png" },
  { title: "Big 4 Auditor Financial Analyst", image: "/i.png", mentorAvatar: "/ii.png" },
];

const Home = () => {
  return (
    <div className="bg-[#FFFDF3] text-gray-800">

      <Navbar />


      {/* HERO */}
      <section className="px-4 md:px-10 mt-6">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="./fot-1.png"
            className="w-full h-[260px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4 text-white">
            <h2 className="text-xl md:text-4xl font-bold max-w-2xl">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h2>
            <p className="mt-3 text-xs md:text-sm max-w-xl text-gray-200">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
            </p>
            <button className="mt-5 bg-green-500 hover:bg-green-600 px-5 py-2.5 rounded-md text-xs md:text-sm font-medium">
              Temukan Video Course untuk Dipelajari!!
            </button>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="px-4 md:px-10 mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">
          Koleksi Video Pembelajaran Unggulan
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>

        {/* TABS */}
        <div className="flex gap-6 mt-6 text-sm text-gray-500 overflow-x-auto whitespace-nowrap pb-2">
          {["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"].map((tab, i) => (
            <span
              key={i}
              className={`pb-2 cursor-pointer ${
                i === 0
                  ? "text-orange-500 border-b-2 border-orange-500 font-medium"
                  : ""
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-black/10 shadow-sm overflow-hidden"
            >
              <img
                src={video.image}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <h4 className="font-semibold text-sm">
                  {video.title}
                </h4>

                <p className="text-xs text-gray-500 mt-2">
                  Mulai transformasi dengan instruktur profesional, harga terjangkau, dan...
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <img
                    src={video.mentorAvatar}
                    className="w-7 h-7 rounded-md object-cover"
                  />
                  <div className="text-xs">
                    <p className="font-medium">Jenna Ortega</p>
                    <p className="text-gray-500">Senior Accountant di Gojek</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-yellow-400">★★★☆☆ <span className="text-gray-500">3.5 (86)</span></span>
                  <span className="text-green-600 font-semibold text-sm">Rp 300K</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-4 md:px-10 mt-20">
        <div className="relative rounded-xl overflow-hidden">
          <img src="./fot-3.png" className="w-full h-[300px] object-cover" />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4 text-white">
            <p className="text-xs tracking-widest">NEWSLETTER</p>
            <h3 className="text-xl md:text-2xl font-bold mt-2">Mau Belajar Lebih Banyak?</h3>
            <p className="text-sm mt-2 max-w-xl text-gray-200">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan <br/> penawaran spesial dari program-program terbaik hariesok.id
            </p>

            <div className="mt-6 flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden w-full max-w-md">
              <input
                type="email"
                placeholder="Masukkan Emailmu"
                className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
              />
              <button className="bg-yellow-500 hover:bg-yellow-00 px-6 py-3 text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white mt-20 px-4 md:px-10 pt-14 pb-6 text-sm text-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-yellow-500 font-bold text-lg">videobelajar</h4>
            <p className="mt-3">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
            <ul className="space-y-1">
              <li>Jl. Usman Effendi No. 50 Lowokwaru, Malang</li><li>+62-877-7123-1234</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Kategori</h5>
            <ul className="space-y-1">
              <li>Digital & teknologi</li><li>Pemasaran</li><li>Manajemen Bisnis</li><li>Pengembangan Diri</li><li>Desain</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Perusahaan</h5>
            <ul className="space-y-1">
              <li>Tentang Kami</li><li>FAQ</li><li>Kebijakan Privasi</li><li>Ketentuan Layanan</li><li>Bantuan</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Komunitas</h5>
            <ul className="space-y-1">
              <li>Tips Sukses</li><li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-xs">
          ©2023 Gerobak Sayur All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

export default Home;
