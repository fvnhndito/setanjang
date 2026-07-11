"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Beaker,
  Users,
  GraduationCap,
  MapPin,
  X,
  Map,
  BookOpen,
  HeartPulse,
  Leaf,
  Cpu,
  Video
} from "lucide-react";

// ─── DATA KELURAHAN JANGLI ───
const jangliSosmas = [
  { id: 1, name: "Mahasiswa 1", title: "Perakitan Blender Daun Smart-Safety 200W", tag: "Teknologi", desc: "Merancang dan menginstalasi komponen kelistrikan serta mekanis pada mesin pencacah daun yang dilengkapi sistem kontrol otomatisasi dan keamanan interlock." },
  { id: 2, name: "Mahasiswa 2", title: "Penataan Tata Letak Gudang UMKM", tag: "Manajemen", desc: "Merancang ulang layout penyimpanan bahan baku dan memberikan pendampingan sistem warehouse untuk meningkatkan efisiensi operasional pengrajin tali plastik." },
  { id: 3, name: "Mahasiswa 3", title: "Sistem Reward Pengumpulan Sampah Dapur", tag: "Lingkungan", desc: "Implementasi sistem reward berbasis kompetisi positif untuk memotivasi partisipasi konsisten warga dalam mengumpulkan sampah sisa buah dan sayur." },
  { id: 4, name: "Mahasiswa 4", title: "Pembuatan QRIS dan Pendataan Google Maps Usaha", tag: "Digitalisasi", desc: "Menginisiasi infrastruktur digital dasar bagi UMKM melalui pendaftaran titik lokasi di Google Maps dan pembuatan QRIS untuk memfasilitasi transaksi non-tunai." },
  { id: 5, name: "Mahasiswa 5", title: "Modul Literasi Glokal Pengelolaan Limbah Organik", tag: "Pendidikan", desc: "Penyusunan dan distribusi modul edukasi lingkungan berbasis kerangka SDGs (Sustainable Development Goals) dengan pendekatan pengalaman lokal warga." },
  { id: 6, name: "Mahasiswa 6", title: "Business Health Check UMKM", tag: "Ekonomi", desc: "Pendampingan evaluasi kesehatan keuangan usaha bagi pelaku UMKM yang mencakup pemisahan keuangan, pencatatan sederhana, dan rekomendasi perbaikan." },
  { id: 7, name: "Mahasiswa 7", title: "Perancangan Alur Reverse Logistics Limbah", tag: "Logistik", desc: "Merancang skema distribusi limbah plastik pilahan agar mengalir langsung dari titik kumpul rumah tangga ke rantai nilai pengrajin tanpa melalui pengepul." },
  { id: 8, name: "Mahasiswa 8", title: "Bimbingan Belajar Literasi Numerasi dan Statistika Dasar", tag: "Pendidikan", desc: "Pendampingan belajar interaktif bagi siswa SD untuk meningkatkan kemampuan numerasi, operasi hitung, dan pengenalan konsep pengolahan data sederhana." },
  { id: 9, name: "Mahasiswa 9", title: "Penerapan Aspek K3 pada Mesin Penghancur Sampah", tag: "Kesehatan & K3", desc: "Implementasi fitur keselamatan (emergency stop) dan penyusunan Standar Operasional Prosedur (SOP) pengoperasian mesin secara aman bagi warga." },
  { id: 10, name: "Mahasiswa 10", title: "Edukasi Literasi Keuangan Dasar Anak SD", tag: "Keuangan", desc: "Kegiatan interaktif untuk mengajarkan anak-anak sekolah dasar mengenai kebiasaan menabung, mengatur uang saku, dan membedakan antara kebutuhan dan keinginan." },
  { id: 11, name: "Mahasiswa 11", title: "Pembuatan Media Promosi Identitas Usaha", tag: "Branding", desc: "Perancangan dan penyediaan media promosi visual berupa banner informasi untuk meningkatkan visibilitas dan aksesibilitas usaha pengrajin limbah plastik." },
  { id: 12, name: "Mahasiswa 12", title: "Digitalisasi Administrasi Produksi dan Penjualan UMKM", tag: "Administrasi", desc: "Pendampingan pembuatan format pencatatan administrasi digital berupa dashboard Excel, buku penjualan, dan database pelanggan untuk merapikan pembukuan." },
  { id: 13, name: "Mahasiswa 13", title: "Penyusunan Media Kit Program Eco-Enzyme", tag: "Publikasi", desc: "Merancang dokumen komunikasi resmi (media kit) program pemberdayaan lingkungan sebagai sarana publikasi dan instrumen untuk menjalin kolaborasi kemitraan." },
  { id: 14, name: "Mahasiswa 14", title: "Sistem Pencatatan Pesanan Digital via Google Spreadsheet", tag: "Teknologi", desc: "Membangun sistem rekapitulasi pesanan otomatis berbasis cloud untuk memudahkan pengrajin memantau status produksi, pembayaran, dan rincian transaksi harian." },
  { id: 15, name: "Mahasiswa 15", title: "Pengembangan Lahan Pekarangan untuk Hortikultura", tag: "Lingkungan", desc: "Pemanfaatan lahan pekarangan warga untuk budidaya tanaman sayuran bernilai gizi dan ekonomi (seperti pakcoy dan selada) guna mendukung ketahanan pangan." }
];

const jangliMD = [
  {
    id: 1,
    type: "saintek",
    title: "Pemanfaatan Limbah Organik Rumah Tangga Menjadi Pupuk (Saintek)",
    summary: "Inovasi pengolahan sampah organik rumah tangga (sisa sayur dan buah) menjadi produk Eco-Enzym tepat guna sebagai penerapan konsep ekonomi sirkular.",
    icon: <Beaker className="h-12 w-12 text-brand-green-dark" />
  },
  {
    id: 2,
    type: "soshum",
    title: "Sosialisasi Pemanfaatan Limbah Organik Rumah Tangga (Soshum Tim 1)",
    summary: "Penyuluhan partisipatif kepada masyarakat mengenai rantai dampak limbah organik dan pengenalan metode pembuatan eco-enzyme serta pupuk organik cair.",
    icon: <GraduationCap className="h-12 w-12 text-brand-charcoal" />
  },
  {
    id: 3,
    type: "soshum",
    title: "Pelatihan Pembuatan Eco-Enzym dari Limbah Organik (Soshum Tim 2)",
    summary: "Pelatihan praktik langsung (hands-on training) guna membekali warga, khususnya ibu-ibu PKK, dengan keterampilan teknis pembuatan eco-enzyme.",
    icon: <GraduationCap className="h-12 w-12 text-brand-charcoal" />
  }
];

// ─── DATA KELURAHAN TANDANG ───
const tandangSosmas = [
  {
    id: 1,
    name: "Mahasiswa 1",
    title: "Sosialisasi & Edukasi Manajemen Logistik Pengelolaan Lapak Bank Sampah",
    tag: "Logistik",
    desc: "Penyusunan alur penerimaan, pemilahan, penimbangan, dan pencatatan barang rongsokan agar tata kelola logistik Bank Sampah RW 3 lebih transparan & akuntabel.",
    background: "Pengelolaan logistik pada lapak bank sampah yang masih dilakukan secara konvensial/manual seringkali menimbulkan ketidakteraturan, seperti tidak jelasnya alur penerimaan barang dari nasabah, proses pemilahan jenis sampah yang kurang terstruktur, hingga pencatatan hasil timbangan dan penjualan yang belum akuntabel. Kegiatan edukasi manajemen logistik ini bertujuan membantu pengurus lapak menyusun alur kerja yang rapi dan terstandar, mulai dari penerimaan barang, klasifikasi jenis rongsokan, penyimpanan di gudang sementara, hingga pencatatan transaksi yang transparan.",
    metode: [
      "Melakukan observasi lapangan langsung pada lapak bank sampah warga untuk memetakan alur kerja saat ini.",
      "Melakukan Forum Group Discussion (FGD) bersama pengelola lapak untuk mengidentifikasi kendala logistik harian.",
      "Menyusun Standar Operasional Prosedur (SOP) sederhana terkait alur penerimaan, penyortiran, dan penyimpanan.",
      "Melakukan simulasi dan pelatihan praktik pengisian buku catatan logistik/kartu stok barang.",
      "Pendampingan secara berkala dan evaluasi penerapan manajemen logistik baru oleh pengurus."
    ],
    luaran: [
      "Papan Bagan Alur (Flowchart) SOP Manajemen Logistik Lapak Bank Sampah yang terpasang di lokasi.",
      "Buku Panduan / Modul Sederhana Manajemen Logistik untuk pengelola lapak bank sampah.",
      "Meningkatnya efisiensi alur kerja dan akuntabilitas pencatatan barang pada lapak bank sampah."
    ]
  },
  {
    id: 2,
    name: "Mahasiswa 2",
    title: "Eco-Art Therapy: Pembuatan Pohon Harapan dari Limbah Ranting & Daun Kering",
    tag: "Psikologi",
    desc: "Seni kriya ekspresif memadukan daur ulang vegetasi kering dan penulisan resolusi psikologis warga untuk membangun ikatan emosional dan asa positif di lingkungan RT/RW.",
    background: "Lingkungan perkotaan yang padat seringkali mengurangi interaksi sosial emosional antarwarga, sementara limbah vegetasi kering (ranting pohon mati dan daun kering) di sekitar balai warga belum dimanfaatkan. Eco-Art Therapy hadir sebagai pendekatan psikologi melalui seni kriya dengan memanfaatkan limbah alam tersebut menjadi 'Pohon Harapan', tempat warga menuliskan aspirasi dan doa bersama demi mempererat kohesi sosial.",
    metode: [
      "Pengumpulan bahan baku limbah ranting pohon mati dan daun kering dari lingkungan sekitar RW 3.",
      "Pemurnian dan pengawetan sederhana ranting agar tahan lama sebagai instalasi seni balai.",
      "Pelaksanaan sesi art therapy bersama warga (anak-anak, pemuda, dan ibu-ibu) dengan menuliskan resolusi/harapan di kartu daun kering.",
      "Kegiatan menggantung harapan secara bersama-sama pada ranting pohon mati.",
      "Pemasangan dan dokumentasi di area balai warga sebagai publikasi dan kenang-kenangan."
    ],
    luaran: [
      "Pohon Harapan dari pemanfaatan pohon mati di balai berisi kumpulan kartu aspirasi warga RW 3.",
      "Meningkatnya rasa optimisme, harapan positif (hope), dan kohesi sosial antarwarga.",
      "Pemanfaatan kembali pohon mati menjadi elemen bermakna secara psikologis dan estetika."
    ]
  },
  {
    id: 3,
    name: "Mahasiswa 3",
    title: "Eco Value: Edukasi Nilai Ekonomi Pot Tanaman TOGA dari Barang Bekas",
    tag: "Ekonomi",
    desc: "Pelatihan pengolahan limbah botol dan wadah bekas menjadi media tanam produktif (tomat, cabai, terong) berlandaskan konsep nilai tambah (value added).",
    background: "Sampah anorganik rumah tangga (botol/kaleng bekas) masih kurang dimanfaatkan. Ibu-ibu PKK memiliki potensi besar untuk mengembangkan barang bekas menjadi pot tanaman produktif. Program ini menerapkan literasi ekonomi konsep nilai tambah (value added) sehingga kreativitas memberikan manfaat ekonomi dan ketahanan pangan keluarga.",
    metode: [
      "Observasi dan diskusi bersama ibu-ibu PKK mengenai pengelolaan sampah rumah tangga.",
      "Penyampaian materi edukasi tentang konsep nilai tambah (value added) dan manfaat menanam tanaman produktif.",
      "Praktik pembuatan pot dari barang bekas seperti botol plastik yang dihias menarik.",
      "Praktik penanaman tanaman produktif (tomat, cabai, terong) dan panduan perawatannya.",
      "Simulasi nilai ekonomi produk serta pembagian leaflet edukasi kepada peserta."
    ],
    luaran: [
      "Pot tanaman produktif hasil karya peserta dari barang bekas.",
      "Tanaman produktif yang dapat dirawat di rumah untuk pemenuhan pangan mandiri.",
      "Leaflet/poster edukasi mengenai konsep value added dan pemanfaatan limbah."
    ]
  },
  {
    id: 4,
    name: "Mahasiswa 4",
    title: "Penguatan Branding & Pembuatan Label Produk UMKM Anyaman Tali Plastik",
    tag: "Branding",
    desc: "Perancangan identitas merek (logo, nama usaha, label, hangtag) dan pendampingan implementasi kemasan agar produk kerajinan tali lashing memiliki daya saing tinggi.",
    background: "UMKM anyaman tali plastik memasarkan produk langsung ke pasar tradisional tanpa perantara pengepul. Namun produk belum memiliki identitas merek (nama, logo, label), sehingga sulit dikenali konsumen dan memiliki keterbatasan dalam meningkatkan nilai jual. Program ini mendampingi perancangan identitas merek dan label produk.",
    metode: [
      "Observasi produk dan wawancara pemilik usaha untuk mengidentifikasi kebutuhan branding.",
      "Analisis karakteristik dan keunggulan produk sebagai dasar penyusunan konsep branding.",
      "Perancangan alternatif nama merek, logo, dan konsep visual yang mencerminkan karakteristik usaha.",
      "Perancangan dan desain label produk yang memuat informasi merek, jenis, serta kontak.",
      "Validasi, revisi desain, pencetakan, dan pendampingan pemasangan label produk pada kerajinan."
    ],
    luaran: [
      "Identitas produk berupa logo, label, dan hangtag yang menjadi media branding UMKM.",
      "File desain asli yang dapat digunakan kembali oleh pelaku usaha.",
      "Poster edukasi mengenai pentingnya branding dan labeling bagi keberlanjutan UMKM."
    ]
  },
  {
    id: 5,
    name: "Mahasiswa 5",
    title: "Gerakan Menabung Sejak Dini: Literasi Keuangan Dasar & Celengan Kreatif Anak",
    tag: "Keuangan",
    desc: "Pembelajaran interaktif bagi anak-anak untuk mengenalkan konsep nilai uang, membedakan kebutuhan dan keinginan, serta membangun kebiasaan menabung.",
    background: "Banyak anak-anak belum memahami konsep pengelolaan uang sederhana seperti membedakan kebutuhan & keinginan serta pentingnya menabung. Kurangnya edukasi dapat membentuk kebiasaan konsumtif. Kegiatan edukatif dan interaktif ini mengajarkan nilai uang dan membangun kebiasaan menabung sejak usia sekolah.",
    metode: [
      "Observasi awal kebiasaan penggunaan uang saku anak-anak melalui diskusi ringan.",
      "Penyampaian materi edukasi mengenai fungsi uang dan manfaat menabung dengan bahasa sederhana.",
      "Permainan/kuis interaktif literasi keuangan agar materi lebih menyenangkan.",
      "Praktik pembuatan celengan kreatif dari barang bekas (botol/kaleng/kardus).",
      "Simulasi penyusunan target tabungan dan pembagian buku tabungan/lembar monitoring."
    ],
    luaran: [
      "Celengan edukatif hasil karya peserta dari bahan bekas.",
      "Buku tabungan sederhana / lembar monitoring tabungan harian anak.",
      "Leaflet atau poster mengenai pentingnya menabung dan pengelolaan uang saku."
    ]
  },
  {
    id: 6,
    name: "Mahasiswa 6",
    title: "Desain Visual Katalog Digital Kerajinan Tali Plastik sebagai Media Promosi Online",
    tag: "Desain",
    desc: "Penyusunan etalase produk digital yang rapi, seragam, dan profesional dalam format katalog siap saji untuk mempermudah promosi online melalui WhatsApp Business.",
    background: "Produk kerajinan dari limbah tali plastik belum didukung media promosi visual yang menarik dan terstandar, sehingga kurang maksimal saat dipasarkan di era digital. Katalog digital berfungsi sebagai etalase resmi produk yang rapi, profesional, serta mudah dibagikan melalui WhatsApp Business maupun media sosial.",
    metode: [
      "Observasi & pengumpulan data produk (jenis anyaman, ukuran, harga, keunggulan).",
      "Pengambilan & pengolahan foto produk dengan pencahayaan dan latar seragam.",
      "Perancangan konsep visual (warna, tipografi, tata letak) bernuansa ramah lingkungan.",
      "Pembuatan desain katalog digital (halaman cover & isi produk) menggunakan aplikasi desain modern.",
      "Integrasi lintas program untuk diunggah ke WhatsApp Business UMKM mitra."
    ],
    luaran: [
      "File katalog digital produk kerajinan tali plastik (format PDF/gambar) yang menarik dan profesional.",
      "Katalog siap dibagikan dan terintegrasi ke akun WhatsApp Business sebagai etalase online."
    ]
  },
  {
    id: 7,
    name: "Mahasiswa 7",
    title: "Katalog Produk Digital & Pendampingan WhatsApp Business UMKM Anyaman",
    tag: "Pemasaran",
    desc: "Pemanfaatan fitur katalog pada WhatsApp Business serta pendampingan pengelolaan akun untuk membuka kanal penjualan baru di luar jalur distributor.",
    background: "UMKM Anyaman Tali Plastik di RW 10 selama ini bergantung penuh pada satu jalur distributor sehingga jangkauan pasar terbatas dan daya tawar rendah. Pemasaran digital tidak menghapus jalur distributor, melainkan membuka peluang alternatif kanal penjualan baru untuk memperluas jangkauan pembeli melalui WhatsApp Business.",
    metode: [
      "Observasi dan pendataan jenis, ukuran, serta sistem pemasaran yang ada.",
      "Dokumentasi foto produk yang layak jual menggunakan HP beserta penyusunan deskripsi singkat.",
      "Penyusunan katalog digital langsung pada fitur katalog WhatsApp Business UMKM.",
      "Sosialisasi dan pendampingan pembuatan, penataan profil, dan pesan otomatis WA Business.",
      "Pelatihan pemanfaatan mandiri bagi pelaku usaha serta evaluasi pemahaman."
    ],
    luaran: [
      "Katalog produk digital berbasis foto pada akun WhatsApp Business UMKM yang tertata.",
      "Meningkatnya pemahaman pelaku usaha dalam memasarkan produk secara digital.",
      "Terbukanya alternatif kanal penjualan mandiri di luar jalur distributor."
    ]
  },
  {
    id: 8,
    name: "Mahasiswa 8",
    title: "Sosialisasi & Edukasi Konsep 5S/5R Penataan Area Kerja Bank Sampah",
    tag: "Manajemen 5S",
    desc: "Penerapan prinsip Ringkas, Rapi, Resik, Rawat, dan Rajin (5S/5R) untuk menata alur sortir dan zona penyimpanan barang lapak agar lebih tertib dan efisien.",
    background: "Area kerja Bank Sampah sering belum tertata, di mana barang lapak menumpuk bercampur dan zona penyortiran/penyimpanan belum jelas. Kondisi ini memperlambat penimbangan serta menimbulkan risiko kebersihan. Konsep 5S/5R diterapkan untuk menata alur kerja agar lebih efisien dan berkelanjutan.",
    metode: [
      "Observasi alur kerja dan kondisi penataan area bank sampah.",
      "Sosialisasi konsep 5S/5R dan manfaatnya kepada pengurus dengan bahasa sederhana.",
      "Penerapan percontohan memilah dan menata barang lapak ke zona berlabel bersama pengurus.",
      "Penyediaan media standar seperti label zona, papan penanda, atau kartu checklist 5S.",
      "Ajakan pembiasaan menaruh sampah pada zona yang benar dan evaluasi dokumentasi."
    ],
    luaran: [
      "Area penyortiran dan penyimpanan Bank Sampah yang lebih tertata beserta label zona.",
      "Media edukasi poster dan kartu checklist 5S untuk operasional harian.",
      "Area percontohan bank sampah yang lebih rapi dan efisien."
    ]
  },
  {
    id: 9,
    name: "Mahasiswa 9",
    title: "Ergonomi Kerja & Pendampingan Peregangan (Stretching) Pengrajin Anyaman",
    tag: "Kesehatan",
    desc: "Penyuluhan posisi duduk ergonomis dan demonstrasi latihan peregangan berkala untuk mencegah keluhan gangguan otot (Musculoskeletal Disorders) saat menganyam.",
    background: "Pengrajin anyaman bekerja statis selama 6-8 jam per hari dengan gerakan tangan berulang (repetitive movement) dan membungkuk dalam waktu lama. Ini menjadi risiko utama Musculoskeletal Disorders (MSDs) seperti pegal, nyeri punggung, dan kesemutan. Program ini memberikan edukasi ergonomi dan demonstrasi peregangan rutin.",
    metode: [
      "Observasi postur kerja, durasi, gerakan berulang, serta wawancara keluhan fisik pengrajin.",
      "Pengukuran awal keluhan muskuloskeletal menggunakan instrumen Nordic Body Map (NBM).",
      "Penyusunan media edukasi poster dan leaflet panduan ergonomi & peregangan.",
      "Penyuluhan mengenai posisi duduk yang benar, pengaturan alat kerja, dan istirahat aktif.",
      "Demonstrasi dan pendampingan latihan stretching 5-10 menit secara berkala selama bekerja."
    ],
    luaran: [
      "Poster edukasi prinsip ergonomi kerja saat proses menganyam tali lashing.",
      "Leaflet modul 'Panduan Ergonomi dan Stretching bagi Pengrajin Anyaman Tali Lashing'.",
      "Meningkatnya pengetahuan dan keterampilan pengrajin dalam menerapkan posisi ergonomis dan peregangan mandiri."
    ]
  },
  {
    id: 10,
    name: "Mahasiswa 10",
    title: "SIMA-Sampah: Sistem Informasi Akuntansi Persediaan Bank Sampah",
    tag: "Akuntansi",
    desc: "Perancangan SOP alur inventaris dan desain prototipe antarmuka digital (Figma) kartu stok dan dashboard laporan akuntansi persediaan Bank Sampah.",
    background: "Pencatatan arus masuk dan keluar sampah yang masih manual/tidak terdokumentasi menyebabkan pengurus Bank Sampah kesulitan memantau saldo persediaan secara real-time, melemahkan posisi tawar, serta meningkatkan risiko penurunan nilai persediaan (inventory write-down). SIMA-Sampah menyusun sistem akuntansi dan prototype digital.",
    metode: [
      "Observasi dan analisis kebutuhan bersama pengurus mengenai alur mutasi barang.",
      "Perancangan flowchart SOP terstandar yang mengintegrasikan aktivitas gudang dan pencatatan.",
      "Desain prototype UI/UX aplikasi SIMA-Sampah berbasis Figma (modul stok, kartu digital, dashboard).",
      "Edukasi akuntansi persediaan tentang saldo awal, mutasi, dan penilaian persediaan.",
      "Simulasi, uji coba skenario transaksi, dan penyerahan dokumen/panduan sistem."
    ],
    luaran: [
      "Link dan dokumen Prototype Design Aplikasi SIMA-Sampah berbasis Figma yang interaktif.",
      "Lembar cetak Flowchart SOP Pengisian Inventory Card (Kartu Stok) baku untuk Bank Sampah."
    ]
  },
  {
    id: 11,
    name: "Mahasiswa 11",
    title: "Optimalisasi Manajemen Persediaan Bank Sampah Berbasis FIFO",
    tag: "Manajemen",
    desc: "Penyuluhan dan bimbingan teknis pencatatan volume dan umur persediaan agar tumpukan material tidak mengalami penyusutan nilai ekonomis akibat penyimpanan lama.",
    background: "Sampah yang disetor di Bank Sampah umumnya ditumpuk tanpa pencatatan volume per jenis sehingga volume siap jual tidak diketahui pasti. Penumpukan terlalu lama berisiko menyusutkan nilai ekonomis material. Edukasi pengelolaan persediaan berbasis FIFO memastikan sampah yang lebih dulu disimpan diprioritaskan dijual terlebih dahulu.",
    metode: [
      "Survei dan identifikasi kondisi gudang, jenis sampah, serta sistem penyimpanan saat ini.",
      "Penyusunan materi sosialisasi dan leaflet edukasi manajemen persediaan FIFO.",
      "Penyuluhan dan bimbingan teknis mengenai pencatatan arus masuk-keluar persediaan.",
      "Simulasi penerapan kartu stok dan urutan pengeluaran barang bersama pengurus.",
      "Evaluasi pemahaman pengurus dan efektivitas penerapan sistem penyimpanan."
    ],
    luaran: [
      "Peningkatan kapasitas dan pemahaman pengurus Bank Sampah dalam menerapkan metode FIFO.",
      "Sistem penyimpanan dan pencatatan persediaan yang lebih teratur meminimalkan penyusutan barang."
    ]
  },
  {
    id: 12,
    name: "Mahasiswa 12",
    title: "Pendampingan Literasi Digital, Keamanan Data Pribadi & Pencegahan Hoaks",
    tag: "Literasi Digital",
    desc: "Edukasi kewaspadaan terhadap berita palsu (hoaks), penipuan online (phishing), serta penerapan verifikasi dua langkah dan privasi data di gawai warga.",
    background: "Seiring meningkatnya penggunaan gawai dan media sosial di lingkungan warga, risiko paparan informasi palsu (hoaks) dan kejahatan siber (penipuan online/phishing) semakin tinggi. Program ini meningkatkan literasi digital warga agar mampu memilah informasi dan menjaga keamanan data pribadi.",
    metode: [
      "Sosialisasi interaktif tentang pengenalan berita palsu dan ciri-ciri penipuan digital.",
      "Pelatihan pengamanan akun (verifikasi dua langkah, kata sandi kuat, privasi data).",
      "Edukasi etika berinternet sehat dan pemanfaatan media sosial untuk promosi positif desa.",
      "Pembagian infografis/leaflet panduan keamanan digital sehari-hari."
    ],
    luaran: [
      "Warga yang lebih waspada, kritis, dan cerdas dalam menyaring informasi digital.",
      "Infografis panduan praktis pencegahan hoaks dan pengamanan data pribadi di gawai warga."
    ]
  },
  {
    id: 13,
    name: "Mahasiswa 13",
    title: "Workshop Regenerasi Pengrajin Muda Anyaman Tali Lashing",
    tag: "Kewirausahaan",
    desc: "Pelatihan teknik dasar menganyam tali lashing bagi pemuda dan anggota Karang Taruna RW 10 sebagai langkah awal menjaga keberlanjutan sentra kerajinan.",
    background: "Mayoritas pengrajin anyaman di sentra RW 10 didominasi oleh generasi tua, sementara pemuda/remaja belum banyak yang menguasai teknik kriya ini. Untuk kelangsungan ekonomi kreatif desa, diperlukan workshop regenerasi bagi anggota Karang Taruna sebagai keterampilan wirausaha produktif.",
    metode: [
      "Koordinasi bersama pengurus Karang Taruna dan pengrajin senior.",
      "Pelaksanaan workshop pengenalan bahan baku tali lashing industri dan teknik dasar anyaman.",
      "Praktik langsung pembuatan produk sederhana (storage mini atau alas meja) oleh pemuda.",
      "Diskusi peluang bisnis kreatif dan keberlanjutan regenerasi pengrajin muda."
    ],
    luaran: [
      "Tumbuhnya minat dan keterampilan teknis menganyam pada pemuda Karang Taruna RW 10.",
      "Produk karya latihan pemuda sebagai langkah awal regenerasi sentra kerajinan Tandang."
    ]
  },
  {
    id: 14,
    name: "Mahasiswa 14",
    title: "Pendampingan Akuntansi & Administrasi Logistik Kegiatan Kemasyarakatan",
    tag: "Administrasi",
    desc: "Penyusunan format buku inventaris standar serta bimbingan teknis pencatatan aset lingkungan tingkat RT/RW agar akuntabel dan tertib administrasi.",
    background: "Pengelolaan administrasi barang inventaris dan pencatatan logistik pada kegiatan sosial kemasyarakatan di tingkat RT/RW seringkali kurang terarsip dengan rapi. Program ini memberikan pendampingan penataan administrasi logistik yang transparan dan tertib.",
    metode: [
      "Observasi sistem pencatatan inventaris dan pengorganisasian logistik di balai warga/RT.",
      "Penyusunan format buku inventaris barang dan alur peminjaman perlengkapan lingkungan.",
      "Pelatihan pengisian buku administrasi logistik bagi pengurus RT dan PKK.",
      "Pendampingan perapihan arsip dan pengecekan fisik barang inventaris lingkungan."
    ],
    luaran: [
      "Buku panduan dan format standar administrasi inventaris logistik tingkat RT/RW.",
      "Sistem pencatatan aset lingkungan yang rapi, mudah dipantau, dan akuntabel."
    ]
  },
  {
    id: 15,
    name: "Mahasiswa 15",
    title: "Edukasi & Penerapan Otomasi Sederhana Sensor Energi",
    tag: "Teknologi",
    desc: "Perakitan dan pemasangan sistem lampu/penerangan otomatis berbasis sensor cahaya & gerak guna efisiensi pemakaian energi listrik di balai pertemuan warga.",
    background: "Penggunaan listrik di fasilitas umum seperti balai pertemuan warga seringkali kurang efisien karena lampu atau perangkat listrik lupa dimatikan. Aplikasi otomasi sederhana menggunakan sensor hemat energi dapat membantu pengelolaan fasilitas balai agar lebih modern dan hemat biaya.",
    metode: [
      "Survei kebutuhan instalasi listrik dan titik penerangan di area balai pertemuan warga.",
      "Perancangan dan perakitan alat otomasi sederhana (sensor cahaya/gerak untuk lampu otomatis).",
      "Pemasangan dan uji coba percontohan sistem otomasi di titik strategis balai RW.",
      "Sosialisasi dan pelatihan perawatan mandiri perangkat otomasi kepada pengurus balai."
    ],
    luaran: [
      "Instalasi teknologi otomasi sensor penerangan yang berfungsi baik di balai warga.",
      "Efisiensi penggunaan energi listrik dan peningkatan fasilitas umum lingkungan."
    ]
  }
];

const tandangMD = [
  {
    id: 1,
    type: "saintek",
    title: "Pengembangan Produk Inovatif Berbahan Limbah Plastik Berbasis Teknologi Tepat Guna",
    summary: "Mencakup tiga kegiatan terintegrasi: (1) Rekayasa paving block komposit dari limbah plastik kresek dan bubble wrap, (2) Pengolahan minyak jelantah menjadi produk pewangi ruangan dan lilin aromaterapi, serta (3) Pembuatan lubang resapan biopori untuk peningkatan resapan air sekaligus pengomposan sampah organik. Setiap kegiatan disertai edukasi, praktik langsung, dan pendampingan produksi.",
    potensi: "Tingginya volume sampah plastik kresek dan bubble wrap di lingkungan warga yang belum termanfaatkan secara optimal. Adanya potensi kerja sama dengan UMKM dan kelompok warga setempat untuk memproduksi paving block bernilai ekonomis serta dukungan penuh perangkat kelurahan RT/RW.",
    permasalahan: "Sampah plastik kresek dan bubble wrap sulit terurai serta sering dibakar atau dibuang sembarangan. Belum adanya teknologi tepat guna di tingkat masyarakat untuk mengolah limbah plastik menjadi produk bernilai guna, minimnya pengetahuan teknik percetakan paving block, dan belum tersedianya alat molding sederhana.",
    lokasi: "RW 3 RT 2 Kelurahan Tandang, Kecamatan Tembalang, Kota Semarang.",
    usulan: "Mencakup tiga kegiatan terintegrasi: (1) Rekayasa paving block komposit, (2) Pengolahan minyak jelantah, dan (3) Pembuatan biopori.",
    metode: [
      "Sosialisasi interaktif dampak sampah plastik & minyak jelantah kepada warga.",
      "Pelatihan praktik langsung pemilahan, pelelehan, dan percetakan papan komposit/paving block.",
      "Praktik pemurnian dan pencampuran minyak jelantah menjadi lilin aromaterapi/pewangi ruangan.",
      "Demonstrasi pembuatan, pemasangan, dan pemeliharaan lubang resapan biopori di lingkungan warga.",
      "Pendampingan dan evaluasi keberlanjutan produksi bersama kader lingkungan."
    ],
    luaran: [
      "Prototipe papan komposit/paving block berbahan limbah plastik hasil rekayasa mandiri.",
      "Modul/buku panduan teknis pembuatan papan komposit dari limbah plastik secara sistematis.",
      "Produk pewangi ruangan & lilin aromaterapi berbahan minyak jelantah yang dimurnikan dan dikemas.",
      "Modul/panduan praktis pengolahan minyak jelantah menjadi produk pewangi.",
      "Lubang resapan biopori yang terpasang dan berfungsi sebagai sarana resapan air & penghasil kompos.",
      "Modul/leaflet panduan pembuatan dan perawatan lubang resapan biopori."
    ],
    sasaran: "Warga RT/RW setempat, pengelola Bank Sampah, dan UMKM/kelompok warga calon produsen paving block.",
    icon: <Beaker className="h-12 w-12 text-brand-green-dark" />
  },
  {
    id: 2,
    type: "soshum",
    title: "Pemberdayaan Masyarakat dalam Pengelolaan Limbah Plastik melalui Edukasi dan Pelatihan",
    summary: "Berfokus di RW 10 Tandang melalui dua output strategis: SOSCAMP (Social Campaign 3R & Penghiasan Balai RT/Desa) serta Pelatihan Branding, Packaging, & Digital Marketing untuk produk daur ulang limbah plastik.",
    potensi: "Masyarakat memiliki semangat gotong royong dan organisasi aktif seperti PKK, Karang Taruna, dan perangkat RT/RW. Produk hasil pengolahan limbah plastik dari tim Saintek maupun pengrajin memiliki nilai guna tinggi dan berpotensi menjadi produk bernilai ekonomi yang luas.",
    permasalahan: "Kesadaran masyarakat mengenai pentingnya pengelolaan limbah plastik masih rendah dan belum menerapkan pemilahan sampah. Selain itu, masyarakat belum memiliki pengetahuan mengenai branding, pengemasan profesional, maupun strategi pemasaran digital melalui media sosial.",
    lokasi: "RW 10 Kelurahan Tandang, Kecamatan Tembalang, Kota Semarang.",
    usulan: "Terbagi menjadi dua output utama: Output 2.2 berupa SOSCAMP; dan Output 2.3 berupa Pelatihan Branding dan Digital Marketing Produk Daur Ulang.",
    metode: [
      "Penyuluhan interaktif, diskusi, dan kampanye sosial SOSCAMP 3R (Reduce, Reuse, Recycle).",
      "Pemasangan media edukasi dan penghiasan kreatif Balai RT/Balai Desa bertema lingkungan.",
      "Workshop perancangan identitas merek (branding), logo, dan desain kemasan (packaging).",
      "Pelatihan fotografi produk sederhana dan penyusunan katalog produk digital.",
      "Pendampingan dan simulasi pemasaran digital melalui WhatsApp Business dan media sosial."
    ],
    luaran: [
      "Terlaksananya kegiatan kampanye sosial SOSCAMP mengenai pengelolaan limbah plastik.",
      "Tersedianya media edukasi poster, leaflet, banner, dan hiasan edukatif Balai RT/Desa.",
      "Terbentuknya identitas produk (nama merek, logo, konsep branding, dan desain kemasan menarik).",
      "Tersusunnya katalog produk dan konten promosi digital untuk perluasan pasar.",
      "Panduan sederhana mengenai branding dan pemasaran produk sebagai referensi keberlanjutan usaha."
    ],
    sasaran: "PKK, Karang Taruna, perangkat desa, pelaku UMKM, masyarakat umum, dan anak-anak sekolah.",
    icon: <GraduationCap className="h-12 w-12 text-brand-charcoal" />
  }
];

const unifiedMD3 = {
  id: 3,
  type: "md3",
  title: "Video After Movie di Kelurahan Tandang dan Jangli Kecamatan Tembalang, Kota Semarang",
  summary: "Konsep dan detail pelaksanaan program sedang dalam tahap penyusunan oleh tim KKN.",
  potensi: "-",
  permasalahan: "-",
  lokasi: "Kelurahan Tandang dan Kelurahan Jangli",
  usulan: "-",
  metode: [],
  luaran: [],
  sasaran: "-"
};



export default function ProgramsSection() {
  const [activeKelurahan, setActiveKelurahan] = useState<"tandang" | "jangli">("tandang");
  const [isFlipping, setIsFlipping] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<any>(null);

  const handleKelurahanChange = (kelurahan: "tandang" | "jangli") => {
    if (kelurahan === activeKelurahan) return;
    setIsFlipping(true);
    setTimeout(() => setActiveKelurahan(kelurahan), 300);
    setTimeout(() => setIsFlipping(false), 600);
  };

  // Data selection based on active tab
  const currentMDData = activeKelurahan === "jangli" ? jangliMD : tandangMD;
  const currentSosmas = activeKelurahan === "jangli" ? jangliSosmas : tandangSosmas;

  const cardGradients = [
    "from-[#fdf1f6] to-[#f4d5e3]",
    "from-[#eef3f9] to-[#d3e3f3]",
    "from-[#eef9f1] to-[#d3f3db]",
  ];

  return (
    <section className="pb-20 md:pb-28 bg-white">
      <hr className="border-brand-charcoal/10 max-w-4xl mx-auto my-16 md:my-24" />
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark mb-4">
              <Map className="h-3 w-3" />
              Program Kerja
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
              Fokus Pengabdian Kami
            </h2>
          </div>

          {/* Kelurahan Toggle */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              { id: "tandang", name: "Kelurahan Tandang" },
              { id: "jangli", name: "Kelurahan Jangli" }
            ].map((tab) => {
              const isActive = activeKelurahan === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleKelurahanChange(tab.id as "tandang" | "jangli")}
                  className={`px-6 py-3 rounded-full font-sans text-sm font-semibold transition-all duration-300 ${isActive
                      ? "bg-brand-charcoal text-white shadow-md scale-105"
                      : "bg-[#F5F4F0] text-brand-charcoal hover:bg-[#EAE9E5] hover:shadow-sm"
                    }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── MULTIDISIPLIN (MD2) ── */}
        <div className={`transition-all duration-500 ease-in-out ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="mb-24">
            <div className="flex flex-col items-center mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-2">
                MULTIDISIPLIN 2
              </h3>
              <h4 className="text-3xl font-serif text-brand-charcoal">Saintek & Soshum</h4>
            </div>

            {/* Flat elegant cards for MD2 */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mx-auto ${currentMDData.length === 3 ? "lg:grid-cols-3 max-w-7xl" : "max-w-5xl"}`}>
              {currentMDData.map((prog, idx) => (
                <div key={prog.id} className="group relative bg-[#F5F4F0] rounded-[32px] p-8 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-[380px]">
                  <div className={`absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br ${cardGradients[idx % cardGradients.length]} rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                        {prog.icon}
                      </div>
                      <span className="px-4 py-1.5 rounded-full bg-white text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 shadow-sm">
                        {prog.type === 'saintek' ? 'Saintek' : 'Soshum'}
                      </span>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-brand-charcoal leading-snug mb-4 line-clamp-3">
                      {prog.title}
                    </h4>
                    
                    <p className="text-sm text-brand-charcoal/60 line-clamp-3 mb-6">
                      {prog.summary}
                    </p>

                    <div className="mt-auto">
                      <button
                        onClick={() => setSelectedDetail(prog)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-dark hover:text-brand-charcoal transition-colors group/btn"
                      >
                        Detail Program
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-brand-charcoal/10 max-w-4xl mx-auto my-4" />

          {/* ── MULTIDISIPLIN 3 (MD3) ── */}
          <div className="mb-24">
            <div className="flex flex-col items-center mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-2">
                MULTIDISIPLIN 3
              </h3>
              <h4 className="text-3xl font-serif text-brand-charcoal">Video After Movie</h4>
            </div>

            <div className="max-w-3xl mx-auto">
              {(() => {
                const prog = unifiedMD3;
                return (
                  <div className="group relative bg-[#F5F4F0] rounded-[32px] p-8 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-[380px]">
                    <div className="absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br from-[#eef3f9] to-[#d3e3f3] rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                          <Video className="h-8 w-8 text-brand-charcoal" />
                        </div>
                        <span className="px-4 py-1.5 rounded-full bg-white text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 shadow-sm">
                          Sinematografi
                        </span>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-brand-charcoal leading-snug mb-4 line-clamp-3">
                        {prog.title}
                      </h4>
                      
                      <p className="text-sm text-brand-charcoal/60 line-clamp-3 mb-6">
                        {prog.summary}
                      </p>

                      <div className="mt-auto">
                        <button
                          onClick={() => setSelectedDetail(prog)}
                          className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-dark hover:text-brand-charcoal transition-colors group/btn"
                        >
                          Detail Program
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          <hr className="border-brand-charcoal/10 max-w-4xl mx-auto my-4" />

          {/* ── SOSIAL MASYARAKAT (SOSMAS) ── */}
          <div className="mb-10">
            <div className="flex flex-col items-center mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-2">
                SOSIAL MASYARAKAT
              </h3>
              <h4 className="text-3xl font-serif text-brand-charcoal">15 Program Sosmas</h4>
            </div>

            {/* Google Design Light Grid (Reverted to old design) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
              {currentSosmas.map((item) => (
                <div 
                  key={item.id}
                  className="group flex flex-col cursor-pointer"
                >
                  {/* Top — Image Area */}
                  <div className="w-full aspect-[4/3] rounded-2xl bg-brand-charcoal/5 flex items-center justify-center overflow-hidden mb-5">
                    <Users className="h-12 w-12 text-brand-charcoal/20 group-hover:scale-110 group-hover:text-brand-green-dark transition-all duration-500" />
                  </div>

                  {/* Content Area */}
                  <h3 className="text-xl font-bold text-brand-charcoal leading-tight mb-3 group-hover:text-brand-green-dark transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MODAL DETAIL PROGRAM ── */}
      {selectedDetail && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedDetail(null)}
          />

          <div className="relative bg-[#FDFCF8] rounded-[32px] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 sm:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedDetail(null)}
              className="absolute top-6 right-6 p-3 bg-brand-charcoal/5 rounded-full hover:bg-brand-charcoal/10 transition-colors"
            >
              <X className="h-5 w-5 text-brand-charcoal" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark mb-4 block">
              {selectedDetail.type === "saintek" ? "Program Saintek" : "Program Soshum"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-brand-charcoal mb-10 pr-12 leading-tight">
              {selectedDetail.title}
            </h2>

            <div className="space-y-10">
              {!selectedDetail.usulan && (
                <div className="p-8 bg-brand-cream rounded-2xl border border-brand-charcoal/10 text-center">
                  <p className="text-brand-charcoal/60">Detail proposal belum tersedia untuk program ini.</p>
                </div>
              )}

              {selectedDetail.lokasi && (
                <div className="flex items-start gap-4 p-5 bg-brand-cream rounded-2xl">
                  <MapPin className="h-6 w-6 text-brand-green-dark shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-charcoal">Lokasi Kegiatan</h3>
                    <p className="text-sm text-brand-charcoal/70 mt-1">{selectedDetail.lokasi}</p>
                  </div>
                </div>
              )}

              {selectedDetail.usulan && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Usulan Program</h3>
                  <p className="text-brand-charcoal/70 leading-relaxed">{selectedDetail.usulan}</p>
                </div>
              )}

              {selectedDetail.potensi && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Potensi</h3>
                  <p className="text-brand-charcoal/70 leading-relaxed">{selectedDetail.potensi}</p>
                </div>
              )}

              {selectedDetail.permasalahan && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Permasalahan</h3>
                  <p className="text-brand-charcoal/70 leading-relaxed">{selectedDetail.permasalahan}</p>
                </div>
              )}

              {selectedDetail.metode && selectedDetail.metode.length > 0 && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-4">Metode Pelaksanaan</h3>
                  <ul className="space-y-3">
                    {selectedDetail.metode.map((step: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-green-dark/10 text-brand-green-dark text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-brand-charcoal/70 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedDetail.tujuan && selectedDetail.tujuan.length > 0 && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-4">Tujuan Program</h3>
                  <ul className="space-y-3">
                    {selectedDetail.tujuan.map((tuj: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green-dark mt-2.5 shrink-0" />
                        <span className="text-brand-charcoal/70 leading-relaxed">{tuj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
