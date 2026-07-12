export interface StatItem {
  value: string;
  label: string;
}

export interface PengrajinItem {
  id: number;
  name: string;
  role: string;
  desc: string;
  products: string[];
  phone: string;
  shopee: string;
  image: string; // Tempat untuk menaruh link foto warga (misal: /assets/warga1.jpg atau di public/)
}

export interface KatalogItem {
  id: number;
  name: string;
  category: string;
  desc: string;
  color: string;
  image: string; // Tempat untuk menaruh link foto produk (misal: /lashing_craft_bags.png atau di public/)
}

export interface ProgramItem {
  id: number;
  name: string;
  title: string;
  tag: string;
  desc: string;
  image?: string;
}

/* ═══════════════════════════════════════════
   STATISTIK WILAYAH TANDANG
   ═══════════════════════════════════════════ */
export const stats: StatItem[] = [
  { value: "3,76 km²", label: "Luas Wilayah" },
  { value: "24.997", label: "Jiwa Penduduk" },
  { value: "14 RW", label: "Total Rukun Warga" },
  { value: "UMKM Tali Anyaman", label: "Potensi Utama" },
];

/* ═══════════════════════════════════════════
   PROFIL PENGRAJIN TANDANG (1 WARGA = 1 KARTU)
   Tokopedia DIHAPUS, disertai field 'image' untuk foto
   ═══════════════════════════════════════════ */
export const pengrajin: PengrajinItem[] = [
  {
    id: 1,
    name: "Ibu Titin",
    role: "Pengrajin Tali Lashing — RW 10 (RT 04)",
    desc: "Pengrajin tas anyaman dari limbah tali lashing yang telah aktif memproduksi kerajinan bersama kelompok pengrajin di RW 10.",
    products: ["Tas Anyam Lashing"],
    phone: "0812-xxxx-0001",
    shopee: "https://shopee.co.id",
    image: "/placeholder-pengrajin.png",
  },
  {
    id: 2,
    name: "Ibu Ponijah",
    role: "Pengrajin Tali Lashing — RW 10 (RT 04)",
    desc: "Aktif membuat tas anyaman dari tali lashing dengan berbagai model sesuai kebutuhan dan pesanan.",
    products: ["Tas Anyam Lashing"],
    phone: "0812-xxxx-0002",
    shopee: "https://shopee.co.id",
    image: "/placeholder-pengrajin.png",
  },
  {
    id: 3,
    name: "Pak Waginah & Ibu Pujiman",
    role: "Pengrajin Tali Lashing — RW 10 (RT 04)",
    desc: "Terlibat dalam proses pembuatan tas anyaman berbahan limbah tali lashing bersama kelompok pengrajin di RW 10.",
    products: ["Tas Anyam Lashing"],
    phone: "0813-xxxx-0003",
    shopee: "https://shopee.co.id",
    image: "/placeholder-pengrajin.png",
  },
  {
    id: 4,
    name: "Pak Ponijan",
    role: "Pengrajin Tali Lashing — RW 10 (RT 04)",
    desc: "Pengrajin yang ikut memproduksi tas anyaman sebagai bagian dari upaya pemanfaatan limbah tali lashing menjadi produk bernilai guna.",
    products: ["Tas Anyam Lashing"],
    phone: "0813-xxxx-0005",
    shopee: "https://shopee.co.id",
    image: "/placeholder-pengrajin.png",
  },
  {
    id: 5,
    name: "Ibu Utami",
    role: "Pengrajin Tali Lashing — RW 10 (RT 03)",
    desc: "Pengrajin di RT 03 RW 10 yang memproduksi tas anyaman dari limbah tali lashing bersama kelompok pengrajin setempat.",
    products: ["Tas Anyam Lashing"],
    phone: "0812-xxxx-0006",
    shopee: "https://shopee.co.id",
    image: "/utami.jpg",
  }
];
/* ═══════════════════════════════════════════
   KATALOG DIGITAL PRODUK (HARGA DIHAPUS)
   Isi: tas, pot, storage box, tudung saji, taplak meja, tempat tissue
   Disertai field 'image' untuk foto produk
   ═══════════════════════════════════════════ */
export const katalogProduk: KatalogItem[] = [
  {
    id: 1,
    name: "Tas Anyaman",
    category: "Tas & Aksesoris",
    desc: "Tas serbaguna berbahan limbah tali plastik industri Polytron dengan kerapatan tinggi, sangat kuat menahan beban belanja dan modis.",
    color: "bg-[#5B9E31]/8",
    image: "/tas.png",
  },
  {
    id: 2,
    name: "Pot Bunga",
    category: "Dekorasi Rumah",
    desc: "Pot gantung tahan cuaca untuk tanaman hias berdaya tahan tinggi terhadap paparan sinar matahari, mempercantik teras dan taman rumah.",
    color: "bg-brand-charcoal/5",
    image: "/pot.png",
  },
  {
    id: 3,
    name: "Storage Box",
    category: "Penyimpanan",
    desc: "Wadah penyimpanan serbaguna berstruktur rangka kokoh dengan penutup rapat anti-debu untuk merapikan pakaian, mainan, atau dokumen.",
    color: "bg-[#2E5A44]/8",
    image: "/storage-box.png",
  },
  {
    id: 4,
    name: "Tudung Saji Elegan",
    category: "Meja Makan",
    desc: "Pelindung hidangan higienis dengan teknik anyaman silang presisi, menjaga kebersihan makanan dengan sirkulasi udara yang optimal.",
    color: "bg-orange-900/5",
    image: "/tudung-saji.png",
  },
  {
    id: 5,
    name: "Alas Meja",
    category: "Meja Makan",
    desc: "Table runner panjang bermotif kontemporer yang memberikan aksen mewah pada jamuan makan, tahan tumpahan air dan mudah dibersihkan.",
    color: "bg-[#2E5A44]/8",
    image: "/alas.png",
  },
  {
    id: 6,
    name: "Tempat Tissue",
    category: "Perabot Rumah",
    desc: "Wadah tisu rapi dari limbah tali lashing yang tahan lama dan memiliki kombinasi warna berkelas untuk menghiasi meja tamu Anda.",
    color: "bg-brand-charcoal/5",
    image: "/tempat-tisu.png",
  },
];

/* ═══════════════════════════════════════════
   PROGRAM SAINTEK TANDANG (Untuk Halaman /tandang/saintek)
   ═══════════════════════════════════════════ */
export const saintekData: ProgramItem[] = [
  {
    id: 1,
    name: "Tim Saintek KKN",
    title: "Pemetaan & Desain Alat Potong Tali Lashing Ergonomis",
    tag: "Teknologi & Produksi",
    desc: "Perancangan alat potong sederhana untuk menstandarisasi ukuran dan mempercepat proses pemotongan limbah tali plastik sebelum dianyam oleh pengrajin.",
  },
  {
    id: 2,
    name: "Tim Saintek KKN",
    title: "Sistem Irigasi Hemat Air & Komposting Bank Sampah RW 3",
    tag: "Agroekologi & Lingkungan",
    desc: "Penerapan teknik pengomposan rontokan daun dan limbah organik di Bank Sampah RW 3 dipadukan dengan sistem penyiraman tanaman yang efisien.",
  },
  {
    id: 3,
    name: "Tim Saintek KKN",
    title: "Optimalisasi Keselamatan Kerja & Ergonomi Sentra Anyaman",
    tag: "Kesehatan & K3",
    desc: "Penyuluhan tata letak pencahayaan dan posisi duduk ergonomis di sentra RT 3 & RT 4 RW 10 guna mengurangi keluhan kelelahan fisik pengrajin.",
  },
];

/* ═══════════════════════════════════════════
   PROGRAM SOSHUM TANDANG (Untuk Halaman /tandang/soshum)
   ═══════════════════════════════════════════ */
export const soshumData: ProgramItem[] = [
  {
    id: 1,
    name: "Tim Soshum KKN",
    title: "Penyusunan Modul & SOP Standarisasi Anyaman (Output 1.1)",
    tag: "Manajemen & Kriya",
    desc: "Penyusunan kerangka kerja sistematis pembuatan produk kerajinan tali lashing sebagai panduan tertulis bagi regenerasi pengrajin muda.",
  },
  {
    id: 2,
    name: "Tim Soshum KKN",
    title: "Pelatihan Pembukuan Kas RT Bank Sampah RW 3 & UMKM",
    tag: "Ekonomi & Keuangan",
    desc: "Edukasi pencatatan kas sederhana dan transparansi keuangan bagi pengurus Bank Sampah serta manajemen arus kas untuk pelaku usaha lashing.",
  },
  {
    id: 3,
    name: "Tim Soshum KKN",
    title: "Digital Marketing & Rebranding Katalog Online SETANJANG",
    tag: "Komunikasi & Pemasaran",
    desc: "Sosialisasi teknik pemasaran online, foto produk, dan pengelolaan etalase digital untuk memperluas jangkauan pasar UMKM ke tingkat nasional.",
  },
];

/* ═══════════════════════════════════════════
   PROGRAM SOSMAS TANDANG (Untuk Halaman /tandang/sosmas)
   ═══════════════════════════════════════════ */
export const sosmasData: ProgramItem[] = [
  { id: 1, name: "Ilham Ardhiansyah", title: "Revitalisasi & Standarisasi Tata Kelola Bank Sampah RW 03", tag: "Lingkungan", desc: "Pendampingan pembaruan SK kepengurusan dan penyusunan SOP tata kelola pemilahan sampah 7 kategori bersama warga RW 3 Tandang." },
  { id: 2, name: "Dinda Ayu Safitri", title: "Pelatihan Pembuatan 5 Inovasi Produk Lashing untuk PKK RW 10", tag: "Ekonomi Kreatif", desc: "Demonstrasi dan praktik pembuatan pot gantung, storage box, sajadah, tudung saji, dan table runner bagi Ibu PKK dan dasawisma." },
  { id: 3, name: "M. Ikhsan Prayoga", title: "Sosialisasi Digital Marketing & Branding UMKM Tali Lashing", tag: "Teknologi", desc: "Pelatihan fotografi produk, copywriting, dan pengelolaan katalog digital untuk mendobrak stagnasi harga jual produk anyaman." },
  { id: 4, name: "Daniswara Gita P.", title: "Integrasi Etalase Digital SETANJANG ke Marketplace Nasional", tag: "Teknologi", desc: "Pendampingan pembuatan toko online resmi UMKM Tandang di Shopee, serta optimalisasi fitur WhatsApp Business." },
  { id: 5, name: "Anggi Sahabat P.", title: "Penyuluhan Manajemen Keuangan & Pembukuan Kas RT Bank Sampah", tag: "Ekonomi", desc: "Edukasi pembukuan sederhana dan manajemen keuangan bagi pengurus Bank Sampah untuk meningkatkan transparansi kas lingkungan." },
  { id: 6, name: "Hibrizi Razan A.", title: "Workshop Regenerasi Pengrajin Muda bersama Karang Taruna RW 10", tag: "Sosial & Kriya", desc: "Mengajak pemuda dan remaja Karang Taruna mempelajari teknik dasar anyaman tali lashing industri Polytron sebagai keterampilan produktif." },
  { id: 7, name: "A. Dinda Muthia S.", title: "Pemetaan Profil & Potensi UMKM Ekonomi Kreatif Kelurahan Tandang", tag: "Pendidikan & Data", desc: "Pendataan spasial dan profil lengkap para pelaku usaha kerajinan dan UMKM di 14 RW Kelurahan Tandang untuk basis data portal digital." },
  { id: 8, name: "Balqis Nailah", title: "Edukasi Pemilahan Sampah Organik & Anorganik Rumah Tangga", tag: "Lingkungan", desc: "Penyuluhan intensif kepada warga mengenai pentingnya memisahkan sampah plastik sejak dari rumah sebelum disetorkan ke Bank Sampah." },
  { id: 9, name: "Naia Nailufar Y.", title: "Penyuluhan Kesehatan & Kebersihan Lingkungan Kerja Pengrajin", tag: "Kesehatan", desc: "Sosialisasi aspek K3 (Keselamatan dan Kesehatan Kerja) ringan, ergonomi duduk saat menganyam, dan kebersihan sentra produksi." },
  { id: 10, name: "Naufal Indra N. I.", title: "Kerja Bakti & Perapihan Ruang Pamer (Showroom) Kriya RW 10", tag: "Lingkungan", desc: "Gotong royong bersama warga membersihkan dan menata ulang balai pertemuan agar layak menjadi display produk kerajinan lashing." },
  { id: 11, name: "Rafael Ardiansyah", title: "Pendampingan Literasi Digital & Pencegahan Hoaks bagi Warga", tag: "Teknologi", desc: "Sosialisasi penggunaan internet sehat, keamanan data pribadi, serta pengenalan media promosi digital bagi warga kelurahan." },
  { id: 12, name: "Mahasiswa KKN", title: "Program Bimbingan Belajar & Literasi Anak Desa Tandang", tag: "Pendidikan", desc: "Pendampingan belajar interaktif bagi anak-anak usia sekolah dasar di sore hari serta pengenalan dasar daur ulang sejak dini." },
  { id: 13, name: "Mahasiswa KKN", title: "Pemeriksaan Kesehatan Gratis & Lansia Sehat RW 03 & RW 10", tag: "Kesehatan", desc: "Pemeriksaan tekanan darah, gula darah, dan konsultasi pola hidup sehat bekerja sama dengan posyandu dan tokoh masyarakat setempat." },
  { id: 14, name: "Mahasiswa KKN", title: "Penanaman Tanaman Obat Keluarga (TOGA) di Area Bank Sampah", tag: "Lingkungan", desc: "Pemanfaatan lahan kosong di sekitar balai RW 3 untuk ditanami berbagai tanaman obat keluarga yang bermanfaat bagi warga." },
  { id: 15, name: "Mahasiswa KKN", title: "Dokumentasi & Pembuatan Video Profil Desa Ekosistem SETANJANG", tag: "Ekonomi Kreatif", desc: "Produksi video dokumenter dan profil potensi wisata kreatif desa yang menonjolkan kolaborasi sinergis Kelurahan Tandang." },
];
