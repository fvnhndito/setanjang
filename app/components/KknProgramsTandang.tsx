"use client";

import React, { useState } from "react";
import {
  Beaker,
  Video,
  Users,
  Layers,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  GraduationCap,
  MapPin,
  X,
  Sparkles
} from "lucide-react";

export interface SosmasItem {
  id: number;
  title: string;
  tag: string;
  desc: string;
  background?: string;
  methods?: string[];
  outputs?: string[];
}

export const sosmasTandangData: SosmasItem[] = [
  {
    id: 1,
    title: "Sosialisasi & Edukasi Manajemen Logistik Pengelolaan Lapak Bank Sampah",
    tag: "Logistik & Bank Sampah",
    desc: "Penyusunan alur penerimaan, pemilahan, penimbangan, dan pencatatan barang rongsokan agar tata kelola logistik Bank Sampah RW 3 lebih transparan & akuntabel.",
    background: "Pengelolaan logistik pada lapak bank sampah yang masih dilakukan secara konvensial/manual seringkali menimbulkan ketidakteraturan, seperti tidak jelasnya alur penerimaan barang dari nasabah, proses pemilahan jenis sampah yang kurang terstruktur, hingga pencatatan hasil timbangan dan penjualan yang belum akuntabel. Kegiatan edukasi manajemen logistik ini bertujuan membantu pengurus lapak menyusun alur kerja yang rapi dan terstandar, mulai dari penerimaan barang, klasifikasi jenis rongsokan, penyimpanan di gudang sementara, hingga pencatatan transaksi yang transparan.",
    methods: [
      "Melakukan observasi lapangan langsung pada lapak bank sampah warga untuk memetakan alur kerja saat ini.",
      "Melakukan Forum Group Discussion (FGD) bersama pengelola lapak untuk mengidentifikasi kendala logistik harian.",
      "Menyusun Standar Operasional Prosedur (SOP) sederhana terkait alur penerimaan, penyortiran, dan penyimpanan.",
      "Melakukan simulasi dan pelatihan praktik pengisian buku catatan logistik/kartu stok barang.",
      "Pendampingan secara berkala dan evaluasi penerapan manajemen logistik baru oleh pengurus."
    ],
    outputs: [
      "Papan Bagan Alur (Flowchart) SOP Manajemen Logistik Lapak Bank Sampah yang terpasang di lokasi.",
      "Buku Panduan / Modul Sederhana Manajemen Logistik untuk pengelola lapak bank sampah.",
      "Meningkatnya efisiensi alur kerja dan akuntabilitas pencatatan barang pada lapak bank sampah."
    ]
  },
  {
    id: 2,
    title: "Eco-Art Therapy: Pembuatan Pohon Harapan dari Limbah Ranting & Daun Kering",
    tag: "Psikologi & Lingkungan",
    desc: "Seni kriya ekspresif memadukan daur ulang vegetasi kering dan penulisan resolusi psikologis warga untuk membangun ikatan emosional dan asa positif di lingkungan RT/RW.",
    background: "Lingkungan perkotaan yang padat seringkali mengurangi interaksi sosial emosional antarwarga, sementara limbah vegetasi kering (ranting pohon mati dan daun kering) di sekitar balai warga belum dimanfaatkan. Eco-Art Therapy hadir sebagai pendekatan psikologi melalui seni kriya dengan memanfaatkan limbah alam tersebut menjadi 'Pohon Harapan', tempat warga menuliskan aspirasi dan doa bersama demi mempererat kohesi sosial.",
    methods: [
      "Pengumpulan bahan baku limbah ranting pohon mati dan daun kering dari lingkungan sekitar RW 3.",
      "Pemurnian dan pengawetan sederhana ranting agar tahan lama sebagai instalasi seni balai.",
      "Pelaksanaan sesi art therapy bersama warga (anak-anak, pemuda, dan ibu-ibu) dengan menuliskan resolusi/harapan di kartu daun kering.",
      "Kegiatan menggantung harapan secara bersama-sama pada ranting pohon mati.",
      "Pemasangan dan dokumentasi di area balai warga sebagai publikasi dan kenang-kenangan."
    ],
    outputs: [
      "Pohon Harapan dari pemanfaatan pohon mati di balai berisi kumpulan kartu aspirasi warga RW 3.",
      "Meningkatnya rasa optimisme, harapan positif (hope), dan kohesi sosial antarwarga.",
      "Pemanfaatan kembali pohon mati menjadi elemen bermakna secara psikologis dan estetika."
    ]
  },
  {
    id: 3,
    title: "Eco Value: Edukasi Nilai Ekonomi Pot Tanaman TOGA dari Barang Bekas",
    tag: "Ekonomi & Lingkungan",
    desc: "Pelatihan pengolahan limbah botol dan wadah bekas menjadi media tanam produktif (tomat, cabai, terong) berlandaskan konsep nilai tambah (value added).",
    background: "Sampah anorganik rumah tangga (botol/kaleng bekas) masih kurang dimanfaatkan. Ibu-ibu PKK memiliki potensi besar untuk mengembangkan barang bekas menjadi pot tanaman produktif. Program ini menerapkan literasi ekonomi konsep nilai tambah (value added) sehingga kreativitas memberikan manfaat ekonomi dan ketahanan pangan keluarga.",
    methods: [
      "Observasi dan diskusi bersama ibu-ibu PKK mengenai pengelolaan sampah rumah tangga.",
      "Penyampaian materi edukasi tentang konsep nilai tambah (value added) dan manfaat menanam tanaman produktif.",
      "Praktik pembuatan pot dari barang bekas seperti botol plastik yang dihias menarik.",
      "Praktik penanaman tanaman produktif (tomat, cabai, terong) dan panduan perawatannya.",
      "Simulasi nilai ekonomi produk serta pembagian leaflet edukasi kepada peserta."
    ],
    outputs: [
      "Pot tanaman produktif hasil karya peserta dari barang bekas.",
      "Tanaman produktif yang dapat dirawat di rumah untuk pemenuhan pangan mandiri.",
      "Leaflet/poster edukasi mengenai konsep value added dan pemanfaatan limbah."
    ]
  },
  {
    id: 4,
    title: "Penguatan Branding & Pembuatan Label Produk UMKM Anyaman Tali Plastik",
    tag: "Branding UMKM",
    desc: "Perancangan identitas merek (logo, nama usaha, label, hangtag) dan pendampingan implementasi kemasan agar produk kerajinan tali lashing memiliki daya saing tinggi.",
    background: "UMKM anyaman tali plastik memasarkan produk langsung ke pasar tradisional tanpa perantara pengepul. Namun produk belum memiliki identitas merek (nama, logo, label), sehingga sulit dikenali konsumen dan memiliki keterbatasan dalam meningkatkan nilai jual. Program ini mendampingi perancangan identitas merek dan label produk.",
    methods: [
      "Observasi produk dan wawancara pemilik usaha untuk mengidentifikasi kebutuhan branding.",
      "Analisis karakteristik dan keunggulan produk sebagai dasar penyusunan konsep branding.",
      "Perancangan alternatif nama merek, logo, dan konsep visual yang mencerminkan karakteristik usaha.",
      "Perancangan dan desain label produk yang memuat informasi merek, jenis, serta kontak.",
      "Validasi, revisi desain, pencetakan, dan pendampingan pemasangan label produk pada kerajinan."
    ],
    outputs: [
      "Identitas produk berupa logo, label, dan hangtag yang menjadi media branding UMKM.",
      "File desain asli yang dapat digunakan kembali oleh pelaku usaha.",
      "Poster edukasi mengenai pentingnya branding dan labeling bagi keberlanjutan UMKM."
    ]
  },
  {
    id: 5,
    title: "Gerakan Menabung Sejak Dini: Literasi Keuangan Dasar & Celengan Kreatif Anak",
    tag: "Literasi Keuangan",
    desc: "Pembelajaran interaktif bagi anak-anak untuk mengenalkan konsep nilai uang, membedakan kebutuhan dan keinginan, serta membangun kebiasaan menabung.",
    background: "Banyak anak-anak belum memahami konsep pengelolaan uang sederhana seperti membedakan kebutuhan & keinginan serta pentingnya menabung. Kurangnya edukasi dapat membentuk kebiasaan konsumtif. Kegiatan edukatif dan interaktif ini mengajarkan nilai uang dan membangun kebiasaan menabung sejak usia sekolah.",
    methods: [
      "Observasi awal kebiasaan penggunaan uang saku anak-anak melalui diskusi ringan.",
      "Penyampaian materi edukasi mengenai fungsi uang dan manfaat menabung dengan bahasa sederhana.",
      "Permainan/kuis interaktif literasi keuangan agar materi lebih menyenangkan.",
      "Praktik pembuatan celengan kreatif dari barang bekas (botol/kaleng/kardus).",
      "Simulasi penyusunan target tabungan dan pembagian buku tabungan/lembar monitoring."
    ],
    outputs: [
      "Celengan edukatif hasil karya peserta dari bahan bekas.",
      "Buku tabungan sederhana / lembar monitoring tabungan harian anak.",
      "Leaflet atau poster mengenai pentingnya menabung dan pengelolaan uang saku."
    ]
  },
  {
    id: 6,
    title: "Desain Visual Katalog Digital Kerajinan Tali Plastik sebagai Media Promosi Online",
    tag: "Desain & Bisnis Digital",
    desc: "Penyusunan etalase produk digital yang rapi, seragam, dan profesional dalam format katalog siap saji untuk mempermudah promosi online melalui WhatsApp Business.",
    background: "Produk kerajinan dari limbah tali plastik belum didukung media promosi visual yang menarik dan terstandar, sehingga kurang maksimal saat dipasarkan di era digital. Katalog digital berfungsi sebagai etalase resmi produk yang rapi, profesional, serta mudah dibagikan melalui WhatsApp Business maupun media sosial.",
    methods: [
      "Observasi & pengumpulan data produk (jenis anyaman, ukuran, harga, keunggulan).",
      "Pengambilan & pengolahan foto produk dengan pencahayaan dan latar seragam.",
      "Perancangan konsep visual (warna, tipografi, tata letak) bernuansa ramah lingkungan.",
      "Pembuatan desain katalog digital (halaman cover & isi produk) menggunakan aplikasi desain modern.",
      "Integrasi lintas program untuk diunggah ke WhatsApp Business UMKM mitra."
    ],
    outputs: [
      "File katalog digital produk kerajinan tali plastik (format PDF/gambar) yang menarik dan profesional.",
      "Katalog siap dibagikan dan terintegrasi ke akun WhatsApp Business sebagai etalase online."
    ]
  },
  {
    id: 7,
    title: "Katalog Produk Digital & Pendampingan WhatsApp Business UMKM Anyaman",
    tag: "Pemasaran Digital",
    desc: "Pemanfaatan fitur katalog pada WhatsApp Business serta pendampingan pengelolaan akun untuk membuka kanal penjualan baru di luar jalur distributor.",
    background: "UMKM Anyaman Tali Plastik di RW 10 selama ini bergantung penuh pada satu jalur distributor sehingga jangkauan pasar terbatas dan daya tawar rendah. Pemasaran digital tidak menghapus jalur distributor, melainkan membuka peluang alternatif kanal penjualan baru untuk memperluas jangkauan pembeli melalui WhatsApp Business.",
    methods: [
      "Observasi dan pendataan jenis, ukuran, serta sistem pemasaran yang ada.",
      "Dokumentasi foto produk yang layak jual menggunakan HP beserta penyusunan deskripsi singkat.",
      "Penyusunan katalog digital langsung pada fitur katalog WhatsApp Business UMKM.",
      "Sosialisasi dan pendampingan pembuatan, penataan profil, dan pesan otomatis WA Business.",
      "Pelatihan pemanfaatan mandiri bagi pelaku usaha serta evaluasi pemahaman."
    ],
    outputs: [
      "Katalog produk digital berbasis foto pada akun WhatsApp Business UMKM yang tertata.",
      "Meningkatnya pemahaman pelaku usaha dalam memasarkan produk secara digital.",
      "Terbukanya alternatif kanal penjualan mandiri di luar jalur distributor."
    ]
  },
  {
    id: 8,
    title: "Sosialisasi & Edukasi Konsep 5S/5R Penataan Area Kerja Bank Sampah",
    tag: "Manajemen Kualitas 5S",
    desc: "Penerapan prinsip Ringkas, Rapi, Resik, Rawat, dan Rajin (5S/5R) untuk menata alur sortir dan zona penyimpanan barang lapak agar lebih tertib dan efisien.",
    background: "Area kerja Bank Sampah sering belum tertata, di mana barang lapak menumpuk bercampur dan zona penyortiran/penyimpanan belum jelas. Kondisi ini memperlambat penimbangan serta menimbulkan risiko kebersihan. Konsep 5S/5R diterapkan untuk menata alur kerja agar lebih efisien dan berkelanjutan.",
    methods: [
      "Observasi alur kerja dan kondisi penataan area bank sampah.",
      "Sosialisasi konsep 5S/5R dan manfaatnya kepada pengurus dengan bahasa sederhana.",
      "Penerapan percontohan memilah dan menata barang lapak ke zona berlabel bersama pengurus.",
      "Penyediaan media standar seperti label zona, papan penanda, atau kartu checklist 5S.",
      "Ajakan pembiasaan menaruh sampah pada zona yang benar dan evaluasi dokumentasi."
    ],
    outputs: [
      "Area penyortiran dan penyimpanan Bank Sampah yang lebih tertata beserta label zona.",
      "Media edukasi poster dan kartu checklist 5S untuk operasional harian.",
      "Area percontohan bank sampah yang lebih rapi dan efisien."
    ]
  },
  {
    id: 9,
    title: "Ergonomi Kerja & Pendampingan Peregangan (Stretching) Pengrajin Anyaman",
    tag: "Kesehatan & K3 Ergonomi",
    desc: "Penyuluhan posisi duduk ergonomis dan demonstrasi latihan peregangan berkala untuk mencegah keluhan gangguan otot (Musculoskeletal Disorders) saat menganyam.",
    background: "Pengrajin anyaman bekerja statis selama 6-8 jam per hari dengan gerakan tangan berulang (repetitive movement) dan membungkuk dalam waktu lama. Ini menjadi risiko utama Musculoskeletal Disorders (MSDs) seperti pegal, nyeri punggung, dan kesemutan. Program ini memberikan edukasi ergonomi dan demonstrasi peregangan rutin.",
    methods: [
      "Observasi postur kerja, durasi, gerakan berulang, serta wawancara keluhan fisik pengrajin.",
      "Pengukuran awal keluhan muskuloskeletal menggunakan instrumen Nordic Body Map (NBM).",
      "Penyusunan media edukasi poster dan leaflet panduan ergonomi & peregangan.",
      "Penyuluhan mengenai posisi duduk yang benar, pengaturan alat kerja, dan istirahat aktif.",
      "Demonstrasi dan pendampingan latihan stretching 5-10 menit secara berkala selama bekerja."
    ],
    outputs: [
      "Poster edukasi prinsip ergonomi kerja saat proses menganyam tali lashing.",
      "Leaflet modul 'Panduan Ergonomi dan Stretching bagi Pengrajin Anyaman Tali Lashing'.",
      "Meningkatnya pengetahuan dan keterampilan pengrajin dalam menerapkan posisi ergonomis dan peregangan mandiri."
    ]
  },
  {
    id: 10,
    title: "SIMA-Sampah: Sistem Informasi Akuntansi Persediaan Bank Sampah",
    tag: "Sistem Informasi Akuntansi",
    desc: "Perancangan SOP alur inventaris dan desain prototipe antarmuka digital (Figma) kartu stok dan dashboard laporan akuntansi persediaan Bank Sampah.",
    background: "Pencatatan arus masuk dan keluar sampah yang masih manual/tidak terdokumentasi menyebabkan pengurus Bank Sampah kesulitan memantau saldo persediaan secara real-time, melemahkan posisi tawar, serta meningkatkan risiko penurunan nilai persediaan (inventory write-down). SIMA-Sampah menyusun sistem akuntansi dan prototype digital.",
    methods: [
      "Observasi dan analisis kebutuhan bersama pengurus mengenai alur mutasi barang.",
      "Perancangan flowchart SOP terstandar yang mengintegrasikan aktivitas gudang dan pencatatan.",
      "Desain prototype UI/UX aplikasi SIMA-Sampah berbasis Figma (modul stok, kartu digital, dashboard).",
      "Edukasi akuntansi persediaan tentang saldo awal, mutasi, dan penilaian persediaan.",
      "Simulasi, uji coba skenario transaksi, dan penyerahan dokumen/panduan sistem."
    ],
    outputs: [
      "Link dan dokumen Prototype Design Aplikasi SIMA-Sampah berbasis Figma yang interaktif.",
      "Lembar cetak Flowchart SOP Pengisian Inventory Card (Kartu Stok) baku untuk Bank Sampah."
    ]
  },
  {
    id: 11,
    title: "Optimalisasi Manajemen Persediaan Bank Sampah Berbasis FIFO",
    tag: "Manajemen Persediaan",
    desc: "Penyuluhan dan bimbingan teknis pencatatan volume dan umur persediaan agar tumpukan material tidak mengalami penyusutan nilai ekonomis akibat penyimpanan lama.",
    background: "Sampah yang disetor di Bank Sampah umumnya ditumpuk tanpa pencatatan volume per jenis sehingga volume siap jual tidak diketahui pasti. Penumpukan terlalu lama berisiko menyusutkan nilai ekonomis material. Edukasi pengelolaan persediaan berbasis FIFO memastikan sampah yang lebih dulu disimpan diprioritaskan dijual terlebih dahulu.",
    methods: [
      "Survei dan identifikasi kondisi gudang, jenis sampah, serta sistem penyimpanan saat ini.",
      "Penyusunan materi sosialisasi dan leaflet edukasi manajemen persediaan FIFO.",
      "Penyuluhan dan bimbingan teknis mengenai pencatatan arus masuk-keluar persediaan.",
      "Simulasi penerapan kartu stok dan urutan pengeluaran barang bersama pengurus.",
      "Evaluasi pemahaman pengurus dan efektivitas penerapan sistem penyimpanan."
    ],
    outputs: [
      "Peningkatan kapasitas dan pemahaman pengurus Bank Sampah dalam menerapkan metode FIFO.",
      "Sistem penyimpanan dan pencatatan persediaan yang lebih teratur meminimalkan penyusutan barang."
    ]
  },
  {
    id: 12,
    title: "Pendampingan Literasi Digital, Keamanan Data Pribadi & Pencegahan Hoaks",
    tag: "Literasi & Keamanan Digital",
    desc: "Edukasi kewaspadaan terhadap berita palsu (hoaks), penipuan online (phishing), serta penerapan verifikasi dua langkah dan privasi data di gawai warga.",
    background: "Seiring meningkatnya penggunaan gawai dan media sosial di lingkungan warga, risiko paparan informasi palsu (hoaks) dan kejahatan siber (penipuan online/phishing) semakin tinggi. Program ini meningkatkan literasi digital warga agar mampu memilah informasi dan menjaga keamanan data pribadi.",
    methods: [
      "Sosialisasi interaktif tentang pengenalan berita palsu dan ciri-ciri penipuan digital.",
      "Pelatihan pengamanan akun (verifikasi dua langkah, kata sandi kuat, privasi data).",
      "Edukasi etika berinternet sehat dan pemanfaatan media sosial untuk promosi positif desa.",
      "Pembagian infografis/leaflet panduan keamanan digital sehari-hari."
    ],
    outputs: [
      "Warga yang lebih waspada, kritis, dan cerdas dalam menyaring informasi digital.",
      "Infografis panduan praktis pencegahan hoaks dan pengamanan data pribadi di gawai warga."
    ]
  },
  {
    id: 13,
    title: "Workshop Regenerasi Pengrajin Muda Anyaman Tali Lashing bersama Karang Taruna",
    tag: "Kewirausahaan Pemuda",
    desc: "Pelatihan teknik dasar menganyam tali lashing bagi pemuda dan anggota Karang Taruna RW 10 sebagai langkah awal menjaga keberlanjutan sentra kerajinan.",
    background: "Mayoritas pengrajin anyaman di sentra RW 10 didominasi oleh generasi tua, sementara pemuda/remaja belum banyak yang menguasai teknik kriya ini. Untuk kelangsungan ekonomi kreatif desa, diperlukan workshop regenerasi bagi anggota Karang Taruna sebagai keterampilan wirausaha produktif.",
    methods: [
      "Koordinasi bersama pengurus Karang Taruna dan pengrajin senior (Bapak Waginah/Ibu Pujiman).",
      "Pelaksanaan workshop pengenalan bahan baku tali lashing industri dan teknik dasar anyaman.",
      "Praktik langsung pembuatan produk sederhana (storage mini atau alas meja) oleh pemuda.",
      "Diskusi peluang bisnis kreatif dan keberlanjutan regenerasi pengrajin muda."
    ],
    outputs: [
      "Tumbuhnya minat dan keterampilan teknis menganyam pada pemuda Karang Taruna RW 10.",
      "Produk karya latihan pemuda sebagai langkah awal regenerasi sentra kerajinan Tandang."
    ]
  },
  {
    id: 14,
    title: "Pendampingan Akuntansi & Administrasi Logistik Kegiatan Kemasyarakatan",
    tag: "Administrasi & Logistik",
    desc: "Penyusunan format buku inventaris standar serta bimbingan teknis pencatatan aset lingkungan tingkat RT/RW agar akuntabel dan tertib administrasi.",
    background: "Pengelolaan administrasi barang inventaris dan pencatatan logistik pada kegiatan sosial kemasyarakatan di tingkat RT/RW seringkali kurang terarsip dengan rapi. Program ini memberikan pendampingan penataan administrasi logistik yang transparan dan tertib.",
    methods: [
      "Observasi sistem pencatatan inventaris dan pengorganisasian logistik di balai warga/RT.",
      "Penyusunan format buku inventaris barang dan alur peminjaman perlengkapan lingkungan.",
      "Pelatihan pengisian buku administrasi logistik bagi pengurus RT dan PKK.",
      "Pendampingan perapihan arsip dan pengecekan fisik barang inventaris lingkungan."
    ],
    outputs: [
      "Buku panduan dan format standar administrasi inventaris logistik tingkat RT/RW.",
      "Sistem pencatatan aset lingkungan yang rapi, mudah dipantau, dan akuntabel."
    ]
  },
  {
    id: 15,
    title: "Edukasi & Penerapan Otomasi Sederhana Sensor Energi untuk Fasilitas Balai Warga",
    tag: "Teknologi Rekayasa Otomasi",
    desc: "Perakitan dan pemasangan sistem lampu/penerangan otomatis berbasis sensor cahaya & gerak guna efisiensi pemakaian energi listrik di balai pertemuan warga.",
    background: "Penggunaan listrik di fasilitas umum seperti balai pertemuan warga seringkali kurang efisien karena lampu atau perangkat listrik lupa dimatikan. Aplikasi otomasi sederhana menggunakan sensor hemat energi dapat membantu pengelolaan fasilitas balai agar lebih modern dan hemat biaya.",
    methods: [
      "Survei kebutuhan instalasi listrik dan titik penerangan di area balai pertemuan warga.",
      "Perancangan dan perakitan alat otomasi sederhana (sensor cahaya/gerak untuk lampu otomatis).",
      "Pemasangan dan uji coba percontohan sistem otomasi di titik strategis balai RW.",
      "Sosialisasi dan pelatihan perawatan mandiri perangkat otomasi kepada pengurus balai."
    ],
    outputs: [
      "Instalasi teknologi otomasi sensor penerangan yang berfungsi baik di balai warga.",
      "Efisiensi penggunaan energi listrik dan peningkatan fasilitas umum lingkungan."
    ]
  }
];

export const proposalsTandangData = {
  tandangSaintek: {
    title: "Pengembangan Produk Inovatif Berbahan Limbah Plastik Berbasis Teknologi Tepat Guna",
    lokasi: "RW 3 RT 2 Kelurahan Tandang, Kecamatan Tembalang, Kota Semarang.",
    usulan: "Mencakup tiga kegiatan terintegrasi: (1) Rekayasa paving block komposit dari limbah plastik kresek dan bubble wrap, (2) Pengolahan minyak jelantah menjadi produk pewangi ruangan dan lilin aromaterapi, serta (3) Pembuatan lubang resapan biopori untuk peningkatan resapan air sekaligus pengomposan sampah organik. Setiap kegiatan disertai edukasi, praktik langsung, dan pendampingan produksi.",
    potensi: "Tingginya volume sampah plastik kresek dan bubble wrap di lingkungan warga yang belum termanfaatkan secara optimal. Adanya potensi kerja sama dengan UMKM dan kelompok warga setempat untuk memproduksi paving block bernilai ekonomis serta dukungan penuh perangkat kelurahan RT/RW.",
    permasalahan: "Sampah plastik kresek dan bubble wrap sulit terurai serta sering dibakar atau dibuang sembarangan. Belum adanya teknologi tepat guna di tingkat masyarakat untuk mengolah limbah plastik menjadi produk bernilai guna, minimnya pengetahuan teknik percetakan paving block, dan belum tersedianya alat molding sederhana.",
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
    sasaran: "Warga RT/RW setempat, pengelola Bank Sampah, dan UMKM/kelompok warga calon produsen paving block."
  },
  tandangSoshum: {
    title: "Pemberdayaan Masyarakat dalam Pengelolaan Limbah Plastik melalui Edukasi dan Pelatihan",
    lokasi: "RW 10 Kelurahan Tandang, Kecamatan Tembalang, Kota Semarang.",
    usulan: "Terbagi menjadi dua output utama: Output 2.2 berupa SOSCAMP (Social Campaign Pengelolaan Limbah Plastik Berbasis Masyarakat 3R, penyediaan media poster/leaflet/banner, serta penghiasan Balai RT/Desa bertema lingkungan); dan Output 2.3 berupa Pelatihan Branding dan Digital Marketing Produk Daur Ulang (identitas produk, desain kemasan/packaging, katalog produk, fotografi sederhana, dan promosi media sosial/marketplace).",
    potensi: "Masyarakat memiliki semangat gotong royong dan organisasi aktif seperti PKK, Karang Taruna, dan perangkat RT/RW. Produk hasil pengolahan limbah plastik dari tim Saintek maupun pengrajin memiliki nilai guna tinggi dan berpotensi menjadi produk bernilai ekonomi yang luas.",
    permasalahan: "Kesadaran masyarakat mengenai pentingnya pengelolaan limbah plastik masih rendah dan belum menerapkan pemilahan sampah. Selain itu, masyarakat belum memiliki pengetahuan mengenai branding, pengemasan profesional, maupun strategi pemasaran digital melalui media sosial.",
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
    sasaran: "PKK, Karang Taruna, perangkat desa, pelaku UMKM, masyarakat umum, dan anak-anak sekolah."
  },
  tandangMd3: {
    title: "Video After Movie di Kelurahan Tandang Kecamatan Tembalang Kota Semarang",
    lokasi: "Seluruh wilayah pengabdian RW 3 dan RW 10 Kelurahan Tandang, Kota Semarang.",
    usulan: "Produksi video dokumenter komprehensif yang merekam seluruh rangkaian pengabdian mahasiswa, eksplorasi potensi dan profil Kelurahan Tandang, wawancara mendalam dengan perangkat desa, pengelola bank sampah, dan pengrajin anyaman tali lashing, serta rekam jejak nyata transformasi sosial dan ekonomi kreatif warga.",
    potensi: "Kelurahan Tandang memiliki dinamika kehidupan masyarakat yang guyub serta keunikan sentra pengrajin anyaman tali lashing yang sangat bernilai visual dan historis untuk diangkat ke dalam sinematografi dokumenter.",
    permasalahan: "Belum adanya dokumentasi audiovisual berkualitas tinggi yang merangkum secara utuh potensi desa, proses kreatif pengrajin, dan kolaborasi pengabdian masyarakat sebagai media promosi digital kelurahan.",
    metode: [
      "Penyusunan konsep kreatif, Storyboard, dan skrip narasi (SSG) tiap sequence video.",
      "Koordinasi dan jadwal wawancara (interview storytelling) bersama tokoh desa & pengrajin.",
      "Pengambilan footage sinematik untuk key events, aktivitas warga, dan proses anyaman.",
      "Penyortiran seluruh aset dokumentasi di Google Drive dan tata artistik produksi.",
      "Proses editing, color grading, penyelarasan audio narasi, dan pemutaran/publikasi resmi."
    ],
    luaran: [
      "Video dokumenter After Movie resmi KKN IDBU 70 Kelurahan Tandang beresolusi tinggi (4K/1080p).",
      "Arsip digital terstruktur berisi seluruh footage kegiatan, wawancara, dan foto pengabdian.",
      "Media promosi visual abadi untuk memperkenalkan potensi ekonomi kreatif Kelurahan Tandang ke khalayak luas."
    ],
    sasaran: "Pemerintah Kelurahan Tandang, masyarakat umum, akademisi, dan calon pembeli produk kreatif desa."
  }
};

export default function KknProgramsTandang() {
  const [selectedProposal, setSelectedProposal] = useState<any>(null);
  const [selectedSosmas, setSelectedSosmas] = useState<SosmasItem | null>(null);

  return (
    <div className="space-y-28 animate-fadeIn">
      {/* 1. MD 2 - SAINTEK TANDANG */}
      <div id="md2-saintek-tandang">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/50 block mb-3">
            Multidisiplin 2 — Kelurahan Tandang
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-charcoal leading-tight">
            Program Saintek
          </h3>
        </div>

        {/* Featured Project Showcase */}
        <div className="relative bg-brand-cream rounded-[40px] overflow-hidden p-8 md:p-12 lg:p-16 border border-brand-charcoal/5 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Graphic/Visual Side */}
          <div className="w-full lg:w-5/12 flex justify-center relative">
            <div className="w-full max-w-[320px] aspect-square bg-[#5B9E31]/10 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,158,49,0.15)_0%,transparent_70%)] blur-2xl" />
              <Beaker className="h-28 w-28 text-brand-green-dark relative z-10" strokeWidth={1} />

              <div className="absolute top-8 right-0 bg-white px-5 py-2.5 rounded-full shadow-xl shadow-brand-charcoal/5 rotate-6 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-brand-charcoal">Teknologi Tepat Guna</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-7/12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-green-dark/10 text-brand-green-dark text-[11px] font-bold tracking-widest uppercase mb-6">
              Inovasi Limbah Plastik & Biopori
            </div>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-medium text-brand-charcoal mb-6 leading-[1.2] tracking-tight">
              Pengembangan Produk Inovatif Berbahan Limbah Plastik Berbasis Teknologi Tepat Guna
            </h4>
            <p className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed mb-10">
              Menjawab tantangan tingginya volume sampah plastik kresek dan <em className="not-italic font-semibold">bubble wrap</em> di RW 3 RT 2 Tandang, tim KKN mengembangkan tiga inovasi terintegrasi: <strong className="font-semibold text-brand-charcoal">Paving Block Komposit</strong>, <strong className="font-semibold text-brand-charcoal">Pewangi/Lilin Aromaterapi Jelantah</strong>, serta <strong className="font-semibold text-brand-charcoal">Lubang Resapan Biopori</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
              <div>
                <h5 className="font-bold text-brand-charcoal mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-green-dark" />
                  Pemberdayaan Warga & UMKM
                </h5>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                  Pendampingan produksi paving block bersama calon produsen mandiri dan kader lingkungan.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-brand-charcoal mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-green-dark" />
                  Ekosistem Terintegrasi 3R
                </h5>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                  Mengombinasikan rekayasa plastik, pemurnian jelantah, dan resapan air biopori sekaligus.
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedProposal(proposalsTandangData.tandangSaintek)}
              className="px-8 py-4 rounded-full bg-brand-charcoal text-sm font-semibold text-white hover:bg-brand-green-dark transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              Lihat Detail Proposal
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MD 2 - SOSHUM TANDANG */}
      <div id="md2-soshum-tandang">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/50 block mb-3">
            Multidisiplin 2 — Kelurahan Tandang
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-charcoal leading-tight">
            Program Soshum
          </h3>
        </div>

        {/* Featured Project Showcase */}
        <div className="relative bg-[#F5F4F0] rounded-[40px] overflow-hidden p-8 md:p-12 lg:p-16 border border-brand-charcoal/5 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Graphic/Visual Side */}
          <div className="w-full lg:w-5/12 flex justify-center relative order-1 lg:order-2">
            <div className="w-full max-w-[320px] aspect-square bg-amber-500/10 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)] blur-2xl" />
              <GraduationCap className="h-28 w-28 text-amber-600 relative z-10" strokeWidth={1} />

              <div className="absolute top-8 left-0 bg-white px-5 py-2.5 rounded-full shadow-xl shadow-brand-charcoal/5 -rotate-6 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-brand-charcoal">Edukasi & Branding</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-7/12 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-800 text-[11px] font-bold tracking-widest uppercase mb-6">
              Sosial Kampanye & Digital Marketing
            </div>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-medium text-brand-charcoal mb-6 leading-[1.2] tracking-tight">
              Pemberdayaan Masyarakat dalam Pengelolaan Limbah Plastik melalui Edukasi dan Pelatihan
            </h4>
            <p className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed mb-10">
              Berfokus di RW 10 Tandang melalui dua output strategis: <strong className="font-semibold text-brand-charcoal">SOSCAMP (Social Campaign 3R & Penghiasan Balai RT/Desa)</strong> serta <strong className="font-semibold text-brand-charcoal">Pelatihan Branding, Packaging, & Digital Marketing</strong> untuk produk daur ulang limbah plastik.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
              <div>
                <h5 className="font-bold text-brand-charcoal mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-amber-600" />
                  Kampanye SOSCAMP 3R
                </h5>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                  Penyuluhan interaktif dan pemasangan media edukatif bertema lingkungan di balai desa.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-brand-charcoal mb-2 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-amber-600" />
                  Branding & Digitalization
                </h5>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                  Penyusunan identitas merek, katalog digital, dan strategi pemasaran online UMKM.
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedProposal(proposalsTandangData.tandangSoshum)}
              className="px-8 py-4 rounded-full bg-brand-charcoal text-sm font-semibold text-white hover:bg-amber-600 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              Lihat Detail Proposal
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. MD 3 - AFTER MOVIE TANDANG */}
      <div id="md3-aftermovie-tandang">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/50 block mb-3">
            Multidisiplin 3 — Kelurahan Tandang
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-charcoal leading-tight">
            Video After Movie
          </h3>
        </div>

        {/* Featured Project Showcase */}
        <div className="relative bg-[#FDFCF8] rounded-[40px] overflow-hidden p-8 md:p-12 lg:p-16 border border-brand-charcoal/8 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center shadow-sm">
          <div className="w-full lg:w-5/12 flex justify-center relative">
            <div className="w-full max-w-[320px] aspect-square bg-blue-500/10 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] blur-2xl" />
              <Video className="h-28 w-28 text-blue-600 relative z-10" strokeWidth={1} />

              <div className="absolute top-8 right-0 bg-white px-5 py-2.5 rounded-full shadow-xl shadow-brand-charcoal/5 rotate-6 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-brand-charcoal">Sinematografi</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-[11px] font-bold tracking-widest uppercase mb-6">
              Dokumentasi & Jejak Digital
            </div>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-medium text-brand-charcoal mb-6 leading-[1.2] tracking-tight">
              Video After Movie di Kelurahan Tandang Kecamatan Tembalang Kota Semarang
            </h4>
            <p className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed mb-10">
              Produksi video dokumenter sinematik yang merekam seluruh rangkaian pengabdian, eksplorasi potensi desa, wawancara mendalam dengan perangkat desa & pengrajin tali lashing, serta jejak nyata transformasi ekonomi kreatif warga Tandang.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
              <div>
                <h5 className="font-bold text-brand-charcoal mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  Storytelling Wawancara
                </h5>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                  Mengangkat narasi inspiratif dari pengrajin senior dan tokoh masyarakat lokal.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-brand-charcoal mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  Sinematografi 4K/1080p
                </h5>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                  Kualitas visual profesional sebagai media promosi abadi kelurahan.
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedProposal(proposalsTandangData.tandangMd3)}
              className="px-8 py-4 rounded-full bg-brand-charcoal text-sm font-semibold text-white hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              Lihat Detail Proposal
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. SOSMAS TANDANG (GOOGLE DESIGN LIGHT STYLE — TANPA NAMA, FOKUS DI PROGRAM) */}
      <div id="sosmas-tandang">
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/50 block mb-4">
            Sosial Masyarakat — Kelurahan Tandang
          </span>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-charcoal leading-tight">
            15 Program Sosmas
          </h3>
          <p className="text-brand-charcoal/60 text-base mt-3 max-w-2xl">
            Klik pada masing-masing kartu untuk melihat latar belakang permasalahan, metode pelaksanaan, dan luaran program.
          </p>
        </div>

        {/* Google Design Light Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {sosmasTandangData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedSosmas(item)}
              className="group flex flex-col cursor-pointer bg-white p-6 sm:p-8 rounded-[32px] border border-brand-charcoal/10 hover:border-brand-green-dark/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top — Icon / Tag Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-charcoal/5 text-brand-charcoal group-hover:bg-brand-green-dark group-hover:text-white transition-colors duration-300">
                  {item.tag}
                </span>
                <span className="text-xs font-semibold text-brand-charcoal/40 group-hover:text-brand-green-dark transition-colors">
                  #{item.id}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-xl sm:text-2xl font-bold text-brand-charcoal leading-tight mb-4 group-hover:text-brand-green-dark transition-colors duration-300">
                {item.title}
              </h4>

              {/* Desc */}
              <p className="text-sm sm:text-base text-brand-charcoal/70 leading-relaxed mb-8 flex-grow line-clamp-3">
                {item.desc}
              </p>

              {/* Footer action prompt */}
              <div className="pt-4 border-t border-brand-charcoal/5 flex items-center justify-between mt-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/50 group-hover:text-brand-charcoal transition-colors">
                  Detail Program
                </span>
                <div className="w-8 h-8 rounded-full bg-brand-charcoal/5 flex items-center justify-center group-hover:bg-brand-green-dark group-hover:text-white transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DETAIL PROPOSAL (SAINTEK / SOSHUM / MD3) */}
      {selectedProposal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProposal(null)}
          />

          <div className="relative bg-[#FDFCF8] rounded-[32px] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 sm:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedProposal(null)}
              className="absolute top-6 right-6 p-3 bg-brand-charcoal/5 rounded-full hover:bg-brand-charcoal/10 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5 text-brand-charcoal" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark mb-4 block">
              Detail Proposal Kerja
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-brand-charcoal mb-10 pr-12 leading-tight">
              {selectedProposal.title}
            </h2>

            <div className="space-y-10">
              {selectedProposal.lokasi && (
                <div className="flex items-start gap-4 p-5 bg-brand-cream rounded-2xl border border-brand-charcoal/5">
                  <MapPin className="h-6 w-6 text-brand-green-dark shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-brand-charcoal">Lokasi Kegiatan</h3>
                    <p className="text-sm text-brand-charcoal/70 mt-1">{selectedProposal.lokasi}</p>
                  </div>
                </div>
              )}

              {selectedProposal.usulan && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Usulan & Luaran Utama</h3>
                  <p className="text-brand-charcoal/80 leading-relaxed">{selectedProposal.usulan}</p>
                </div>
              )}

              {selectedProposal.potensi && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Potensi Wilayah</h3>
                  <p className="text-brand-charcoal/70 leading-relaxed">{selectedProposal.potensi}</p>
                </div>
              )}

              {selectedProposal.permasalahan && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Permasalahan Utama</h3>
                  <p className="text-brand-charcoal/70 leading-relaxed">{selectedProposal.permasalahan}</p>
                </div>
              )}

              {selectedProposal.metode && selectedProposal.metode.length > 0 && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-4">Metode Pelaksanaan</h3>
                  <ul className="space-y-3">
                    {selectedProposal.metode.map((step: string, i: number) => (
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

              {selectedProposal.luaran && selectedProposal.luaran.length > 0 && (
                <div className="p-6 sm:p-8 bg-brand-charcoal/[0.03] rounded-3xl border border-brand-charcoal/10">
                  <h3 className="text-xl font-medium text-brand-charcoal mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-green-dark" />
                    Target Luaran Program (Outputs)
                  </h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {selectedProposal.luaran.map((out: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green-dark mt-2.5 shrink-0" />
                        <span className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProposal.sasaran && (
                <div className="pt-6 border-t border-brand-charcoal/10">
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">Kelompok Sasaran</h3>
                  <p className="text-brand-charcoal/70 leading-relaxed">{selectedProposal.sasaran}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL DETAIL SOSMAS INDIVIDU */}
      {selectedSosmas && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedSosmas(null)}
          />

          <div className="relative bg-[#FDFCF8] rounded-[32px] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 sm:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedSosmas(null)}
              className="absolute top-6 right-6 p-3 bg-brand-charcoal/5 rounded-full hover:bg-brand-charcoal/10 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5 text-brand-charcoal" />
            </button>

            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-green-dark/10 text-brand-green-dark mb-4">
              {selectedSosmas.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-brand-charcoal mb-8 pr-12 leading-tight">
              {selectedSosmas.title}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-2">Ringkasan & Tujuan</h3>
                <p className="text-brand-charcoal/80 leading-relaxed">{selectedSosmas.desc}</p>
              </div>

              {selectedSosmas.background && (
                <div className="p-5 sm:p-6 bg-brand-cream rounded-2xl border border-brand-charcoal/5">
                  <h3 className="text-base font-bold text-brand-charcoal mb-2">Latar Belakang & Permasalahan</h3>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed">{selectedSosmas.background}</p>
                </div>
              )}

              {selectedSosmas.methods && selectedSosmas.methods.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-brand-charcoal mb-3">Metode Pelaksanaan</h3>
                  <ul className="space-y-2.5">
                    {selectedSosmas.methods.map((step: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-charcoal/10 text-brand-charcoal text-[11px] font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-brand-charcoal/70 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedSosmas.outputs && selectedSosmas.outputs.length > 0 && (
                <div className="pt-6 border-t border-brand-charcoal/10">
                  <h3 className="text-lg font-bold text-brand-charcoal mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-green-dark" />
                    Luaran Program (Outputs)
                  </h3>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {selectedSosmas.outputs.map((out: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-brand-charcoal/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green-dark mt-2 shrink-0" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
