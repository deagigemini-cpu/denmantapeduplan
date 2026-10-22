import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  FileText,
  ClipboardCheck,
  Sparkles,
  CheckCircle2,
  Printer,
  Download,
  Copy,
  Edit3,
  History,
  Trash2,
  ChevronDown,
  ChevronUp,
  Info,
  School,
  Users,
  Layers,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  RefreshCw,
  Wand2,
  FolderOpen,
  X,
  GraduationCap,
  Lightbulb,
  Sliders,
  KeyRound,
  Cpu,
  Presentation,
  PlayCircle,
  FileDown,
  UserCheck,
  Table,
  Award,
  Smile,
} from 'lucide-react';

// ==========================================
// DATA CONTOH CEPAT (PRESET SAMPLES)
// ==========================================
const PRESET_SAMPLES = [
  {
    id: 'sd-ipas',
    label: 'SD - IPAS (Siklus Air)',
    badge: 'Fase B • Kelas 4 SD',
    data: {
      namaGuru: 'Budi Santoso, S.Pd.',
      nipGuru: '19890412 201903 1 005',
      namaKepalaSekolah: 'Hj. Ratna Dewi, S.Pd., M.Pd.',
      nipKepalaSekolah: '19720815 199802 2 001',
      kotaPengesahan: 'Yogyakarta',
      namaSekolah: 'SD Negeri Nusantara 01',
      jenjangFase: 'Fase B (Kelas 3 - 4 SD/MI)',
      kelasSpesifik: 'Kelas 4 SD',
      mataPelajaran: 'IPAS (Ilmu Pengetahuan Alam dan Sosial)',
      topikMateri: 'Siklus Air dan Upaya Menjaga Ketersediaan Air Bersih',
      alokasiWaktu: '2 JP x 35 Menit (1 Pertemuan)',
      capaianPembelajaran:
        'Murid mendeskripsikan terjadinya siklus air dan kaitannya dengan upaya menjaga ketersediaan air bersih di lingkungan sekitar serta memahami dampak aktivitas manusia terhadap ketersediaan air.',
      tujuanPembelajaran:
        '1. Melalui pengamatan media visual dan diskusi kelompok (Memahami), murid dapat mengurutkan tahapan siklus air (evaporasi, transpirasi, kondensasi, presipitasi, dan infiltrasi) dengan benar.\n2. Melalui studi kasus kekeringan lokal (Mengaplikasi), murid dapat menganalisis minimal 3 dampak kegiatan manusia yang mengganggu tahapan infiltrasi air.\n3. Murid dapat merancang kampanye aksi hemat air serta merefleksikan kebiasaan penggunaan air bersih di sekolah dan rumah (Merefleksi).',
      modelPembelajaran: 'Problem Based Learning (PBL) — Pembelajaran Mendalam',
      profilLulusan: [
        'Keimanan & Ketakwaan',
        'Penalaran Kritis',
        'Kolaborasi',
        'Kreativitas',
        'Komunikasi',
      ],
      komposisiAsesmen: [
        'Asesmen Diagnostik Awal',
        'Rubrik Kinerja / Observasi',
        'Pilihan Ganda HOTS + Kunci Jawaban',
        'Uraian / Esai + Pedoman Penskoran',
      ],
      jumlahPG: 5,
      jumlahEsai: 3,
      karakteristikSiswa:
        'Murid kelas 4 SD sangat antusias dengan gambar visual dan cerita bergambar. Sebagian besar bergaya belajar visual dan kinestetik. Tersedia proyektor di kelas dan halaman sekolah memiliki taman resapan air.',
      catatanKhusus:
        'Terapkan Pembelajaran Mendalam (Berkesadaran, Bermakna, Menggembirakan): kelompok visual mengamati infografis siklus air, kelompok kinestetik menyusun kartu tahapan siklus air. Gunakan bahasa yang ramah anak SD.',
    },
  },
  {
    id: 'smp-matematika',
    label: 'SMP - Matematika (SPLDV)',
    badge: 'Fase D • Kelas 8 SMP',
    data: {
      namaGuru: 'Siti Aminah, S.Pd., M.Pd.',
      nipGuru: '19851120 201101 2 008',
      namaKepalaSekolah: 'Drs. H. Ahmad Fauzi, M.Pd.',
      nipKepalaSekolah: '19680510 199412 1 003',
      kotaPengesahan: 'Sleman',
      namaSekolah: 'SMP Negeri 2 Harapan Bangsa',
      jenjangFase: 'Fase D (Kelas 7 - 9 SMP/MTs)',
      kelasSpesifik: 'Kelas 8 SMP',
      mataPelajaran: 'Matematika',
      topikMateri:
        'Sistem Persamaan Linear Dua Variabel (SPLDV) dalam Konteks Jual Beli',
      alokasiWaktu: '2 JP x 40 Menit (1 Pertemuan)',
      capaianPembelajaran:
        'Murid dapat mengenali, memprediksi, dan menggeneralisasi pola dalam bentuk susunan benda dan bilangan. Mereka dapat menyatakan suatu situasi ke dalam bentuk aljabar dan menyelesaikan Sistem Persamaan Linear Dua Variabel (SPLDV) melalui beberapa cara untuk penyelesaian masalah kontekstual.',
      tujuanPembelajaran:
        '1. Murid mampu memahami dan memodelkan permasalahan kontekstual transaksi di kantin sekolah ke dalam bentuk Sistem Persamaan Linear Dua Variabel (SPLDV) secara tepat (Memahami).\n2. Murid mampu mengaplikasikan penyelesaian SPLDV menggunakan metode gabungan (eliminasi dan substitusi) untuk memecahkan masalah paket hemat (Mengaplikasi).\n3. Murid mampu merefleksikan manfaat perhitungan aljabar untuk pengambilan keputusan finansial sehari-hari (Merefleksi).',
      modelPembelajaran: 'Discovery Learning — Pembelajaran Mendalam',
      profilLulusan: [
        'Penalaran Kritis',
        'Kemandirian',
        'Kolaborasi',
        'Komunikasi',
      ],
      komposisiAsesmen: [
        'Asesmen Diagnostik Awal',
        'Rubrik Kinerja / Observasi',
        'Pilihan Ganda HOTS + Kunci Jawaban',
        'Uraian / Esai + Pedoman Penskoran',
      ],
      jumlahPG: 5,
      jumlahEsai: 3,
      karakteristikSiswa:
        'Murid kelas 8 memiliki kemampuan dasar aljabar yang beragam. Beberapa murid masih sering keliru saat melakukan operasi bilangan bulat negatif. Konteks kantin sekolah dan jajanan lokal sangat dekat dengan keseharian mereka.',
      catatanKhusus:
        'Berikan pengalaman belajar Bermakna dan Menggembirakan berupa simulasi struk belanja kantin pada LKPD agar murid mudah mengubah kalimat cerita menjadi variabel x dan y.',
    },
  },
  {
    id: 'sma-biologi',
    label: 'SMA - Biologi (Perubahan Iklim)',
    badge: 'Fase E • Kelas 10 SMA',
    data: {
      namaGuru: 'Dr. Hendra Wijaya, M.Si.',
      nipGuru: '19820314 200902 1 002',
      namaKepalaSekolah: 'Dr. Bambang Sudibyo, M.Pd.',
      nipKepalaSekolah: '19671201 199303 1 004',
      kotaPengesahan: 'Bandung',
      namaSekolah: 'SMA Negeri 1 Cendekia',
      jenjangFase: 'Fase E (Kelas 10 SMA/MA/SMK)',
      kelasSpesifik: 'Kelas 10 SMA',
      mataPelajaran: 'Biologi',
      topikMateri:
        'Pemanasan Global, Perubahan Iklim, dan Dampaknya terhadap Keanekaragaman Hayati Lokal',
      alokasiWaktu: '3 JP x 45 Menit (1 Pertemuan)',
      capaianPembelajaran:
        'Pada akhir fase E, murid memiliki kemampuan menciptakan solusi atas permasalahan-permasalahan berdasarkan isu lokal, nasional atau global terkait pemahaman keanekaragaman makhluk hidup dan peranannya, virus dan peranannya, inovasi teknologi biologi, komponen ekosistem dan interaksi antar komponen serta perubahan lingkungan.',
      tujuanPembelajaran:
        '1. Murid mampu memahami dan menganalisis keterkaitan antara peningkatan emisi gas rumah kaca dengan anomali suhu dan perubahan pola cuaca ekstrem di Indonesia (Memahami).\n2. Murid mampu mengaplikasikan pengetahuan ekologi untuk mengevaluasi dampak perubahan iklim terhadap ketahanan pangan dan kesehatan lingkungan (Mengaplikasi).\n3. Murid mampu merumuskan gagasan solusi mitigasi perubahan iklim serta merefleksikan jejak karbon harian mereka secara berkesadaran (Merefleksi).',
      modelPembelajaran:
        'Project Based Learning (PjBL) — Pembelajaran Mendalam',
      profilLulusan: [
        'Keimanan & Ketakwaan',
        'Kewargaan',
        'Penalaran Kritis',
        'Kreativitas',
        'Kolaborasi',
        'Kesehatan',
      ],
      komposisiAsesmen: [
        'Asesmen Diagnostik Awal',
        'Rubrik Kinerja / Observasi',
        'Pilihan Ganda HOTS + Kunci Jawaban',
        'Uraian / Esai + Pedoman Penskoran',
      ],
      jumlahPG: 5,
      jumlahEsai: 3,
      karakteristikSiswa:
        'Murid kelas 10 melek teknologi dan diizinkan menggunakan smartphone/laptop untuk riset data iklim BMKG. Murid senang berdiskusi tentang isu lingkungan terkini.',
      catatanKhusus:
        'Integrasikan pemanfaatan digital (data BMKG) dan kemitraan lingkungan sekolah untuk mendorong murid menghitung estimasi jejak karbon harian mereka di dalam LKPD.',
    },
  },
  {
    id: 'smk-dkv-smkn4',
    label: 'SMK - DKV (Desain Poster Kampanye Sosial)',
    badge: 'Fase F • Kelas 11 SMK DKV',
    data: {
      namaGuru: 'Rian Hidayat, S.Ds., M.Sn.',
      nipGuru: '19870512 201103 1 004',
      namaKepalaSekolah: 'Drs. H. Agus Setiawan, M.T.',
      nipKepalaSekolah: '19650817 199103 1 008',
      kotaPengesahan: 'Bandung',
      namaSekolah: 'SMKN 4 Bandung',
      jenjangFase: 'Fase F (Kelas 11-12 SMK)',
      kelasSpesifik: 'Kelas 11 DKV',
      mataPelajaran: 'Dasar-Dasar Desain Komunikasi Visual / Kreatif',
      topikMateri:
        'Perancangan Desain Media Kampanye Sosial (Poster & Aset Visual Digital) Berbasis Isu Lingkungan Kota Bandung',
      alokasiWaktu: '6 JP x 45 Menit (2 Pertemuan)',
      capaianPembelajaran:
        'Pada akhir fase F, murid mampu menguasai prinsip-prinsip perancangan visual secara konseptual dan teknis, mulai dari riset visual, pembuatan sketsa, eksplorasi tipografi, tata letak (layout), hingga eksekusi karya desain digital untuk media publikasi cetak maupun digital sesuai kebutuhan klien atau isu sosial.',
      tujuanPembelajaran:
        '1. Murid mampu menganalisis pesan kampanye sosial dan menentukan target audiens yang tepat melalui riset visual (Memahami).\n2. Murid mampu merancang sketsa tata letak, pemilihan warna, dan tipografi poster kampanye digital menggunakan perangkat lunak desain (Mengaplikasi).\n3. Murid mampu mempresentasikan karya desain poster, mengevaluasi umpan balik, dan merefleksikan nilai estetika serta pesan sosial yang disampaikan secara berkesadaran (Merefleksi).',
      modelPembelajaran: 'Project Based Learning (PjBL)',
      profilLulusan: [
        'Kreativitas',
        'Penalaran Kritis',
        'Komunikasi',
        'Kolaborasi',
        'Kemandirian',
      ],
      komposisiAsesmen: [
        'Asesmen Diagnostik Awal (Gaya Visual & Referensi)',
        'Rubrik Kinerja / Observasi Proses Desain',
        'Pilihan Ganda HOTS + Kunci Jawaban',
        'Uraian / Esai + Pedoman Penskoran',
      ],
      jumlahPG: 5,
      jumlahEsai: 3,
      karakteristikSiswa:
        'Murid kelas 11 DKV SMKN 4 Bandung memiliki keterampilan dasar menggunakan perangkat lunak desain grafis (Adobe Illustrator/Photoshop/Corel/Canva), antusias terhadap tren visual modern, serta peka terhadap estetika ruang publik.',
      catatanKhusus:
        'Integrasikan pemanfaatan digital (aplikasi desain dan galeri digital sekolah) serta praktik pedagogis berbasis studio desain agar murid menghasilkan karya poster kampanye sosial yang aplikatif untuk dipamerkan di lingkungan SMKN 4 Bandung.',
    },
  },
];

// ==========================================
// CONTOH HASIL AWAL (DEFAULT PRELOADED RESULT)
// ==========================================
const INITIAL_GENERATED_RESULT = {
  id: 'sample-initial-sd-ipas',
  createdAt: 'Contoh Perangkat Pembelajaran Mendalam Siap Pakai',
  metadata: {
    namaGuru: 'Budi Santoso, S.Pd.',
    nipGuru: '19890412 201903 1 005',
    namaKepalaSekolah: 'Hj. Ratna Dewi, S.Pd., M.Pd.',
    nipKepalaSekolah: '19720815 199802 2 001',
    kotaPengesahan: 'Yogyakarta',
    namaSekolah: 'SD Negeri Nusantara 01',
    jenjangFase: 'Fase B (Kelas 3 - 4 SD/MI)',
    kelasSpesifik: 'Kelas 4 SD',
    mataPelajaran: 'IPAS (Ilmu Pengetahuan Alam dan Sosial)',
    topikMateri: 'Siklus Air dan Upaya Menjaga Ketersediaan Air Bersih',
    alokasiWaktu: '2 JP x 35 Menit (1 Pertemuan)',
    modelPembelajaran: 'Problem Based Learning (PBL) — Pembelajaran Mendalam',
    profilLulusan: [
      'Keimanan & Ketakwaan',
      'Penalaran Kritis',
      'Kolaborasi',
      'Kreativitas',
      'Komunikasi',
    ],
  },
  modulAjar: {
    informasiUmum: {
      identitasModul:
        'Modul Ajar Kurikulum Nasional (Pembelajaran Mendalam) - Siklus Air & Konservasi Air Bersih',
      kompetensiAwal:
        'Murid telah mengenal wujud benda (cair, padat, gas) serta mengetahui manfaat air bagi kehidupan sehari-hari makhluk hidup.',
      profilLulusan: [
        'Keimanan dan Ketakwaan terhadap Tuhan YME: Mensyukuri karunia air ciptaan Tuhan dengan menjaga kelestarian sumber air di alam.',
        'Penalaran Kritis: Menganalisis penyebab berkurangnya air tanah akibat tertutupnya lahan resapan secara logis dan berbasis data.',
        'Kolaborasi: Bekerja sama secara aktif, empatik, dan saling menghargai dalam diskusi kelompok memecahkan masalah kekeringan.',
        'Kreativitas: Menghasilkan gagasan kampanye hemat air yang orisinal dan aplikatif di lingkungan sekolah.',
        'Komunikasi: Menyampaikan hasil pengamatan dan gagasan solusi konservasi air secara jelas, runtut, dan santun.',
      ],
      prinsipPembelajaranMendalam: {
        berkesadaran:
          'Murid diajak melakukan jeda sejenak (mindfulness) mengamati segelas air bersih dan menyadari penuh tujuan belajar serta pentingnya air bagi keberlangsungan hidup.',
        bermakna:
          'Materi siklus air dikaitkan langsung dengan fenomena nyata banjir saat musim hujan dan mengeringnya sumur warga di sekitar tempat tinggal siswa.',
        menggembirakan:
          'Suasana kelas dibangun secara positif, interaktif, dan menyenangkan melalui aktivitas "Tepuk Siklus Air", permainan kartu tahapan, dan apresiasi karya kelompok.',
      },
      kerangkaPembelajaran: {
        praktikPedagogis:
          'Model Problem Based Learning (PBL) dengan pendekatan Pembelajaran Mendalam (Memahami, Mengaplikasi, Merefleksi) yang memuliakan keragaman kesiapan belajar siswa.',
        kemitraanPembelajaran:
          'Kolaborasi aktif antar murid dalam kelompok, bimbingan guru, serta pelibatan orang tua di rumah dalam memantau kebiasaan hemat air bersih.',
        lingkunganPembelajaran:
          'Ruang kelas yang inklusif dan interaktif dipadukan dengan pengamatan langsung area taman/halaman resapan air di lingkungan sekolah.',
        pemanfaatanDigital:
          'Penayangan video animasi/infografis interaktif proses siklus hidrologi melalui proyektor kelas.',
      },
      saranaPrasarana:
        'Proyektor/LCD, Video atau Infografis Siklus Air, Kartu Tahapan Siklus Air, LKPD Cetak, Alat tulis warna, Lingkungan halaman sekolah.',
      targetPesertaDidik:
        'Murid reguler/tipikal (28 siswa) dengan mengakomodasi gaya belajar visual, auditori, dan kinestetik.',
      modelDanMetode:
        'Pendekatan: Pembelajaran Mendalam. Model: Problem Based Learning (PBL). Metode: Eksplorasi Visual, Diskusi Kolaboratif, Studi Kasus Kontekstual, dan Refleksi Otentik.',
    },
    komponenInti: {
      capaianPembelajaran:
        'Murid mendeskripsikan terjadinya siklus air dan kaitannya dengan upaya menjaga ketersediaan air bersih di lingkungan sekitar serta memahami dampak aktivitas manusia terhadap ketersediaan air.',
      tujuanPembelajaran: [
        '(Memahami) Melalui pengamatan media visual dan diskusi kelompok, murid dapat mengurutkan tahapan siklus air (evaporasi, transpirasi, kondensasi, presipitasi, dan infiltrasi) dengan benar.',
        '(Mengaplikasi) Melalui studi kasus kekeringan lokal, murid dapat menganalisis minimal 3 dampak kegiatan manusia yang mengganggu tahapan infiltrasi air.',
        '(Merefleksi) Murid dapat merancang poster kampanye sederhana serta merefleksikan komitmen aksi hemat air di sekolah dan rumah.',
      ],
      indikatorKetercapaian: [
        'Menjelaskan pengertian evaporasi, transpirasi, kondensasi, presipitasi, dan infiltrasi menggunakan bahasa sendiri (Tahap Memahami).',
        'Mengurutkan alur perjalanan air dari bumi ke atmosfer dan kembali ke bumi secara tepat pada bagan LKPD (Tahap Memahami).',
        'Menganalisis hubungan antara penebangan pohon/betonisasi jalan dengan berkurangnya cadangan air tanah/infiltrasi (Tahap Mengaplikasi).',
        'Menyusun dan merefleksikan minimal 3 komitmen tindakan menghemat air bersih di lingkungan sekitar (Tahap Merefleksi).',
      ],
      pemahamanBermakna:
        'Air di bumi tidak pernah habis karena mengalami perputaran yang disebut siklus air. Namun, jumlah air bersih yang layak konsumsi dapat berkurang drastis apabila manusia merusak daerah resapan air dan mencemari lingkungan.',
      pertanyaanPemantik: [
        'Mengapa air laut dan sungai tidak pernah habis meskipun setiap hari kita gunakan dan disinari matahari yang panas?',
        'Ke mana perginya air genangan di halaman sekolah setelah matahari bersinar terik?',
        'Mengapa di beberapa daerah sering terjadi banjir saat musim hujan, tetapi justru kekurangan air bersih saat musim kemarau?',
      ],
    },
    kegiatanPembelajaran: {
      pendahuluan: {
        durasi: '10 Menit',
        langkah: [
          '[Berkesadaran] Guru membuka kelas dengan salam hangat, berdoa bersama, memeriksa kehadiran, dan mengajak murid hening sejenak mengamati segelas air bersih untuk membangun fokus serta kesadaran belajar (Mindful Learning).',
          '[Menggembirakan] Guru mengajak murid melakukan Ice Breaking "Tepuk Siklus Air" untuk menciptakan suasana kelas yang positif dan penuh semangat (Joyful Learning).',
          '[Bermakna] Guru melakukan asesmen diagnostik awal dan apersepsi dengan mengaitkan pengalaman murid saat musim hujan/kemarau, lalu mengajukan pertanyaan pemantik (Meaningful Learning).',
          'Guru menyampaikan Tujuan Pembelajaran, manfaat materi bagi kehidupan nyata, serta alur pengalaman belajar (Memahami, Mengaplikasi, Merefleksi) yang akan dilakukan.',
        ],
      },
      inti: [
        {
          pengalamanBelajar:
            'Pengalaman Belajar 1: MEMAHAMI (Berkesadaran & Bermakna)',
          sintaks: 'Tahap 1: Orientasi Murid pada Masalah Kontekstual',
          durasi: '10 Menit',
          aktivitasGuru:
            'Guru menampilkan berita bergambar/video singkat tentang fenomena sebuah desa yang mengalami kekeringan sumur saat kemarau, padahal saat musim hujan desa tersebut sering kebanjiran.',
          aktivitasSiswa:
            'Murid mengamati tayangan dengan penuh kesadaran (mindful), mengonstruksi pemahaman awal tentang tahapan siklus air, dan mengemukakan pendapat mengapa fenomena tersebut bisa terjadi.',
        },
        {
          pengalamanBelajar:
            'Pengalaman Belajar 1: MEMAHAMI (Berkesadaran & Menggembirakan)',
          sintaks: 'Tahap 2: Mengorganisasikan Murid untuk Belajar',
          durasi: '10 Menit',
          aktivitasGuru:
            'Guru membagi murid menjadi kelompok kecil (4-5 siswa) dan membagikan LKPD "Detektif Siklus Air". Guru menyediakan infografis bagi kelompok visual dan kartu susun siklus air bagi kelompok kinestetik.',
          aktivitasSiswa:
            'Murid berkolaborasi dalam kelompok, membaca petunjuk LKPD, dan membagi peran kerja sama secara aktif dan menggembirakan.',
        },
        {
          pengalamanBelajar:
            'Pengalaman Belajar 2: MENGAPLIKASI (Bermakna & Kolaboratif)',
          sintaks: 'Tahap 3: Membimbing Penyelidikan Individu maupun Kelompok',
          durasi: '15 Menit',
          aktivitasGuru:
            'Guru berkeliling memfasilitasi penyelidikan setiap kelompok, memberikan pertanyaan pemicu (scaffolding) untuk menghubungkan konsep kondensasi, presipitasi, dan infiltrasi dengan kasus nyata di lapangan.',
          aktivitasSiswa:
            'Murid mengaplikasikan pemahamannya dengan melengkapi bagan siklus air pada LKPD, menganalisis dampak penutupan tanah oleh beton terhadap proses infiltrasi, dan merumuskan solusi hemat air.',
        },
        {
          pengalamanBelajar:
            'Pengalaman Belajar 2: MENGAPLIKASI (Menggembirakan & Komunikatif)',
          sintaks: 'Tahap 4: Mengembangkan dan Menyajikan Hasil Karya',
          durasi: '10 Menit',
          aktivitasGuru:
            'Guru memandu sesi presentasi perwakilan kelompok dalam suasana yang saling memuliakan dan mendorong kelompok lain memberikan apresiasi atau tanggapan.',
          aktivitasSiswa:
            'Perwakilan kelompok mengomunikasikan hasil analisis LKPD dan gagasan poster mini "Aksi Pahlawan Air" di depan kelas dengan percaya diri.',
        },
        {
          pengalamanBelajar:
            'Pengalaman Belajar 3: MEREFLEKSI (Berkesadaran & Bermakna)',
          sintaks:
            'Tahap 5: Menganalisis, Mengevaluasi & Merefleksi Proses Pemecahan Masalah',
          durasi: '5 Menit',
          aktivitasGuru:
            'Guru memberikan penguatan konsep tentang tahapan siklus air, meluruskan miskonsepsi, serta memandu murid merefleksikan makna pembelajaran bagi kebiasaan hidup sehat dan peduli lingkungan.',
          aktivitasSiswa:
            'Murid mengevaluasi proses belajar kelompoknya, menyimpulkan temuan, dan menuliskan refleksi komitmen pribadi dalam menghemat air bersih.',
        },
      ],
      penutup: {
        durasi: '10 Menit',
        langkah: [
          '[Merefleksi] Murid bersama guru menyimpulkan poin utama pembelajaran tentang 5 tahapan siklus air dan pentingnya menjaga daerah resapan air.',
          '[Berkesadaran] Murid mengerjakan kuis evaluasi formatif singkat secara jujur dan mandiri untuk mengukur ketercapaian tujuan pembelajaran.',
          '[Menggembirakan] Guru memandu refleksi akhir (Olah Pikir, Olah Hati, Olah Rasa, Olah Raga), memberikan apresiasi kepada seluruh siswa, dan menutup pembelajaran dengan doa serta salam.',
        ],
      },
    },
    pengayaanDanRemedial: {
      pengayaan:
        'Murid yang telah melampaui KKTP diberikan tantangan membuat percobaan sederhana "Siklus Air dalam Kantong Plastik (Ziplock)" di jendela kelas atau menulis cerita pendek "Perjalanan Si Tetes Air".',
      remedial:
        'Murid yang belum mencapai KKTP diberikan bimbingan khusus menggunakan media kartu bergambar tahapan siklus air secara bertahap dan pendampingan tutor sebaya.',
    },
    refleksi: {
      refleksiGuru: [
        'Apakah seluruh murid terlibat aktif dalam diskusi kelompok dan pengamatan siklus air?',
        'Bagian tahapan siklus air manakah yang paling sulit dipahami oleh peserta didik?',
        'Apakah alokasi waktu 2 x 35 menit sudah efektif untuk menyelesaikan aktivitas LKPD?',
      ],
      refleksiSiswa: [
        'Tahapan siklus air apa yang paling menarik menurutmu hari ini?',
        'Kebiasaan baik apa yang akan mulai kamu lakukan di rumah untuk menghemat air bersih?',
        'Bagian mana dari materi hari ini yang masih ingin kamu tanyakan kepada guru?',
      ],
    },
    glosariumDanPustaka: {
      glosarium: [
        'Evaporasi: Proses penguapan air dari permukaan laut, sungai, dan danau karena panas matahari.',
        'Transpirasi: Proses penguapan air dari jaringan makhluk hidup, terutama tumbuhan.',
        'Kondensasi: Perubahan wujud uap air di atmosfer menjadi titik-titik air (awan) karena suhu dingin.',
        'Presipitasi: Proses jatuhnya titik-titik air dari awan ke permukaan bumi sebagai hujan.',
        'Infiltrasi: Proses meresapnya air hujan ke dalam pori-pori tanah menjadi cadangan air tanah.',
      ],
      daftarPustaka: [
        'Fitri, Amalia, dkk. (2021). Buku Panduan Guru dan Murid Ilmu Pengetahuan Alam dan Sosial (IPAS) SD Kelas IV. Jakarta: Kemendikbudristek.',
        'Sumber infografis edukasi lingkungan Kementerian Lingkungan Hidup dan Kehutanan (KLHK).',
      ],
    },
  },
  lkpd: {
    judul: 'LKPD DETEKTIF LINGKUNGAN: MENELUSURI JEJAK SIKLUS AIR',
    subjudul:
      'Lembar Kerja Peserta Didik (LKPD) Berbasis Problem Based Learning',
    tujuanKegiatan: [
      'Mengidentifikasi dan mengurutkan 5 tahapan utama siklus air secara tepat.',
      'Menganalisis penyebab berkurangnya cadangan air tanah berdasarkan kasus lingkungan sekitar.',
      'Merumuskan rencana aksi nyata penghematan dan pelestarian air bersih di sekolah maupun rumah.',
    ],
    petunjukPengerjaan: [
      'Tulislah nama kelompok dan nama lengkap anggota kelompok pada kolom identitas di atas.',
      'Bacalah wacana kasus "Mengapa Sumur Desa Sukamaju Mengering?" dengan teliti bersama kelompokmu.',
      'Amati bagan siklus air dan lengkapi tabel pengamatan yang tersedia.',
      'Diskusikan pertanyaan analitis secara gotong royong dan tuliskan kesimpulan kelompokmu!',
    ],
    stimulusKontekstual: {
      judulWacana: 'Kasus Kontekstual: Mengapa Sumur Desa Sukamaju Mengering?',
      isiWacana:
        'Lima tahun lalu, Desa Sukamaju memiliki banyak pepohonan rindang dan tanah lapang berumput. Air sumur warga selalu jernih dan melimpah. Namun sekarang, hampir seluruh lahan hijau telah berubah menjadi bangunan ruko dan halaman yang tertutup beton rapat tanpa celah tanah. Anehnya, meskipun saat musim hujan turun hujan yang sangat deras hingga jalanan banjir, begitu memasuki musim kemarau selama dua bulan saja, sumur-sumur warga langsung mengering! Warga pun bingung: bukankah air hujan kemarin sangat banyak? Ke mana perginya air tersebut?',
      faktaData:
        'Fakta Lapangan: Tanah berhutan/berumput mampu menyerap hingga 80% air hujan ke dalam tanah, sedangkan permukaan beton kedap air hanya menyerap kurang dari 5% air hujan (sisanya langsung mengalir ke selokan menuju laut).',
    },
    alatDanBahan: [
      'Lembar Kerja Peserta Didik (LKPD)',
      'Gambar/Infografis Siklus Air atau Kartu Tahapan Siklus Air',
      'Pensil warna / spidol untuk membuat kampanye hemat air',
    ],
    langkahAktivitas: [
      'Amati cerita kasus Desa Sukamaju dan data penyerapan air di atas.',
      'Cocokkan istilah tahapan siklus air (Evaporasi, Transpirasi, Kondensasi, Presipitasi, Infiltrasi) ke dalam tabel analisis di bawah ini.',
      'Diskusikan bersama kelompokmu tahapan mana yang terganggu di Desa Sukamaju dan jawablah pertanyaan diskusi.',
    ],
    tabelPengamatan: {
      judulTabel:
        'Tabel 1. Analisis Tahapan Siklus Air dan Peristiwa yang Terjadi',
      kolom: [
        'No',
        'Nama Tahapan Siklus Air',
        'Proses yang Terjadi di Alam',
        'Apakah Terganggu oleh Betonisasi? (Ya/Tidak & Alasan)',
      ],
      barisContohIsian: [
        [
          '1',
          'Evaporasi',
          'Air laut/sungai menguap karena panas matahari',
          'Tidak secara langsung, air tetap menguap saat panas',
        ],
        ['2', 'Transpirasi', '...', '...'],
        ['3', 'Kondensasi', '...', '...'],
        ['4', 'Presipitasi', '...', '...'],
        ['5', 'Infiltrasi', '...', '...'],
      ],
    },
    pertanyaanDiskusi: [
      {
        nomor: 1,
        pertanyaan:
          'Berdasarkan wacana Desa Sukamaju, tahapan siklus air manakah yang paling terhambat ketika lahan berumput diubah menjadi lapisan beton rapat? Jelaskan alasanmu!',
        petunjukJawaban:
          'Kaitkan dengan proses meresapnya air hujan ke dalam pori-pori tanah (infiltrasi).',
      },
      {
        nomor: 2,
        pertanyaan:
          'Apa yang akan terjadi pada awan dan hujan jika seluruh pohon di hutan ditebang habis? Tahapan siklus air apa yang ikut berkurang?',
        petunjukJawaban:
          'Perhatikan peran tumbuhan dalam proses transpirasi dan penyimpanan air tanah.',
      },
      {
        nomor: 3,
        pertanyaan:
          'Jika kelompokmu diminta membantu Kepala Desa Sukamaju, sebutkan 3 solusi nyata yang bisa dilakukan warga agar air hujan dapat kembali tersimpan di dalam tanah!',
        petunjukJawaban:
          'Pikirkan tentang lubang biopori, penanaman pohon, atau paving block berpori.',
      },
      {
        nomor: 4,
        pertanyaan:
          'Buatlah 1 slogan singkat yang menarik untuk ditempel di dekat keran air sekolah agar teman-temanmu tidak membuang-buang air bersih!',
        petunjukJawaban: 'Gunakan kalimat singkat, berima, dan mudah diingat.',
      },
    ],
    panduanKesimpulan:
      'Berdasarkan kegiatan pengamatan dan diskusi hari ini, kelompok kami menyimpulkan bahwa siklus air terdiri dari tahapan ................................................................................................................... dan ketersediaan air tanah sangat bergantung pada ...................................................................................................................',
  },
  bahanAjar: {
    ringkasanMateri: [
      {
        subjudul: '1. Mengapa Air di Bumi Tidak Pernah Habis?',
        uraian:
          'Air merupakan sumber kehidupan utama bagi seluruh makhluk hidup. Jumlah air di bumi cenderung tetap dari masa ke masa karena mengalami proses perputaran tanpa henti dari permukaan bumi ke atmosfer (langit) dan kembali lagi ke bumi yang disebut Siklus Air (Siklus Hidrologi).',
      },
      {
        subjudul: '2. Lima Tahapan Utama Siklus Air',
        uraian:
          '• Evaporasi: Penguapan air laut, sungai, dan danau akibat panas sinar matahari.\n• Transpirasi: Penguapan air dari jaringan makhluk hidup, khususnya melalui mulut daun (stomata) tumbuhan.\n• Kondensasi: Uap air naik ke atmosfer yang dingin lalu mengembun berubah menjadi titik-titik air pembentuk awan.\n• Presipitasi: Titik-titik air di awan yang semakin berat jatuh kembali ke bumi sebagai hujan.\n• Infiltrasi: Air hujan yang jatuh ke daratan meresap ke dalam pori-pori tanah menjadi cadangan air tanah.',
      },
      {
        subjudul:
          '3. Dampak Kegiatan Manusia & Cara Menjaga Ketersediaan Air Bersih',
        uraian:
          'Penebangan hutan (deforestasi) dan penutupan tanah dengan semen/beton menyebabkan air hujan sulit meresap ke dalam tanah (infiltrasi terhambat). Akibatnya terjadi banjir saat musim hujan dan kekeringan sumur saat kemarau. Upaya pelestarian dapat dilakukan dengan menanam pohon, membuat lubang biopori, dan menghemat pemakaian air bersih setiap hari.',
      },
    ],
    iceBreaking: {
      namaKegiatan: 'Gerak & Lagu "Tepuk Siklus Air"',
      instruksi:
        'Guru memandu murid berdiri dan memperagakan gerakan tangan secara kompak:\n1. "Evaporasi!" -> Tangan diayun naik dari bawah ke atas sambil berdesis "Ssshhh" (uap naik).\n2. "Kondensasi!" -> Kedua tangan membentuk bulatan awan di atas kepala sambil menggigil kedinginan.\n3. "Presipitasi!" -> Jari-jari tangan digerakkan turun seperti rintik hujan "Tik-tik-tik!".\n4. "Infiltrasi!" -> Jongkok menyentuh lantai tanda air meresap ke dalam tanah!',
    },
    kerangkaSlide: [
      {
        slide: 'Slide 1 — Judul & Pertanyaan Pemantik',
        judul: 'Ke Mana Perginya Air Hujan Kemarin?',
        poinIsi: [
          'Menampilkan gambar kontras: jalanan banjir vs sumur kering saat kemarau.',
          'Pertanyaan diskusi awal: Apakah air di bumi kita bisa habis?',
        ],
      },
      {
        slide: 'Slide 2 — Pengertian Siklus Air & Peran Matahari',
        judul: 'Matahari Sang Penggerak Siklus Air',
        poinIsi: [
          'Penjelasan bagaimana energi panas matahari memicu penguapan.',
          'Perbedaan Evaporasi (perairan) dan Transpirasi (tumbuhan).',
        ],
      },
      {
        slide: 'Slide 3 — Dari Uap Menjadi Hujan',
        judul: 'Proses Kondensasi dan Presipitasi di Langit',
        poinIsi: [
          'Ilustrasi pembentukan awan akibat suhu dingin di atmosfer (Kondensasi).',
          'Proses turunnya hujan (Presipitasi) dan mengapa air hujan terasa tawar.',
        ],
      },
      {
        slide: 'Slide 4 — Rahasia Cadangan Air Tanah (Infiltrasi)',
        judul: 'Perjalanan Air di Bawah Kaki Kita',
        poinIsi: [
          'Perbandingan tanah berumput/hutan vs tanah tertutup beton.',
          'Pentingnya akar pohon dan biopori untuk menyimpan air sumur.',
        ],
      },
      {
        slide: 'Slide 5 — Instruksi Diskusi Kelompok (LKPD)',
        judul: 'Misi Detektif Siklus Air: Kasus Desa Sukamaju',
        poinIsi: [
          'Pembagian kelompok belajar & panduan singkat mengisi LKPD.',
          'Timer waktu diskusi kelompok (20 Menit).',
        ],
      },
      {
        slide: 'Slide 6 — Refleksi & Komitmen Pahlawan Air',
        judul: 'Aksi Nyata Hemat Air di Sekolah & Rumah',
        poinIsi: [
          '3 langkah mudah menghemat air setiap hari.',
          'Sesi refleksi perasaan dan kesimpulan belajar hari ini.',
        ],
      },
    ],
  },
  asesmen: {
    asesmenDiagnostik: {
      nonKognitif: [
        'Bagaimana perasaanmu pagi ini saat berangkat ke sekolah? (Pilih ekspresi wajah senang/biasa/lelah)',
        'Apakah kamu lebih suka belajar melalui gambar berwarna, mendengarkan cerita, atau menyusun kartu permainan?',
      ],
      kognitifAwal: [
        'Saat ibu menjemur pakaian basah di bawah terik matahari, ke mana perginya air yang ada di pakaian tersebut?',
        'Menurutmu, dari mana asalnya titik-titik air hujan yang turun dari langit?',
      ],
      tindakLanjutDiagnostik:
        'Murid yang sudah memahami konsep penguapan dijadikan tutor sebaya dalam kelompok, sedangkan murid yang masih bingung diberikan pendampingan visual lebih intensif oleh guru.',
    },
    rubrikKinerja: {
      judulRubrik: 'Rubrik Penilaian Kinerja Kelompok & Diskusi LKPD',
      kriteria: [
        {
          aspek: 'Ketepatan Analisis Tahapan Siklus Air',
          sangatBaik:
            'Mampu mengurutkan dan menjelaskan kelima tahapan siklus air dengan sangat tepat, lengkap, dan menggunakan konsep ilmiah yang benar.',
          baik: 'Mampu mengurutkan dan menjelaskan 4 dari 5 tahapan siklus air dengan tepat.',
          cukup:
            'Mampu mengurutkan dan menjelaskan 2-3 tahapan siklus air, namun masih ada kekeliruan istilah.',
          perluBimbingan:
            'Belum mampu mengurutkan tahapan siklus air tanpa bimbingan penuh dari guru.',
        },
        {
          aspek: 'Penalaran Kritis Studi Kasus Lingkungan',
          sangatBaik:
            'Mampu mengaitkan masalah betonisasi lahan dengan proses infiltrasi secara logis serta memberikan minimal 3 solusi yang sangat aplikatif.',
          baik: 'Mampu mengaitkan masalah dengan proses infiltrasi dan memberikan 2 solusi yang relevan.',
          cukup:
            'Mampu menyebutkan penyebab kekeringan secara umum namun belum mengaitkan dengan tahapan siklus air.',
          perluBimbingan:
            'Belum mampu menjawab pertanyaan studi kasus dan memerlukan arahan bertahap.',
        },
        {
          aspek: 'Gotong Royong & Kolaborasi Kelompok',
          sangatBaik:
            'Seluruh anggota aktif berbagi tugas, saling menghargai pendapat, dan menyelesaikan LKPD tepat waktu.',
          baik: 'Sebagian besar anggota aktif berdiskusi dan bekerja sama dengan baik.',
          cukup:
            'Hanya 1-2 anggota yang dominan mengerjakan LKPD, anggota lain kurang terlibat aktif.',
          perluBimbingan:
            'Kelompok belum menunjukkan kerja sama dan perlu dimediasi oleh guru.',
        },
        {
          aspek: 'Kreativitas Slogan & Presentasi',
          sangatBaik:
            'Slogan hemat air sangat orisinal, komunikatif, dan dipresentasikan dengan percaya diri serta suara jelas.',
          baik: 'Slogan sesuai tema dan dipresentasikan dengan cukup jelas di depan kelas.',
          cukup:
            'Slogan sudah dibuat namun masih meniru contoh umum dan presentasi kurang terdengar.',
          perluBimbingan:
            'Belum menyelesaikan pembuatan slogan dan belum berani tampil presentasi.',
        },
      ],
    },
    kisiKisiSoal: [
      {
        nomor: 1,
        tujuanPembelajaran:
          'Mengurutkan tahapan siklus air (evaporasi, transpirasi, kondensasi, presipitasi, dan infiltrasi) dengan benar.',
        indikatorSoal:
          'Disajikan ilustrasi berkurangnya air kolam dan penguapan pada daun pohon, murid dapat menentukan istilah proses evaporasi dan transpirasi secara tepat.',
        levelKognitif: 'C3 (Aplikasi)',
        bentukSoal: 'Pilihan Ganda',
        nomorSoal: 'PG No. 1',
      },
      {
        nomor: 2,
        tujuanPembelajaran: 'Mengurutkan tahapan siklus air dengan benar.',
        indikatorSoal:
          'Disajikan fenomena perubahan suhu di atmosfer, murid dapat menganalisis dampak apabila proses kondensasi terhambat.',
        levelKognitif: 'C4 (Analisis)',
        bentukSoal: 'Pilihan Ganda',
        nomorSoal: 'PG No. 2',
      },
      {
        nomor: 3,
        tujuanPembelajaran:
          'Menganalisis dampak kegiatan manusia yang mengganggu tahapan infiltrasi air.',
        indikatorSoal:
          'Disajikan kasus pembangunan perumahan yang menutup lahan dengan beton, murid dapat menganalisis dampaknya terhadap laju infiltrasi dan banjir.',
        levelKognitif: 'C4 (Analisis)',
        bentukSoal: 'Pilihan Ganda',
        nomorSoal: 'PG No. 3',
      },
      {
        nomor: 4,
        tujuanPembelajaran:
          'Merancang upaya menjaga ketersediaan air bersih di sekolah dan rumah.',
        indikatorSoal:
          'Disajikan beberapa pilihan program sekolah, murid dapat mengevaluasi program yang paling efektif mendukung infiltrasi air tanah.',
        levelKognitif: 'C5 (Evaluasi)',
        bentukSoal: 'Pilihan Ganda',
        nomorSoal: 'PG No. 4',
      },
      {
        nomor: 5,
        tujuanPembelajaran: 'Mengurutkan tahapan siklus air dengan benar.',
        indikatorSoal:
          'Disajikan fakta bahwa air hujan terasa tawar meskipun berasal dari air laut yang asin, murid dapat menganalisis peristiwa yang terjadi saat evaporasi.',
        levelKognitif: 'C4 (Analisis)',
        bentukSoal: 'Pilihan Ganda',
        nomorSoal: 'PG No. 5',
      },
      {
        nomor: 6,
        tujuanPembelajaran:
          'Mengurutkan tahapan siklus air serta menganalisis dampak kerusakan daerah resapan.',
        indikatorSoal:
          'Murid dapat menguraikan alur siklus air secara berurutan, menganalisis penyebab bencana banjir-kekeringan, serta merumuskan 3 aksi hemat air.',
        levelKognitif: 'C3 - C5 (HOTS)',
        bentukSoal: 'Uraian / Esai',
        nomorSoal: 'Uraian 1 - 3',
      },
    ],
    soalPilihanGanda: [
      {
        nomor: 1,
        levelKognitif: 'C3 (Aplikasi)',
        pertanyaan:
          'Pada siang hari yang terik, Rina melihat permukaan air di kolam ikan sekolah tampak berkurang sedikit demi sedikit. Di saat yang sama, pohon mangga di tepi kolam juga mengeluarkan uap air melalui daunnya. Kedua proses perubahan wujud air menjadi uap air tersebut secara berturut-turut dinamakan ....',
        opsi: [
          'A. Kondensasi dan Presipitasi',
          'B. Evaporasi dan Transpirasi',
          'C. Infiltrasi dan Evaporasi',
          'D. Transpirasi dan Kondensasi',
        ],
        kunci: 'B',
        pembahasan:
          'Penguapan air dari permukaan perairan (kolam, sungai, laut) disebut Evaporasi, sedangkan penguapan air dari jaringan tumbuhan (melalui stomata daun) disebut Transpirasi.',
      },
      {
        nomor: 2,
        levelKognitif: 'C4 (Analisis)',
        pertanyaan:
          'Perhatikan fenomena berikut: Uap air yang naik tinggi ke atmosfer akan mengalami penurunan suhu yang drastis sehingga berubah menjadi titik-titik air halus yang berkumpul membentuk awan mendung. Apabila suhu di atmosfer tidak cukup dingin, dampak yang paling mungkin terjadi pada siklus air adalah ....',
        opsi: [
          'A. Proses infiltrasi di dalam tanah akan berlangsung lebih cepat',
          'B. Proses kondensasi terhambat sehingga pembentukan awan hujan berkurang',
          'C. Air laut akan berhenti mengalami evaporasi meskipun matahari bersinar',
          'D. Hujan es akan turun secara terus-menerus di permukaan bumi',
        ],
        kunci: 'B',
        pembahasan:
          'Perubahan uap air menjadi titik-titik air (awan) disebut kondensasi yang membutuhkan pendinginan suhu di atmosfer. Jika suhu tidak cukup dingin, proses kondensasi terhambat sehingga awan hujan sulit terbentuk.',
      },
      {
        nomor: 3,
        levelKognitif: 'C4 (Analisis)',
        pertanyaan:
          'Sebuah kawasan perumahan baru dibangun dengan menebang habis pepohonan di bukit dan menutup seluruh halaman rumah menggunakan semen beton tanpa menyisakan tanah terbuka. Dampak langsung kondisi tersebut terhadap tahapan siklus air saat hujan deras turun adalah ....',
        opsi: [
          'A. Laju infiltrasi menurun drastis sehingga limpasan air permukaan meningkat dan memicu banjir',
          'B. Laju presipitasi berhenti total sehingga perumahan tidak pernah mengalami hujan lagi',
          'C. Laju infiltrasi meningkat tajam sehingga sumur warga langsung penuh dalam sekejap',
          'D. Proses kondensasi berpindah dari langit ke permukaan jalan berbeton',
        ],
        kunci: 'A',
        pembahasan:
          'Penutupan permukaan tanah dengan semen/beton menghalangi air hujan meresap ke dalam pori-pori tanah (infiltrasi menurun), akibatnya air mengalir di permukaan tanah (run-off) secara berlebihan dan memicu banjir.',
      },
      {
        nomor: 4,
        levelKognitif: 'C5 (Evaluasi)',
        pertanyaan:
          'SD Nusantara ingin menjaga cadangan air tanah di lingkungan sekolah agar sumur sekolah tidak kering saat musim kemarau. Manakah program sekolah di bawah ini yang PALING EFEKTIF untuk mendukung tahapan infiltrasi air?',
        opsi: [
          'A. Mengecat seluruh tembok sekolah dengan warna biru cerah',
          'B. Mengaspal seluruh lapangan rumput agar tidak becek saat hujan',
          'C. Membuat lubang resapan biopori dan menanam pohon peneduh di area taman sekolah',
          'D. Menampung air hujan di dalam ember plastik tertutup lalu membuangnya ke selokan aspal',
        ],
        kunci: 'C',
        pembahasan:
          'Lubang resapan biopori dan akar pepohonan membantu membuka pori-pori tanah sehingga air hujan lebih mudah meresap ke dalam tanah (infiltrasi) untuk menambah cadangan air tanah.',
      },
      {
        nomor: 5,
        levelKognitif: 'C4 (Analisis)',
        pertanyaan:
          'Meskipun air laut rasanya asin, air hujan yang turun di daratan rasanya tawar. Hal ini membuktikan bahwa pada saat tahapan evaporasi terjadi ....',
        opsi: [
          'A. Garam laut ikut menguap ke awan namun hilang tertiup angin kencang',
          'B. Hanya molekul air murni yang menguap menjadi gas, sedangkan garam tertinggal di laut',
          'C. Awan memiliki saringan khusus untuk membuang rasa asin kembali ke sungai',
          'D. Air hujan berasal dari air sungai yang tawar saja, bukan dari air laut',
        ],
        kunci: 'B',
        pembahasan:
          'Saat evaporasi berlangsung karena panas matahari, hanya molekul air (H2O) yang berubah wujud menjadi uap air (gas), sementara mineral dan garam laut memiliki titik didih tinggi sehingga tetap tertinggal di laut.',
      },
    ],
    soalUraian: [
      {
        nomor: 1,
        levelKognitif: 'C3 (Aplikasi)',
        pertanyaan:
          'Jelaskan secara berurutan perjalanan air mulai dari air laut yang terkena panas matahari hingga akhirnya kembali lagi menjadi air tanah di daratan! Gunakan istilah ilmiah siklus air yang tepat.',
        kunciDanPedoman:
          'Air laut menguap karena panas matahari (Evaporasi) -> Uap air naik ke atmosfer dan mendingin menjadi titik-titik air/awan (Kondensasi) -> Titik-titik air di awan menjadi jenuh dan jatuh sebagai hujan (Presipitasi) -> Air hujan yang jatuh ke tanah meresap ke dalam pori-pori tanah menjadi air tanah (Infiltrasi).',
        skorMaksimal: 20,
      },
      {
        nomor: 2,
        levelKognitif: 'C4 (Analisis)',
        pertanyaan:
          'Mengapa daerah yang hutannya gundul sering mengalami bencana ganda, yaitu banjir bandang di musim hujan dan kekeringan sumur di musim kemarau? Jelaskan kaitannya dengan siklus air!',
        kunciDanPedoman:
          'Karena tanpa akar pepohonan dan humus hutan, proses infiltrasi (peresapan air ke tanah) terganggu. Saat musim hujan, air tidak meresap melainkan langsung mengalir deras di permukaan menjadi banjir. Karena tidak ada air yang tersimpan di dalam tanah saat hujan, maka ketika musim kemarau tiba cadangan air tanah kosong sehingga sumur mengering.',
        skorMaksimal: 20,
      },
      {
        nomor: 3,
        levelKognitif: 'C5 (Evaluasi / Kreasi)',
        pertanyaan:
          'Jumlah air di bumi sebenarnya tetap karena adanya siklus air, namun mengapa kita tetap harus menghemat penggunaan air bersih di rumah? Tuliskan alasanmu beserta 3 contoh tindakan hemat air yang bisa kamu lakukan setiap hari!',
        kunciDanPedoman:
          'Alasan: Karena meskipun total air tetap, jumlah air bersih yang siap pakai dan tidak tercemar sangat terbatas serta membutuhkan proses alami yang lama untuk tersaring kembali ke tanah. Contoh tindakan (pilih 3): (1) Mematikan keran saat sedang menyabuni tangan/menggosok gigi, (2) Menggunakan air bekas cucian beras/sayur untuk menyiram tanaman, (3) Mandi secukupnya dan tidak membiarkan air meluber.',
        skorMaksimal: 20,
      },
    ],
    pedomanPenskoran: {
      rumusNilai:
        'Nilai Akhir = ((Skor Pilihan Ganda (Maks 40) + Skor Uraian (Maks 60)) / 100) x 100. Setiap soal PG bernilai 8 poin (5 x 8 = 40), dan setiap soal Uraian bernilai maksimal 20 poin (3 x 20 = 60).',
      kktpInterval: [
        '0 - 60%   : Belum Mencapai KKTP (Perlu bimbingan remedial pada seluruh indikator)',
        '61 - 74%  : Hampir Mencapai KKTP (Remedial pada indikator yang belum tuntas)',
        '75 - 88%  : Sudah Mencapai KKTP (Tuntas, dapat melanjutkan ke materi berikutnya)',
        '89 - 100% : Melampaui KKTP (Tuntas Sangat Baik, diberikan tantangan pengayaan)',
      ],
    },
  },
};

// ==========================================
// PILIHAN DROPDOWN & CHIP KONFIGURASI
// ==========================================
const FASE_OPTIONS = [
  'Fase A (Kelas 1 - 2 SD/MI)',
  'Fase B (Kelas 3 - 4 SD/MI)',
  'Fase C (Kelas 5 - 6 SD/MI)',
  'Fase D (Kelas 7 - 9 SMP/MTs)',
  'Fase E (Kelas 10 SMA/MA/SMK)',
  'Fase F (Kelas 11 - 12 SMA/MA/SMK)',
];

const MODEL_PEMBELAJARAN_OPTIONS = [
  'Otomatis Direkomendasikan AI (Pembelajaran Mendalam)',
  'Problem Based Learning (PBL) — Pembelajaran Mendalam',
  'Project Based Learning (PjBL) — Pembelajaran Mendalam',
  'Discovery Learning — Pembelajaran Mendalam',
  'Inquiry Learning — Pembelajaran Mendalam',
  ' Pembelajaran Berdiferensiasi & Kolaboratif',
];

const PROFIL_LULUSAN_OPTIONS = [
  'Keimanan & Ketakwaan',
  'Kewargaan',
  'Penalaran Kritis',
  'Kreativitas',
  'Kolaborasi',
  'Kemandirian',
  'Kesehatan',
  'Komunikasi',
];

const KOMPOSISI_ASESMEN_OPTIONS = [
  'Asesmen Diagnostik Awal',
  'Rubrik Kinerja / Observasi',
  'Pilihan Ganda HOTS + Kunci Jawaban',
  'Uraian / Esai + Pedoman Penskoran',
];

const MAPEL_SUGGESTIONS = [
  'IPAS',
  'Matematika',
  'Bahasa Indonesia',
  'Pendidikan Pancasila',
  'Bahasa Inggris',
  'Informatika / Koding & KA',
  'Biologi',
  'Fisika',
  'Kimia',
  'IPS / Sejarah',
  'Seni Budaya',
  'PJOK',
];

// ==========================================
// MESIN GENERATOR KONTEKSTUAL KURIKULUM NASIONAL (PEMBELAJARAN MENDALAM)
// (Menyusun Modul Ajar Deep Learning, LKPD, Bahan Ajar/Slide & Asesmen + Kisi-Kisi secara dinamis)
// ==========================================
const buildSmartContextualPackage = (formData) => {
  const mapel = (formData.mataPelajaran || 'Mata Pelajaran').trim();
  const kelas = (
    formData.kelasSpesifik ||
    formData.jenjangFase ||
    'Kelas Reguler'
  ).trim();
  const fase = formData.jenjangFase || 'Fase Kurikulum Nasional';
  const guru = (formData.namaGuru || 'Guru Mata Pelajaran').trim();
  const nipGuru = (formData.nipGuru || '').trim();
  const kepsek = (formData.namaKepalaSekolah || '').trim();
  const nipKepsek = (formData.nipKepalaSekolah || '').trim();
  const kota = (formData.kotaPengesahan || '').trim();
  const sekolah = (formData.namaSekolah || 'Satuan Pendidikan').trim();
  const alokasi = (
    formData.alokasiWaktu || '2 JP x 45 Menit (1 Pertemuan)'
  ).trim();
  const cpText = formData.capaianPembelajaran.trim();
  const tpRaw = formData.tujuanPembelajaran.trim();
  const karakteristik =
    (formData.karakteristikMurid || '').trim() ||
    'Murid memiliki keragaman kesiapan belajar dan gaya belajar (visual, auditori, dan kinestetik) serta antusias pada pembelajaran mendalam berbasis aktivitas nyata.';
  const catatan =
    (formData.catatanKhusus || '').trim() ||
    'Terapkan prinsip Pembelajaran Mendalam (Berkesadaran, Bermakna, dan Menggembirakan) serta berikan scaffolding bertahap pada LKPD agar seluruh murid mencapai tujuan pembelajaran.';

  // Ekstraksi daftar Tujuan Pembelajaran (TP) dari input baris/nomor guru
  const tpLines = tpRaw
    .split(/\n+/)
    .map((line) => line.replace(/^\s*(\d+[\.\)]|\-|\•)\s*/, '').trim())
    .filter(Boolean);

  const tujuanList =
    tpLines.length > 0
      ? tpLines
      : [
          `(Memahami) Melalui pengamatan stimulus dan diskusi kelompok, murid mampu memahami konsep esensial ${
            formData.topikMateri || mapel
          } secara berkesadaran.`,
          `(Mengaplikasi) Melalui kegiatan penyelidikan pada LKPD, murid mampu menganalisis dan mengaplikasikan konsep ${
            formData.topikMateri || mapel
          } untuk memecahkan permasalahan kontekstual.`,
          `(Merefleksi) Murid mampu menyajikan hasil solusi terkait ${
            formData.topikMateri || mapel
          } serta merefleksikan maknanya bagi kehidupan sehari-hari.`,
        ];

  // Ekstraksi Topik otomatis bila kolom topik kosong
  const topik =
    (formData.topikMateri || '').trim() ||
    (tujuanList[0] ? tujuanList[0].slice(0, 65) : `Materi Esensial ${mapel}`);

  // Penentuan Model Pembelajaran Spesifik
  let modelPilihan = formData.modelPembelajaran;
  if (!modelPilihan || modelPilihan.includes('Otomatis Direkomendasikan AI')) {
    const lowerTp = (cpText + ' ' + tpRaw).toLowerCase();
    if (
      lowerTp.includes('proyek') ||
      lowerTp.includes('produk') ||
      lowerTp.includes('merancang') ||
      lowerTp.includes('karya')
    ) {
      modelPilihan = 'Project Based Learning (PjBL) — Pembelajaran Mendalam';
    } else if (
      lowerTp.includes('eksperimen') ||
      lowerTp.includes('percobaan') ||
      lowerTp.includes('hipotesis')
    ) {
      modelPilihan = 'Inquiry Learning — Pembelajaran Mendalam';
    } else if (
      lowerTp.includes('pola') ||
      lowerTp.includes('menemukan') ||
      lowerTp.includes('konsep')
    ) {
      modelPilihan = 'Discovery Learning — Pembelajaran Mendalam';
    } else {
      modelPilihan = 'Problem Based Learning (PBL) — Pembelajaran Mendalam';
    }
  }

  // Penjabaran 8 Dimensi Profil Lulusan secara kontekstual
  const selectedDimensi = formData.profilLulusan ||
    formData.profilPancasila || [
      'Penalaran Kritis',
      'Kolaborasi',
      'Komunikasi',
    ];

  const profilLulusanDescriptions = {
    'Keimanan & Ketakwaan': `Keimanan dan Ketakwaan terhadap Tuhan YME: Mengawali dan mengakhiri pembelajaran dengan doa, bersikap jujur, serta mensyukuri keteraturan ilmu ${mapel} pada materi ${topik} sebagai karunia Tuhan.`,
    Kewargaan: `Kewargaan: Menunjukkan kepedulian sosial, tanggung jawab terhadap lingkungan sekitar, serta menghargai keberagaman pendapat saat mengkaji isu kontekstual tentang ${topik}.`,
    'Penalaran Kritis': `Penalaran Kritis: Menganalisis informasi secara logis, mengevaluasi bukti/data pengamatan, dan memecahkan permasalahan kontekstual pada materi ${topik} secara objektif.`,
    Kreativitas: `Kreativitas: Menghasilkan gagasan orisinal, inovatif, dan alternatif solusi yang berdampak saat menyelesaikan tantangan LKPD tentang ${topik}.`,
    Kolaborasi: `Kolaborasi: Bekerja sama secara aktif, gotong royong, berbagi peran secara adil, dan saling menghargai dalam kelompok selama penyelidikan materi ${topik}.`,
    Kemandirian: `Kemandirian: Memiliki kesadaran diri (regulasi diri), inisiatif, dan tanggung jawab atas proses serta hasil belajar dalam mengeksplorasi ${topik}.`,
    Kesehatan: `Kesehatan: Menjaga kebugaran fisik, ergonomi belajar, serta keseimbangan kesehatan mental (well-being) melalui suasana kelas yang aman, nyaman, dan menggembirakan.`,
    Komunikasi: `Komunikasi: Menyampaikan gagasan, argumen hasil analisis, dan simpulan terkait ${topik} secara efektif, jelas, santun, dan persuasif baik lisan maupun tulisan.`,
  };

  const profilList = selectedDimensi.map(
    (dim) =>
      profilLulusanDescriptions[dim] ||
      `${dim}: Menginternalisasi kompetensi ${dim} secara utuh selama pengalaman belajar ${topik}.`
  );

  // Turunkan Indikator Ketercapaian Tujuan Pembelajaran (IKTP/KKTP) berbasis 3 Tahap Pengalaman Belajar
  const iktpList = [];
  const tahapLabels = [
    'Tahap Memahami',
    'Tahap Mengaplikasi',
    'Tahap Merefleksi',
  ];
  tujuanList.forEach((tp, idx) => {
    const labelTahap = tahapLabels[Math.min(idx, tahapLabels.length - 1)];
    iktpList.push(
      `[${labelTahap}] Mengonstruksi pemahaman dan mengidentifikasi konsep kunci terkait: "${tp}"`
    );
    iktpList.push(
      `[${labelTahap}] Menerapkan analisis pemecahan masalah dan refleksi pada LKPD yang selaras dengan tujuan pembelajaran ke-${
        idx + 1
      }.`
    );
  });

  // Sintaks Kegiatan Inti berdasarkan Model Pembelajaran + 3 Pengalaman Belajar Mendalam (Memahami, Mengaplikasi, Merefleksi)
  let sintaksInti = [];
  if (modelPilihan.includes('PjBL') || modelPilihan.includes('Project')) {
    sintaksInti = [
      {
        pengalamanBelajar:
          'Pengalaman Belajar 1: MEMAHAMI (Berkesadaran & Bermakna)',
        sintaks: 'Tahap 1: Penentuan Pertanyaan Mendasar (Essential Question)',
        durasi: '10 Menit',
        aktivitasGuru: `Guru menayangkan stimulus kontekstual terkait "${topik}" dan mengajukan pertanyaan mendasar yang menantang murid membangun pemahaman konsep serta merancang solusi/karya nyata.`,
        aktivitasSiswa: `Murid mengamati fenomena "${topik}" dengan penuh kesadaran, mengonstruksi pengetahuan esensial, dan merumuskan ide awal proyek yang relevan.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 1: MEMAHAMI (Berkesadaran & Kolaboratif)',
        sintaks: 'Tahap 2: Mendesain Perencanaan Proyek & Pengorganisasian',
        durasi: '15 Menit',
        aktivitasGuru: `Guru membagi murid ke dalam kelompok heterogen, membagikan LKPD Proyek "${topik}", dan memfasilitasi penyusunan rancangan karya (${catatan}).`,
        aktivitasSiswa: `Murid berkolaborasi membagi peran, menentukan sumber informasi, dan merancang kerangka penyelesaian proyek pada LKPD.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 2: MENGAPLIKASI (Bermakna & Menggembirakan)',
        sintaks: 'Tahap 3: Menyusun Jadwal & Memonitor Kemajuan Proyek',
        durasi: '20 Menit',
        aktivitasGuru: `Guru berkeliling memantau proses aplikasi konsep dan pengerjaan proyek setiap kelompok, memberikan scaffolding, serta melakukan asesmen formatif observasi kinerja.`,
        aktivitasSiswa: `Murid mengaplikasikan pengetahuan yang telah dipahami untuk mengolah data, menganalisis konsep ${topik} pada LKPD, dan menyusun produk/solusi kelompok secara kreatif.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 2: MENGAPLIKASI (Menggembirakan & Komunikatif)',
        sintaks: 'Tahap 4: Menguji Hasil & Presentasi Karya',
        durasi: '15 Menit',
        aktivitasGuru: `Guru memfasilitasi sesi gelar karya/presentasi antar kelompok dalam suasana yang memuliakan dan memandu umpan balik konstruktif.`,
        aktivitasSiswa: `Setiap kelompok mengomunikasikan hasil rancangan/analisis "${topik}" dengan percaya diri dan menanggapi masukan dari kelompok lain.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 3: MEREFLEKSI (Berkesadaran & Bermakna)',
        sintaks: 'Tahap 5: Evaluasi Pengalaman Belajar & Refleksi Mendalam',
        durasi: '10 Menit',
        aktivitasGuru: `Guru memberikan penguatan konsep esensial ${mapel} tentang ${topik}, meluruskan miskonsepsi, dan memandu murid memaknai proses belajarnya.`,
        aktivitasSiswa: `Murid melakukan refleksi mendalam atas keberhasilan dan tantangan pembuatan proyek serta menyimpulkan rencana tindak lanjut di kehidupan nyata.`,
      },
    ];
  } else if (modelPilihan.includes('Discovery')) {
    sintaksInti = [
      {
        pengalamanBelajar:
          'Pengalaman Belajar 1: MEMAHAMI (Berkesadaran & Bermakna)',
        sintaks: 'Tahap 1: Pemberian Rangsangan (Stimulation)',
        durasi: '10 Menit',
        aktivitasGuru: `Guru menyajikan fenomena/kasus kontekstual mengenai "${topik}" yang dekat dengan keseharian murid (${karakteristik}).`,
        aktivitasSiswa: `Murid mengamati stimulus secara berkesadaran dan mengonstruksi pemahaman awal mengenai fakta-fakta penting terkait ${topik}.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 1: MEMAHAMI (Berkesadaran & Penalaran Kritis)',
        sintaks:
          'Tahap 2: Pernyataan / Identifikasi Masalah (Problem Statement)',
        durasi: '10 Menit',
        aktivitasGuru: `Guru membagikan LKPD Eksplorasi "${topik}" dan membimbing kelompok merumuskan pertanyaan penyelidikan atau hipotesis awal.`,
        aktivitasSiswa: `Murid berdiskusi mengidentifikasi masalah utama dan menuliskan dugaan awal pada lembar kerja.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 2: MENGAPLIKASI (Bermakna & Kolaboratif)',
        sintaks:
          'Tahap 3: Pengumpulan & Pengolahan Data (Data Collection & Processing)',
        durasi: '20 Menit',
        aktivitasGuru: `Guru memfasilitasi penyelidikan kelompok dengan menyediakan sumber belajar berjenjang (${catatan}) serta memantau kolaborasi siswa.`,
        aktivitasSiswa: `Murid mengaplikasikan konsep untuk mengumpulkan informasi, melengkapi tabel analisis pada LKPD, dan mengolah data terkait ${topik}.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 2: MENGAPLIKASI (Menggembirakan & Komunikatif)',
        sintaks: 'Tahap 4: Pembuktian (Verification)',
        durasi: '10 Menit',
        aktivitasGuru: `Guru meminta perwakilan kelompok mempresentasikan temuannya dan membandingkan hasil olah data dengan konsep ilmiah ${mapel}.`,
        aktivitasSiswa: `Murid memverifikasi dan mengomunikasikan hasil diskusi kelompoknya melalui presentasi kelas yang interaktif.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 3: MEREFLEKSI (Berkesadaran & Bermakna)',
        sintaks:
          'Tahap 5: Menarik Kesimpulan & Refleksi (Generalization & Reflection)',
        durasi: '10 Menit',
        aktivitasGuru: `Guru memberikan konfirmasi dan penguatan terhadap prinsip/konsep "${topik}" serta memandu refleksi metakognitif siswa.`,
        aktivitasSiswa: `Murid merumuskan kesimpulan akhir dan merefleksikan bagaimana pemahaman "${topik}" dapat diterapkan dalam keseharian.`,
      },
    ];
  } else {
    // Default / PBL / Inquiry / Pembelajaran Mendalam
    sintaksInti = [
      {
        pengalamanBelajar:
          'Pengalaman Belajar 1: MEMAHAMI (Berkesadaran & Bermakna)',
        sintaks: 'Tahap 1: Orientasi Murid pada Masalah Kontekstual',
        durasi: '10 Menit',
        aktivitasGuru: `Guru menampilkan studi kasus/fenomena nyata terkait "${topik}" dalam mata pelajaran ${mapel}, lalu memantik kesadaran dan rasa ingin tahu peserta didik.`,
        aktivitasSiswa: `Murid mengamati permasalahan kontekstual secara berkesadaran, mengonstruksi pengetahuan dasar, dan mengemukakan tanggapan awal.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 1: MEMAHAMI (Berkesadaran & Menggembirakan)',
        sintaks: 'Tahap 2: Mengorganisasikan Murid untuk Belajar',
        durasi: '10 Menit',
        aktivitasGuru: `Guru mengelompokkan murid (4-5 orang), membagikan LKPD "${topik}", serta mengakomodasi kebutuhan belajar murid (${catatan}).`,
        aktivitasSiswa: `Murid berkolaborasi dalam kelompok, mempelajari petunjuk LKPD, dan membagi peran penyelidikan dengan antusias.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 2: MENGAPLIKASI (Bermakna & Kolaboratif)',
        sintaks: 'Tahap 3: Membimbing Penyelidikan Individu maupun Kelompok',
        durasi: '20 Menit',
        aktivitasGuru: `Guru berkeliling mendampingi diskusi kelompok, memberikan pertanyaan pemicu (scaffolding) untuk memperdalam aplikasi konsep, dan melakukan asesmen formatif proses.`,
        aktivitasSiswa: `Murid mengaplikasikan pemahaman konsep "${topik}" untuk menganalisis kasus, mengisi tabel pengamatan pada LKPD, dan merumuskan solusi nyata.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 2: MENGAPLIKASI (Menggembirakan & Komunikatif)',
        sintaks: 'Tahap 4: Mengembangkan dan Menyajikan Hasil Karya',
        durasi: '10 Menit',
        aktivitasGuru: `Guru memandu jalannya presentasi kelompok dalam suasana yang positif/memuliakan dan mendorong murid lain memberikan apresiasi maupun tanggapan kritis.`,
        aktivitasSiswa: `Perwakilan kelompok mengomunikasikan hasil analisis LKPD di depan kelas secara sistematis dan santun.`,
      },
      {
        pengalamanBelajar:
          'Pengalaman Belajar 3: MEREFLEKSI (Berkesadaran & Bermakna)',
        sintaks:
          'Tahap 5: Menganalisis, Mengevaluasi & Merefleksi Proses Belajar',
        durasi: '10 Menit',
        aktivitasGuru: `Guru memberikan umpan balik penguatan konsep inti mengenai ${topik} dan memandu murid melakukan refleksi diri (regulasi diri).`,
        aktivitasSiswa: `Murid mengevaluasi proses pemecahan masalah kelompoknya, menyempurnakan catatan LKPD, dan merefleksikan nilai/makna pembelajaran hari ini.`,
      },
    ];
  }

  // Bangun Soal Pilihan Ganda HOTS sejumlah formData.jumlahPG
  const countPG = Number(formData.jumlahPG) || 5;
  const pgTemplates = [
    {
      level: 'C4 (Analisis)',
      indikatorSoal: `Disajikan kasus kontekstual penerapan "${topik}", murid dapat menganalisis faktor utama yang menentukan keberhasilan proses sesuai tujuan pembelajaran.`,
      stem: `Perhatikan kasus kontekstual berikut! Dalam penerapan materi "${topik}" pada mata pelajaran ${mapel}, ditemukan fenomena perubahan variabel di lingkungan nyata yang menuntut pengambilan keputusan secara tepat. Berdasarkan prinsip yang dipelajari pada tujuan pembelajaran "${tujuanList[0]}", faktor utama yang paling memengaruhi keberhasilan proses tersebut adalah ....`,
      opsi: [
        `A. Mengabaikan variabel lingkungan dan hanya mengandalkan hafalan definisi dasar tanpa analisis data`,
        `B. Menganalisis keterkaitan antar komponen pada "${topik}" secara sistematis dan berbasis bukti nyata`,
        `C. Mengubah hasil pengamatan agar terlihat seragam tanpa memperhatikan prosedur ilmiah`,
        `D. Menghindari penggunaan data faktual karena dapat mempersulit penarikan kesimpulan sementara`,
      ],
      kunci: 'B',
      pembahasan: `Dalam mempelajari ${topik}, pendekatan analitis berbasis bukti dan pemahaman keterkaitan antar komponen sangat diperlukan agar selaras dengan capaian pembelajaran.`,
    },
    {
      level: 'C4 (Analisis)',
      indikatorSoal: `Disajikan situasi pengamatan lapangan tentang "${topik}" dengan data yang berbeda dari dugaan awal, murid dapat menentukan langkah pemecahan masalah secara objektif.`,
      stem: `Sekelompok murid ${kelas} sedang melakukan pengamatan terkait "${topik}". Mereka menemukan bahwa hasil pengamatan di lapangan menunjukkan pola yang berbeda dari dugaan awal. Langkah pemecahan masalah yang paling tepat dilakukan oleh kelompok tersebut adalah ....`,
      opsi: [
        `A. Memeriksa kembali kesesuaian variabel, prosedur kerja, dan menganalisis penyebab perbedaan data secara objektif`,
        `B. Menghapus seluruh data lapangan dan menggantinya dengan angka perkiraan sendiri`,
        `C. Menghentikan diskusi kelompok karena data tidak sama dengan kelompok lain`,
        `D. Menyimpulkan bahwa konsep ${mapel} tidak dapat diterapkan pada kehidupan sehari-hari`,
      ],
      kunci: 'A',
      pembahasan: `Sikap bernalar kritis dan ilmiah dalam mengkaji ${topik} ditunjukkan dengan mengevaluasi prosedur serta menganalisis faktor penyebab perbedaan data secara objektif.`,
    },
    {
      level: 'C5 (Evaluasi)',
      indikatorSoal: `Disajikan kasus kolaborasi terkait "${topik}", murid dapat memilih tindakan yang mencerminkan 8 Dimensi Profil Lulusan.`,
      stem: `Untuk meningkatkan efektivitas penerapan "${topik}" di lingkungan sekitar melalui Pembelajaran Mendalam, tindakan kolaboratif yang paling mencerminkan 8 Dimensi Profil Lulusan (${selectedDimensi.join(
        ', '
      )}) adalah ....`,
      opsi: [
        `A. Bekerja sendiri-sendiri agar tidak terjadi perbedaan pendapat antar anggota kelompok`,
        `B. Berkolaborasi secara kritis, kreatif, dan komunikatif dalam merumuskan solusi berbasis konsep "${topik}" yang bermanfaat bagi masyarakat`,
        `C. Menolak masukan dari teman kelompok yang memiliki gaya belajar berbeda`,
        `D. Mengutamakan kecepatan selesai tanpa memeriksa ketepatan konsep`,
      ],
      kunci: 'B',
      pembahasan: `Kolaborasi kritis, kreativitas, dan komunikasi efektif dalam merumuskan solusi nyata merupakan wujud integrasi kompetensi ${mapel} dan 8 Dimensi Profil Lulusan.`,
    },
    {
      level: 'C3 (Aplikasi)',
      indikatorSoal: `Disajikan permasalahan terapan "${topik}", murid dapat mengurutkan prosedur penyelesaian secara sistematis.`,
      stem: `Seorang murid ingin menerapkan konsep "${topik}" untuk menyelesaikan tugas terkait "${
        tujuanList[Math.min(1, tujuanList.length - 1)]
      }". Urutan langkah sistematis yang harus dilakukan murid tersebut agar hasilnya akurat adalah ....`,
      opsi: [
        `A. Menarik kesimpulan akhir -> Mengumpulkan data -> Mengidentifikasi masalah`,
        `B. Mengidentifikasi informasi kunci -> Memodelkan/menganalisis konsep ${topik} -> Menentukan solusi dan kesimpulan`,
        `C. Menyajikan laporan -> Mengabaikan data pengamatan -> Merumuskan masalah`,
        `D. Menebak jawaban akhir tanpa melakukan proses analisis konsep ${mapel}`,
      ],
      kunci: 'B',
      pembahasan: `Penerapan konsep ${topik} yang tepat dimulai dari identifikasi informasi/masalah, pemodelan atau analisis konsep, hingga penarikan solusi dan kesimpulan.`,
    },
    {
      level: 'C5 (Evaluasi)',
      indikatorSoal: `Disajikan perbandingan dua argumen kelompok mengenai "${topik}", murid dapat mengevaluasi validitas argumen berdasarkan bukti empiris.`,
      stem: `Dua kelompok murid mengajukan gagasan berbeda mengenai penerapan "${topik}". Kelompok 1 menyertakan data pengamatan terukur dan alasan logis, sedangkan Kelompok 2 hanya menyampaikan opini tanpa dukungan data. Evaluasi yang tepat terhadap kedua gagasan tersebut adalah ....`,
      opsi: [
        `A. Gagasan Kelompok 2 lebih unggul karena tidak memerlukan waktu lama untuk mengumpulkan data`,
        `B. Gagasan Kelompok 1 lebih valid dan dapat dipertanggungjawabkan karena didukung bukti empiris sesuai konsep ${topik}`,
        `C. Kedua gagasan tidak dapat digunakan karena memiliki sudut pandang yang berbeda`,
        `D. Penilaian kebenaran konsep hanya ditentukan oleh banyaknya jumlah halaman laporan`,
      ],
      kunci: 'B',
      pembahasan: `Dalam evaluasi ilmiah dan penalaran HOTS pada materi ${topik}, argumen yang didukung bukti/data terukur memiliki validitas yang lebih tinggi.`,
    },
    {
      level: 'C4 (Analisis)',
      indikatorSoal: `Disajikan kondisi perubahan ekstrem pada salah satu variabel "${topik}", murid dapat menganalisis dampak logis pada keseluruhan sistem.`,
      stem: `Apabila salah satu tahapan atau komponen penting dalam "${topik}" mengalami gangguan atau perubahan ekstrem, dampak langsung yang paling logis terjadi pada keseluruhan sistem adalah ....`,
      opsi: [
        `A. Sistem tetap berjalan normal tanpa terpengaruh oleh perubahan komponen tersebut`,
        `B. Terjadi ketidakseimbangan atau perubahan hasil akhir sehingga diperlukan penyesuaian variabel pada proses "${topik}"`,
        `C. Seluruh hukum dan prinsip dasar ${mapel} berubah secara permanen`,
        `D. Komponen lain otomatis menghilang tanpa meninggalkan jejak pada hasil pengamatan`,
      ],
      kunci: 'B',
      pembahasan: `Setiap komponen dalam konsep ${topik} saling berkaitan; perubahan pada satu variabel akan memengaruhi proses dan hasil akhir sistem.`,
    },
    {
      level: 'C4 (Analisis)',
      indikatorSoal: `Disajikan indikator ketercapaian pembelajaran "${topik}", murid dapat mengidentifikasi bukti penguasaan konsep secara kontekstual.`,
      stem: `Perhatikan pernyataan indikator berikut: "${iktpList[0]}". Bukti nyata bahwa murid telah menguasai indikator tersebut dalam kehidupan sehari-hari adalah ....`,
      opsi: [
        `A. Mampu menjelaskan kembali konsep "${topik}" menggunakan bahasa sendiri disertai contoh kontekstual yang tepat`,
        `B. Hanya mampu membaca teks di buku tanpa memahami makna istilah di dalamnya`,
        `C. Menghindari diskusi kelompok ketika membahas studi kasus ${mapel}`,
        `D. Menyalin catatan teman tanpa melakukan verifikasi kebenaran informasi`,
      ],
      kunci: 'A',
      pembahasan: `Penguasaan konsep yang bermakna ditunjukkan oleh kemampuan menjelaskan kembali dengan bahasa sendiri dan mengaitkannya pada contoh nyata.`,
    },
    {
      level: 'C5 (Evaluasi)',
      indikatorSoal: `Disajikan kasus kolaborasi terkait "${topik}", murid dapat memilih tindakan yang mencerminkan Profil Pelajar Pancasila.`,
      stem: `Untuk meningkatkan efektivitas penerapan "${topik}" di lingkungan sekitar, tindakan kolaboratif yang paling mencerminkan Profil Pelajar Pancasila (${(
        formData.profilPancasila || ['Bernalar Kritis']
      ).join(', ')}) adalah ....`,
      opsi: [
        `A. Bekerja sendiri-sendiri agar tidak terjadi perbedaan pendapat antar anggota kelompok`,
        `B. Berdiskusi secara kritis dan bergotong royong merumuskan solusi berbasis konsep "${topik}" yang bermanfaat bagi lingkungan`,
        `C. Menolak masukan dari teman kelompok yang memiliki gaya belajar berbeda`,
        `D. Mengutamakan kecepatan selesai tanpa memeriksa ketepatan konsep`,
      ],
      kunci: 'B',
      pembahasan: `Kolaborasi kritis dan gotong royong dalam merumuskan solusi nyata merupakan wujud integrasi kompetensi ${mapel} dan Profil Pelajar Pancasila.`,
    },
    {
      level: 'C4 (Analisis)',
      indikatorSoal: `Murid dapat menganalisis fungsi tabel pengamatan dalam pengolahan data materi "${topik}".`,
      stem: `Dari sudut pandang literasi dan numerasi pada materi "${topik}", mengapa penyajian data dalam bentuk tabel pengamatan sangat penting sebelum menarik kesimpulan?`,
      opsi: [
        `A. Agar lembar kerja terlihat penuh meskipun datanya tidak berkaitan dengan topik`,
        `B. Memudahkan identifikasi pola, perbandingan antar variabel, serta meminimalkan kesalahan interpretasi pada "${topik}"`,
        `C. Menggantikan seluruh proses diskusi sehingga murid tidak perlu berpikir kritis`,
        `D. Hanya sebagai syarat administrasi penilaian tanpa fungsi analitis`,
      ],
      kunci: 'B',
      pembahasan: `Tabel pengamatan membantu menstrukturkan data sehingga pola dan hubungan antar variabel pada materi ${topik} dapat dianalisis dengan akurat.`,
    },
    {
      level: 'C6 (Kreasi)',
      indikatorSoal: `Murid dapat merumuskan langkah awal perancangan inovasi berbasis materi "${topik}" di lingkungan sekolah.`,
      stem: `Jika Anda diminta merancang kampanye atau inovasi sederhana berbasis materi "${topik}" untuk diterapkan di ${sekolah}, langkah awal paling strategis yang perlu dilakukan adalah ....`,
      opsi: [
        `A. Memetakan kondisi nyata di sekolah, mengaitkannya dengan prinsip "${topik}", lalu menyusun rancangan aksi yang terukur`,
        `B. Membeli peralatan mahal yang tidak tersedia di sekolah tanpa perencanaan`,
        `C. Menunggu instruksi tanpa melakukan pengamatan kondisi lingkungan sekolah`,
        `D. Membuat rancangan yang sama sekali tidak berhubungan dengan tujuan pembelajaran`,
      ],
      kunci: 'A',
      pembahasan: `Perancangan inovasi/solusi kontekstual selalu dimulai dari pemetaan kebutuhan nyata di lapangan dan penerapan konsep ${topik} secara terukur.`,
    },
  ];

  const soalPilihanGanda = pgTemplates.slice(0, countPG).map((item, idx) => ({
    nomor: idx + 1,
    levelKognitif: item.level,
    pertanyaan: item.stem,
    opsi: item.opsi,
    kunci: item.kunci,
    pembahasan: item.pembahasan,
  }));

  // Bangun Soal Uraian sejumlah formData.jumlahEsai
  const countEsai = Number(formData.jumlahEsai) || 3;
  const skorPerEsai = Math.round(60 / countEsai);
  const esaiTemplates = [
    {
      levelKognitif: 'C3 (Aplikasi)',
      pertanyaan: `Jelaskan konsep utama dari "${topik}" dengan bahasamu sendiri, lalu berikan contoh penerapannya sesuai dengan tujuan pembelajaran: "${tujuanList[0]}"!`,
      kunciDanPedoman: `Murid mampu menjelaskan pengertian/konsep inti "${topik}" secara tepat (Skor 40%), menguraikan proses atau karakteristik utamanya (Skor 30%), serta memberikan contoh penerapan kontekstual yang relevan dalam kehidupan sehari-hari (Skor 30%).`,
    },
    {
      levelKognitif: 'C4 (Analisis)',
      pertanyaan: `Mengapa pemahaman yang tepat mengenai "${topik}" sangat penting dalam memecahkan permasalahan sehari-hari? Analisislah hubungan sebab-akibat yang terjadi apabila prinsip pada materi ini diabaikan!`,
      kunciDanPedoman: `Murid mampu menganalisis keterkaitan konsep "${topik}" dengan masalah nyata secara logis (Skor 50%) serta mengidentifikasi minimal 2 dampak/akibat apabila prinsip tersebut tidak diterapkan dengan benar (Skor 50%).`,
    },
    {
      levelKognitif: 'C5 (Evaluasi & Solusi)',
      pertanyaan: `Berdasarkan kegiatan diskusi dan LKPD tentang "${topik}", rumuskanlah minimal 3 gagasan solusi atau langkah nyata yang dapat kamu terapkan di lingkungan ${sekolah} maupun di rumah!`,
      kunciDanPedoman: `Murid mampu merumuskan minimal 3 langkah solusi yang spesifik, realistis, dan selaras dengan capaian pembelajaran "${topik}" beserta alasan pemilihannya.`,
    },
    {
      levelKognitif: 'C4 (Analisis Data)',
      pertanyaan: `Bagaimana cara membedakan faktor pendukung dan faktor penghambat dalam proses/penerapan "${topik}"? Jelaskan disertai argumen yang runtut!`,
      kunciDanPedoman: `Murid mengidentifikasi faktor pendukung dan penghambat secara tepat serta memberikan penjelasan analitis berdasarkan konsep ${mapel}.`,
    },
    {
      levelKognitif: 'C6 (Kreasi / Refleksi Kritis)',
      pertanyaan: `Buatlah sebuah kesimpulan komprehensif atau rancangan tindak lanjut yang menghubungkan seluruh Tujuan Pembelajaran pada materi "${topik}"!`,
      kunciDanPedoman: `Murid menyusun sintesis/kesimpulan menyeluruh yang mencakup seluruh indikator ketercapaian tujuan pembelajaran secara sistematis.`,
    },
  ];

  const soalUraian = esaiTemplates.slice(0, countEsai).map((item, idx) => ({
    nomor: idx + 1,
    levelKognitif: item.levelKognitif,
    pertanyaan: item.pertanyaan,
    kunciDanPedoman: item.kunciDanPedoman,
    skorMaksimal: skorPerEsai,
  }));

  // Bangun Tabel Kisi-Kisi Soal Otomatis untuk memudahkan administrasi guru
  const kisiKisiSoal = [
    ...pgTemplates.slice(0, countPG).map((item, idx) => ({
      nomor: idx + 1,
      tujuanPembelajaran: tujuanList[idx % tujuanList.length],
      indikatorSoal: item.indikatorSoal,
      levelKognitif: item.level,
      bentukSoal: 'Pilihan Ganda',
      nomorSoal: `PG No. ${idx + 1}`,
    })),
    ...esaiTemplates.slice(0, countEsai).map((item, idx) => ({
      nomor: countPG + idx + 1,
      tujuanPembelajaran: tujuanList[idx % tujuanList.length],
      indikatorSoal: `Disajikan permasalahan kontekstual "${topik}", murid dapat menguraikan analisis dan solusi secara tertulis sesuai level ${item.levelKognitif}.`,
      levelKognitif: item.levelKognitif,
      bentukSoal: 'Uraian / Esai',
      nomorSoal: `Uraian No. ${idx + 1}`,
    })),
  ];

  const skorPerPG = Math.round(40 / countPG);

  const nowStr = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return {
    id: 'doc-' + Date.now(),
    createdAt: nowStr,
    metadata: {
      namaGuru: guru,
      nipGuru: nipGuru,
      namaKepalaSekolah: kepsek,
      nipKepalaSekolah: nipKepsek,
      kotaPengesahan: kota,
      namaSekolah: sekolah,
      jenjangFase: fase,
      kelasSpesifik: kelas,
      mataPelajaran: mapel,
      topikMateri: topik,
      alokasiWaktu: alokasi,
      modelPembelajaran: modelPilihan,
      profilLulusan: selectedDimensi,
    },
    modulAjar: {
      informasiUmum: {
        identitasModul: `Modul Ajar ${mapel} Kurikulum Nasional (Pembelajaran Mendalam) — ${topik}`,
        kompetensiAwal: `Murid telah memiliki pengetahuan dasar prasyarat yang berkaitan dengan pengenalan konsep awal sebelum mempelajari "${topik}" secara mendalam.`,
        profilLulusan: profilList,
        prinsipPembelajaranMendalam: {
          berkesadaran: `Membangun kesadaran penuh (mindfulness) murid terhadap tujuan mempelajari "${topik}", melatih fokus perhatian, serta menumbuhkan regulasi diri selama proses belajar.`,
          bermakna: `Mengaitkan konsep "${topik}" secara kontekstual dengan pengalaman nyata murid di ${sekolah} dan masyarakat sehingga ilmu yang dipelajari terasa relevan dan bermanfaat.`,
          menggembirakan: `Menciptakan iklim belajar yang positif, memuliakan peserta didik, menantang rasa ingin tahu, dan mengintegrasikan olah pikir, olah hati, olah rasa, serta olah raga.`,
        },
        kerangkaPembelajaran: {
          praktikPedagogis: `Menggunakan ${modelPilihan} dengan alur pengalaman belajar Memahami, Mengaplikasi, dan Merefleksi (${catatan}).`,
          kemitraanPembelajaran: `Kolaborasi aktif antara guru dan peserta didik, kerja sama tutor sebaya dalam kelompok, serta keterlibatan lingkungan keluarga/masyarakat sebagai sumber belajar kontekstual.`,
          lingkunganPembelajaran: `Ruang kelas dan lingkungan ${sekolah} yang aman, inklusif, mendukung dialog terbuka, serta menghargai keunikan setiap peserta didik.`,
          pemanfaatanDigital: `Pemanfaatan media presentasi visual, sumber belajar digital kontekstual, dan kuis interaktif untuk memperkaya pemahaman tentang "${topik}".`,
        },
        saranaPrasarana: `Papan tulis/Proyektor, Media Visual/Kontekstual tentang "${topik}", Lembar Kerja Peserta Didik (LKPD), Buku Teks ${mapel} ${kelas}, serta lingkungan sekitar ${sekolah}.`,
        targetPesertaDidik: `Murid reguler ${kelas} (${fase}) dengan karakteristik: ${karakteristik}`,
        modelDanMetode: `Pendekatan: Pembelajaran Mendalam. Model: ${modelPilihan}. Metode: Observasi Kontekstual, Diskusi Kolaboratif, Penyelidikan Terbimbing, dan Refleksi Otentik.`,
      },
      komponenInti: {
        capaianPembelajaran: cpText,
        tujuanPembelajaran: tujuanList,
        indikatorKetercapaian: iktpList,
        pemahamanBermakna: `Memahami materi "${topik}" secara mendalam dalam mata pelajaran ${mapel} membantu murid mengenali fenomena di sekitar secara berkesadaran, mengaplikasikan konsep untuk memecahkan masalah nyata, serta merefleksikan manfaatnya dalam kehidupan sehari-hari.`,
        pertanyaanPemantik: [
          `Pernahkah kalian mengamati fenomena atau permasalahan nyata di sekitar kita yang berkaitan dengan "${topik}"?`,
          `Mengapa konsep "${topik}" penting untuk kita pahami secara mendalam dan bagaimana manfaatnya bagi kehidupan sehari-hari?`,
          `Bagaimana cara kita mengaplikasikan prinsip "${topik}" untuk menciptakan solusi yang bermanfaat bagi lingkungan sekitar?`,
        ],
      },
      kegiatanPembelajaran: {
        pendahuluan: {
          durasi: '10 Menit',
          langkah: [
            `[Berkesadaran] Guru membuka pembelajaran dengan salam, menyapa murid dengan hangat, memandu doa bersama, serta mengajak murid melakukan jeda kesadaran penuh (mindfulness) untuk menyiapkan fokus belajar di ${kelas}.`,
            `[Menggembirakan] Guru memandu kegiatan Ice Breaking singkat bertema "${topik}" untuk menciptakan suasana belajar yang positif, nyaman, dan menggembirakan.`,
            `[Bermakna] Guru melakukan asesmen diagnostik awal dan apersepsi dengan mengaitkan pengalaman nyata murid terhadap materi "${topik}", lalu mengajukan pertanyaan pemantik.`,
            `Guru menyampaikan Tujuan Pembelajaran, manfaat bermakna mempelajari "${topik}", serta menjelaskan alur pengalaman belajar (Memahami, Mengaplikasi, Merefleksi) yang akan dilaksanakan.`,
          ],
        },
        inti: sintaksInti,
        penutup: {
          durasi: '10 Menit',
          langkah: [
            `[Merefleksi] Murid bersama guru menyimpulkan konsep-konsep kunci mengenai "${topik}" yang telah dipelajari melalui tahap Memahami dan Mengaplikasi.`,
            `[Berkesadaran] Murid mengerjakan soal evaluasi formatif singkat untuk mengukur ketercapaian indikator pembelajaran (KKTP) secara mandiri dan jujur.`,
            `[Menggembirakan] Guru memandu refleksi menyeluruh (olah pikir, olah hati, olah rasa), memberikan apresiasi atas kolaborasi kelompok, menyampaikan tindak lanjut pertemuan berikutnya, dan menutup kelas dengan doa serta salam.`,
          ],
        },
      },
      pengayaanDanRemedial: {
        pengayaan: `Bagi murid yang telah melampaui KKTP pada materi "${topik}", diberikan tantangan eksplorasi studi kasus lanjutan atau proyek mini membuat ringkasan kreatif/infografis sebagai tutor sebaya.`,
        remedial: `Bagi murid yang belum mencapai KKTP, diberikan pendampingan terfokus (scaffolding) pada indikator yang belum tuntas menggunakan contoh konkret yang lebih sederhana dan bimbingan sebaya.`,
      },
      refleksi: {
        refleksiGuru: [
          `Apakah seluruh tahapan sintaks ${modelPilihan} pada materi "${topik}" telah terlaksana sesuai alokasi waktu (${alokasi})?`,
          `Apakah strategi diferensiasi (${catatan}) sudah efektif membantu murid mencapai Tujuan Pembelajaran?`,
          `Bagian indikator manakah yang masih memerlukan penguatan pada pertemuan berikutnya?`,
        ],
        refleksiSiswa: [
          `Hal baru dan menarik apa yang kamu temukan saat mempelajari "${topik}" hari ini?`,
          `Bagian mana dari aktivitas LKPD yang paling menantang dan bagaimana kelompokmu menyelesaikannya?`,
          `Bagaimana kamu akan menerapkan pemahaman tentang "${topik}" ini dalam keseharianmu?`,
        ],
      },
      glosariumDanPustaka: {
        glosarium: [
          `${topik}: Pokok bahasan utama dalam mata pelajaran ${mapel} yang menjadi fokus pencapaian kompetensi peserta didik.`,
          `Pembelajaran Mendalam: Pendekatan pembelajaran yang memuliakan murid melalui suasana belajar Berkesadaran, Bermakna, dan Menggembirakan serta tahapan Memahami, Mengaplikasi, dan Merefleksi.`,
          `8 Dimensi Profil Lulusan: Standar kompetensi lulusan utuh yang meliputi Keimanan & Ketakwaan, Kewargaan, Penalaran Kritis, Kreativitas, Kolaborasi, Kemandirian, Kesehatan, dan Komunikasi.`,
          `KKTP (Kriteria Ketercapaian Tujuan Pembelajaran): Indikator operasional yang menunjukkan bahwa murid telah mencapai tujuan pembelajaran.`,
        ],
        daftarPustaka: [
          `Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen). Panduan Pembelajaran dan Asesmen Kurikulum Nasional & Naskah Akademik Pembelajaran Mendalam.`,
          `Buku Panduan Guru & Murid ${mapel} untuk ${kelas} (${fase}) serta sumber belajar kontekstual relevan terkait "${topik}".`,
        ],
      },
    },
    lkpd: {
      judul: `LKPD: ${topik.toUpperCase()}`,
      subjudul: `Lembar Kerja Peserta Didik (${mapel} • ${kelas}) — Pengalaman Belajar: Memahami, Mengaplikasi & Merefleksi`,
      tujuanKegiatan: tujuanList,
      petunjukPengerjaan: [
        `Tuliskan identitas nama kelompok dan anggota kelompok secara lengkap pada kolom yang tersedia.`,
        `Bacalah dengan cermat wacana stimulus kontekstual mengenai "${topik}" bersama rekan kelompokmu.`,
        `Lakukan langkah aktivitas secara berurutan dan lengkapi Tabel Analisis/Pengamatan dengan data yang tepat.`,
        `Diskusikan pertanyaan analitis secara gotong royong, lalu presentasikan hasil simpulan kelompokmu di depan kelas!`,
      ],
      stimulusKontekstual: {
        judulWacana: `Studi Kasus Kontekstual: Mengamati Fenomena "${topik}" di Sekitar Kita`,
        isiWacana: `Dalam kehidupan sehari-hari di lingkungan sekolah maupun masyarakat, kita sering menjumpai berbagai situasi yang berkaitan erat dengan "${topik}". Sebagai contoh, banyak orang belum menyadari bahwa konsep yang terdapat dalam pembelajaran ${mapel} sesungguhnya menjadi kunci penting untuk memahami dan menyelesaikan permasalahan nyata terkait ${topik.toLowerCase()}.\n\nMelalui kegiatan penyelidikan kelompok hari ini, kalian berperan sebagai tim analis muda dari ${sekolah} yang ditugaskan untuk mengamati, mengidentifikasi komponen penting, serta merumuskan solusi terbaik berdasarkan capaian pembelajaran: "${cpText}"`,
        faktaData: `Catatan Konteks & Fokus Penyelidikan: Perhatikan bagaimana setiap konsep dalam "${topik}" saling berhubungan untuk mencapai tujuan: ${tujuanList[0]}. (${catatan})`,
      },
      alatDanBahan: [
        `Lembar Kerja Peserta Didik (LKPD) "${topik}"`,
        `Buku Paket / Bahan Bacaan ${mapel} ${kelas}`,
        `Media pengamatan / studi kasus pendukung sesuai arahan guru`,
        `Alat tulis dan kertas catatan diskusi kelompok`,
      ],
      langkahAktivitas: [
        `Amati wacana kontekstual dan media pembelajaran tentang "${topik}" yang disajikan oleh guru.`,
        `Identifikasi konsep, variabel, atau permasalahan utama yang berkaitan dengan tujuan pembelajaran hari ini.`,
        `Catat hasil temuan dan analisis kelompokmu ke dalam Tabel Pengamatan di bawah ini secara sistematis.`,
        `Jawablah pertanyaan diskusi HOTS dan susunlah kesimpulan akhir kelompokmu.`,
      ],
      tabelPengamatan: {
        judulTabel: `Tabel 1. Lembar Analisis & Pengamatan Konsep "${topik}"`,
        kolom: [
          'No',
          'Aspek / Fokus Pengamatan',
          'Hasil Identifikasi & Temuan Kelompok',
          'Kaitannya dengan Konsep / Solusi Nyata',
        ],
        barisContohIsian: tujuanList.map((tpItem, idx) => [
          String(idx + 1),
          `Fokus TP ${idx + 1}: ${tpItem.slice(0, 75)}${
            tpItem.length > 75 ? '...' : ''
          }`,
          idx === 0
            ? `Contoh: Mengidentifikasi konsep utama dari ${topik} berdasarkan wacana...`
            : '....................................................................................',
          idx === 0
            ? `Dapat diterapkan untuk menganalisis permasalahan secara tepat...`
            : '....................................................................................',
        ]),
      },
      pertanyaanDiskusi: [
        ...tujuanList.map((tpItem, idx) => ({
          nomor: idx + 1,
          pertanyaan: `Berdasarkan hasil pengamatan kelompokmu, bagaimana cara membuktikan atau menerapkan "${tpItem}" pada kasus nyata terkait ${topik}? Jelaskan secara sistematis!`,
          petunjukJawaban: `Kaitkan temuan pada tabel pengamatan dengan konsep inti ${mapel} yang sedang dipelajari.`,
        })),
        {
          nomor: tujuanList.length + 1,
          pertanyaan: `Rekomendasi atau solusi kreatif apa yang dapat kelompokmu usulkan agar pemahaman tentang "${topik}" memberikan manfaat nyata bagi warga sekolah maupun lingkungan sekitar?`,
          petunjukJawaban: `Diskusikan minimal 2 contoh tindakan nyata yang aplikatif dan mudah diterapkan.`,
        },
      ],
      panduanKesimpulan: `Berdasarkan kegiatan eksplorasi dan diskusi kelompok mengenai "${topik}", kami menyimpulkan bahwa konsep utama yang telah kami pelajari adalah ................................................................................................................... dan penerapannya dalam kehidupan sehari-hari dilakukan dengan cara ...................................................................................................................`,
    },
    bahanAjar: {
      ringkasanMateri: [
        {
          subjudul: `1. Konsep Dasar & Pengertian ${topik}`,
          uraian: `Materi "${topik}" merupakan bagian esensial dalam mata pelajaran ${mapel} pada ${fase} (${kelas}). Fokus utama materi ini selaras dengan Capaian Pembelajaran: ${cpText}`,
        },
        {
          subjudul: `2. Komponen Utama & Penjabaran Tujuan Pembelajaran`,
          uraian: tujuanList
            .map((tp, i) => `• Fokus Kompetensi ${i + 1}: ${tp}`)
            .join('\n'),
        },
        {
          subjudul: `3. Penerapan Kontekstual dalam Kehidupan Sehari-hari`,
          uraian: `Pemahaman terhadap "${topik}" tidak hanya bersifat teoretis, melainkan dapat diamati dan diterapkan langsung di lingkungan ${sekolah} maupun masyarakat sekitar. Melalui model ${modelPilihan}, murid dilatih menganalisis masalah nyata dan merumuskan solusi berbasis data.`,
        },
      ],
      iceBreaking: {
        namaKegiatan: `Ice Breaking "Tebak Cepat & Gerak Fokus: ${topik}"`,
        instruksi: `1. Guru menyebutkan satu kata kunci terkait "${topik}".\n2. Jika kata tersebut merupakan konsep yang BENAR, murid bertepuk tangan 2 kali sambil berseru "Paham!".\n3. Jika kata tersebut merupakan pengecoh, murid menyilangkan tangan di dada sambil tersenyum.\n4. Aktivitas dilakukan selama 3 menit untuk mencairkan suasana sebelum pembagian LKPD.`,
      },
      kerangkaSlide: [
        {
          slide: 'Slide 1 — Judul & Apersepsi Visual',
          judul: `Eksplorasi Menarik: ${topik}`,
          poinIsi: [
            `Menampilkan gambar/kasus nyata di sekitar murid terkait ${topik}.`,
            `Pertanyaan pemantik pembuka diskusi kelas.`,
          ],
        },
        {
          slide: 'Slide 2 — Tujuan & Manfaat Pembelajaran',
          judul: 'Apa yang Akan Kita Capai Hari Ini?',
          poinIsi: tujuanList.slice(0, 3),
        },
        {
          slide: 'Slide 3 — Konsep Inti & Penjelasan Materi',
          judul: `Memahami Prinsip Dasar ${topik}`,
          poinIsi: [
            `Bagan alur atau poin kunci materi ${mapel}.`,
            `Contoh konkret yang dekat dengan keseharian murid ${kelas}.`,
          ],
        },
        {
          slide: 'Slide 4 — Studi Kasus & Tantangan Kelompok',
          judul: `Misi Penyelidikan Kelompok (${modelPilihan})`,
          poinIsi: [
            `Ringkasan kasus pada LKPD yang harus dipecahkan bersama kelompok.`,
            `Pembagian peran dan alokasi waktu pengerjaan LKPD.`,
          ],
        },
        {
          slide: 'Slide 5 — Presentasi & Penguatan Konsep',
          judul: 'Gelar Karya & Konfirmasi Temuan',
          poinIsi: [
            `Poin-poin penting pelurusan miskonsepsi oleh guru.`,
            `Apresiasi bagi seluruh kelompok yang tampil.`,
          ],
        },
        {
          slide: 'Slide 6 — Evaluasi & Refleksi Belajar',
          judul: 'Refleksi Hari Ini & Kuis Singkat',
          poinIsi: [
            `3 pertanyaan refleksi perasaan dan pemahaman siswa.`,
            `Tindak lanjut tugas/materi pertemuan berikutnya.`,
          ],
        },
      ],
    },
    asesmen: {
      asesmenDiagnostik: {
        nonKognitif: [
          `Bagaimana perasaan dan kesiapan belajarmu hari ini sebelum kita memulai petualangan belajar ${mapel}?`,
          `Cara belajar manakah yang paling membantumu memahami materi baru: mengamati gambar/video, berdiskusi bersama teman, atau mencoba praktik langsung?`,
        ],
        kognitifAwal: [
          `Apa yang terlintas di pikiranmu ketika mendengar istilah atau topik "${topik}"?`,
          `Menurut pengalamanmu, di mana kita dapat menemukan contoh penerapan "${topik}" dalam kehidupan sehari-hari?`,
        ],
        tindakLanjutDiagnostik: `Murid dengan kesiapan awal yang tinggi diberdayakan sebagai rekan tutor sebaya dalam kelompok, sedangkan murid yang masih membutuhkan penguatan konsep dasar diberikan bimbingan bertahap (scaffolding) sesuai catatan: ${catatan}`,
      },
      rubrikKinerja: {
        judulRubrik: `Rubrik Penilaian Formatif Kinerja Kelompok & Diskusi LKPD (${topik})`,
        kriteria: [
          {
            aspek: `Penguasaan Konsep & Ketepatan Isi LKPD (${mapel})`,
            sangatBaik: `Seluruh tabel analisis dan pertanyaan pada LKPD tentang "${topik}" dijawab dengan sangat tepat, lengkap, dan menunjukkan pemahaman konsep yang mendalam.`,
            baik: `Sebagian besar isi LKPD dijawab dengan tepat dan sesuai konsep "${topik}", hanya terdapat sedikit bagian yang kurang rinci.`,
            cukup: `Mampu mengisi sebagian LKPD namun masih terdapat kekeliruan konsep dasar yang perlu diluruskan.`,
            perluBimbingan: `Belum mampu melengkapi tabel dan pertanyaan LKPD tanpa pendampingan penuh dari guru.`,
          },
          {
            aspek: 'Kemampuan Bernalar Kritis & Pemecahan Masalah',
            sangatBaik: `Mampu menganalisis studi kasus "${topik}" secara logis, mengaitkan sebab-akibat, dan merumuskan solusi yang sangat relevan.`,
            baik: `Mampu menganalisis permasalahan dengan cukup runtut dan memberikan solusi yang sesuai konteks.`,
            cukup: `Analisis masalah masih bersifat permukaan dan belum sepenuhnya dikaitkan dengan data pada stimulus.`,
            perluBimbingan: `Masih memerlukan arahan bertahap untuk memahami pertanyaan studi kasus.`,
          },
          {
            aspek: 'Kolaborasi & Gotong Royong dalam Kelompok',
            sangatBaik: `Seluruh anggota kelompok berkontribusi aktif, saling menghargai pendapat, dan berbagi peran secara adil hingga tugas selesai tepat waktu.`,
            baik: `Sebagian besar anggota terlibat aktif dalam diskusi dan bekerja sama dengan baik.`,
            cukup: `Diskusi kelompok hanya didominasi oleh 1-2 orang anggota saja.`,
            perluBimbingan: `Kelompok belum menunjukkan kerja sama yang efektif dan memerlukan fasilitasi guru.`,
          },
          {
            aspek: 'Keterampilan Komunikasi & Presentasi Hasil',
            sangatBaik: `Menyajikan hasil analisis "${topik}" dengan sangat jelas, sistematis, percaya diri, dan mampu menanggapi pertanyaan dengan tepat.`,
            baik: `Menyajikan hasil diskusi dengan cukup jelas dan mudah dipahami oleh kelompok lain.`,
            cukup: `Penyampaian presentasi masih terpaku pada teks dan kurang terdengar jelas.`,
            perluBimbingan: `Belum berani menyampaikan hasil kerja kelompok di depan kelas.`,
          },
        ],
      },
      kisiKisiSoal,
      soalPilihanGanda,
      soalUraian,
      pedomanPenskoran: {
        rumusNilai: `Nilai Akhir = Skor Pilihan Ganda (Maks 40; ${countPG} soal x ${skorPerPG} poin) + Skor Uraian (Maks 60; ${countEsai} soal x ${skorPerEsai} poin) = Total Skor Maksimal 100.`,
        kktpInterval: [
          `0 - 60%   : Belum Mencapai KKTP (Perlu bimbingan remedial pada indikator dasar "${topik}")`,
          `61 - 74%  : Hampir Mencapai KKTP (Dilakukan penguatan/remedial pada indikator spesifik yang belum tuntas)`,
          `75 - 88%  : Sudah Mencapai KKTP (Tuntas, murid telah menguasai Tujuan Pembelajaran)`,
          `89 - 100% : Melampaui KKTP (Tuntas Sangat Baik, diberikan tantangan pengayaan lanjutan)`,
        ],
      },
    },
  };
};

export default function App() {
  // State Form Input Guru
  const [formData, setFormData] = useState(PRESET_SAMPLES[0].data);

  // State UI & Navigasi
  // State untuk mengontrol munculnya pop-up konfirmasi verifikasi AI
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [activeTab, setActiveTab] = useState('modul'); // 'modul' | 'lkpd' | 'bahan' | 'asesmen' | 'semua'
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(true);
  const [showOptionalContext, setShowOptionalContext] = useState(true);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showApiModal, setShowApiModal] = useState(false);
  const [showPrintPreviewModal, setShowPrintPreviewModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState({});
  const [customApiKey, setCustomApiKey] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // State Hasil Perangkat Ajar & Riwayat LocalStorage
  const [generatedData, setGeneratedData] = useState(INITIAL_GENERATED_RESULT);
  const [historyList, setHistoryList] = useState([]);

  // Ref untuk area dokumen yang akan disalin/diekspor/dicetak
  const documentContainerRef = useRef(null);

  // Muat Riwayat & Custom API Key dari LocalStorage saat aplikasi dibuka
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('eduplan_ai_history_v1');
      if (savedHistory) {
        const parsed = JSON.parse(savedHistory);
        if (Array.isArray(parsed)) {
          setHistoryList(parsed);
        }
      }
      const savedKey = localStorage.getItem('eduplan_custom_gemini_key');
      if (savedKey) {
        setCustomApiKey(savedKey);
      }
    } catch (err) {
      // Abaikan bila akses storage dibatasi
    }
  }, []);

  // Sinkronisasi langsung perubahan identitas Guru, Kepala Sekolah, NIP, Sekolah & Kota ke dokumen yang sedang tampil
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    const liveMetadataFields = [
      'namaGuru',
      'nipGuru',
      'namaKepalaSekolah',
      'nipKepalaSekolah',
      'kotaPengesahan',
      'namaSekolah',
    ];
    if (liveMetadataFields.includes(field)) {
      setGeneratedData((prev) => ({
        ...prev,
        metadata: {
          ...prev.metadata,
          [field]: value,
        },
      }));
    }
  };

  const handleSaveApiKey = (newKey) => {
    const cleaned = (newKey || '').trim();
    setCustomApiKey(cleaned);
    try {
      if (cleaned) {
        localStorage.setItem('eduplan_custom_gemini_key', cleaned);
        showToast('API Key Gemini berhasil disimpan!');
      } else {
        localStorage.removeItem('eduplan_custom_gemini_key');
        showToast(
          'Mode Mesin Kontekstual Pintar (Tanpa API Key Eksternal) diaktifkan.'
        );
      }
    } catch (err) {
      // Abaikan error storage
    }
    setShowApiModal(false);
  };

  // Fungsi menampilkan Toast Notifikasi (pengganti alert)
  const showToast = (msg, type = 'success') => {
    setToastMessage({ text: msg, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Simpan ke LocalStorage
  const saveToHistory = (newDoc) => {
    try {
      const updated = [
        newDoc,
        ...historyList.filter((item) => item.id !== newDoc.id),
      ].slice(0, 15);
      setHistoryList(updated);
      localStorage.setItem('eduplan_ai_history_v1', JSON.stringify(updated));
    } catch (err) {
      console.error('Gagal menyimpan ke LocalStorage:', err);
    }
  };

  // Hapus item dari riwayat
  const handleDeleteHistory = (id) => {
    try {
      const updated = historyList.filter((item) => item.id !== id);
      setHistoryList(updated);
      localStorage.setItem('eduplan_ai_history_v1', JSON.stringify(updated));
      setDeleteConfirmId(null);
      showToast('Riwayat perangkat ajar berhasil dihapus.');
    } catch (err) {
      console.error('Gagal menghapus riwayat:', err);
    }
  };

  // Toggle Pilihan Array (Profil Pelajar Pancasila & Komposisi Asesmen)
  const handleToggleArrayItem = (field, item) => {
    setFormData((prev) => {
      const exists = prev[field].includes(item);
      if (exists && prev[field].length === 1) {
        showToast('Minimal pilih 1 item pada bagian ini.', 'info');
        return prev;
      }
      return {
        ...prev,
        [field]: exists
          ? prev[field].filter((i) => i !== item)
          : [...prev[field], item],
      };
    });
  };

  // Isi Contoh Cepat (Preset Sample)
  const handleApplyPreset = (preset) => {
    setFormData(preset.data);
    setGeneratedData((prev) => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        namaGuru: preset.data.namaGuru,
        nipGuru: preset.data.nipGuru,
        namaKepalaSekolah: preset.data.namaKepalaSekolah,
        nipKepalaSekolah: preset.data.nipKepalaSekolah,
        kotaPengesahan: preset.data.kotaPengesahan,
        namaSekolah: preset.data.namaSekolah,
      },
    }));
    setErrorMessage(null);
    showToast(
      `Contoh "${preset.label}" berhasil dimuat! Klik tombol Buat Perangkat Ajar untuk memproses.`
    );
  };

  // ==========================================
  // FITUR BARU: RUMUSKAN TP OTOMATIS DARI CP (1-KLIK)
  // ==========================================
  const handleAutoGenerateTPFromCP = () => {
    const cp = (formData.capaianPembelajaran || '').trim();
    if (!cp) {
      showToast(
        'Mohon isi atau tempelkan teks Capaian Pembelajaran (CP) terlebih dahulu!',
        'error'
      );
      return;
    }

    // Ekstrak kalimat atau klausa penting dari CP
    const cleanedCp = cp
      .replace(/^Pada akhir fase [A-F],?\s*/i, '')
      .replace(/^murid (dapat|mampu|memiliki kemampuan)\s*/i, '')
      .trim();

    const segments = cleanedCp
      .split(/[.;]| serta | dan /i)
      .map((s) => s.trim())
      .filter((s) => s.length > 12);

    const fokus1 = segments[0] || cleanedCp.slice(0, 90);
    const fokus2 =
      segments[1] ||
      `penerapan konsep ${
        formData.topikMateri || formData.mataPelajaran
      } dalam kehidupan sehari-hari`;
    const fokus3 =
      segments[2] ||
      `solusi pemecahan masalah kontekstual terkait ${
        formData.topikMateri || formData.mataPelajaran
      }`;

    const generatedTPs = [
      `1. (Memahami) Melalui pengamatan stimulus kontekstual dan diskusi berkesadaran, murid mampu mengidentifikasi dan menjelaskan konsep ${fokus1} secara tepat.`,
      `2. (Mengaplikasi) Melalui kegiatan penyelidikan kolaboratif pada LKPD, murid mampu menganalisis dan mengaplikasikan ${fokus2} secara kritis dan sistematis.`,
      `3. (Merefleksi) Melalui presentasi dan evaluasi pengalaman belajar, murid mampu merumuskan gagasan solusi serta merefleksikan makna ${fokus3} dalam kehidupan nyata.`,
    ].join('\n');

    handleInputChange('tujuanPembelajaran', generatedTPs);

    // Jika topik materi masih kosong, bantu isi otomatis dari potongan CP pertama
    if (!formData.topikMateri.trim()) {
      const autoTopik = fokus1
        .replace(/^(memahami|mendeskripsikan|menganalisis|mengenali)\s+/i, '')
        .slice(0, 60);
      handleInputChange(
        'topikMateri',
        autoTopik.charAt(0).toUpperCase() + autoTopik.slice(1)
      );
    }

    showToast(
      '3 Tujuan Pembelajaran (Memahami, Mengaplikasi, Merefleksi) berhasil dirumuskan otomatis dari CP Anda!'
    );
  };

  // ==========================================
  // PEMANGGILAN GEMINI API DENGAN FALLBACK KONTEKSTUAL OTOMATIS
  // ==========================================
  const fetchWithBackoff = async (url, options, retries = 2, delay = 900) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 400
        ) {
          const authError = new Error(`AUTH_FALLBACK_${response.status}`);
          authError.isFallbackTrigger = true;
          throw authError;
        }
        if (
          (response.status === 429 || response.status >= 500) &&
          retries > 0
        ) {
          await new Promise((res) => setTimeout(res, delay));
          return fetchWithBackoff(url, options, retries - 1, delay * 2);
        }
        const errText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errText}`);
      }
      return await response.json();
    } catch (err) {
      if (err.isFallbackTrigger) {
        throw err;
      }
      if (retries > 0) {
        await new Promise((res) => setTimeout(res, delay));
        return fetchWithBackoff(url, options, retries - 1, delay * 2);
      }
      throw err;
    }
  };

  const handleGenerateAI = async (e) => {
    if (e) e.preventDefault();

    if (
      !formData.capaianPembelajaran.trim() ||
      !formData.tujuanPembelajaran.trim()
    ) {
      setErrorMessage(
        'Mohon isi Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP) terlebih dahulu.'
      );
      showToast(
        'Capaian Pembelajaran & Tujuan Pembelajaran wajib diisi!',
        'error'
      );
      return;
    }

    setErrorMessage(null);
    setIsGenerating(true);
    setIsEditMode(false);
    setGenerationStep(
      'Menganalisis Capaian Pembelajaran (CP) & Tujuan Pembelajaran (TP)...'
    );

    const stepTimers = [
      setTimeout(
        () =>
          setGenerationStep(
            'Merancang sintaks Kegiatan Pembelajaran (Modul Ajar Kurikulum Merdeka)...'
          ),
        800
      ),
      setTimeout(
        () =>
          setGenerationStep(
            'Menyusun wacana kontekstual, tabel kerja, LKPD & Bahan Bacaan/Slide...'
          ),
        1600
      ),
      setTimeout(
        () =>
          setGenerationStep(
            'Membuat Kisi-Kisi Soal, Rubrik Penilaian, dan Soal HOTS...'
          ),
        2400
      ),
    ];

    try {
      const smartPackage = buildSmartContextualPackage(formData);
      const activeKey = (customApiKey || '').trim();

      if (!activeKey) {
        await new Promise((res) => setTimeout(res, 1800));
        setGeneratedData(smartPackage);
        saveToHistory(smartPackage);
        showToast(
          'Perangkat Ajar Lengkap (Modul, LKPD, Bahan Ajar & Asesmen) berhasil disusun!'
        );
        return;
      }

      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${activeKey}`;

      const systemPrompt = `Anda adalah Pakar Kurikulum Nasional Indonesia (Kemendikdasmen), Instruktur Nasional Pembelajaran Mendalam, dan Pengembang Perangkat Ajar Profesional.
Tugas Anda adalah menyusun perangkat ajar Kurikulum Nasional dengan Pendekatan Pembelajaran Mendalam yang SANGAT LENGKAP, KONTEKSTUAL, OPERASIONAL, dan SIAP PAKAI dalam Bahasa Indonesia berdasarkan input guru:
1. Perencanaan Pembelajaran (Modul Ajar Pembelajaran Mendalam) yang memuat:
   - 8 Dimensi Profil Lulusan (Keimanan & Ketakwaan terhadap Tuhan YME, Kewargaan, Penalaran Kritis, Kreativitas, Kolaborasi, Kemandirian, Kesehatan, dan Komunikasi).
   - 3 Prinsip Pembelajaran Mendalam: Berkesadaran (Mindful), Bermakna (Meaningful), dan Menggembirakan (Joyful).
   - 4 Kerangka Pembelajaran: Praktik Pedagogis, Kemitraan Pembelajaran, Lingkungan Pembelajaran, dan Pemanfaatan Digital.
   - 3 Tahap Pengalaman Belajar pada Kegiatan Inti: Memahami (Understanding), Mengaplikasi (Applying), dan Merefleksi (Reflecting) yang terintegrasi dengan sintaks model pembelajaran beserta alokasi waktunya.
2. Lembar Kerja Peserta Didik (LKPD) berbasis Pembelajaran Mendalam yang berisi stimulus/wacana kontekstual yang kaya, tabel pengamatan terstruktur, dan pertanyaan diskusi HOTS.
3. Bahan Ajar (Ringkasan Materi Esensial, Ide Ice Breaking Kelas yang Menggembirakan, dan Kerangka 6 Slide Presentasi Guru).
4. Asesmen & Rubrik Penilaian lengkap (Asesmen Diagnostik, Tabel Rubrik 4 skala, Kisi-Kisi Soal, Soal Pilihan Ganda HOTS lengkap dengan opsi A-D, kunci, dan pembahasan mendalam, serta Soal Uraian beserta kunci dan pedoman skor).`;

      const userQuery = `Buatlah Perangkat Ajar Kurikulum Nasional dengan Pendekatan Pembelajaran Mendalam lengkap berdasarkan data berikut:
- Nama Guru Penyusun: ${formData.namaGuru || 'Guru Mata Pelajaran'} (NIP: ${
        formData.nipGuru || '-'
      })
- Nama Kepala Sekolah: ${
        formData.namaKepalaSekolah || 'Kepala Sekolah'
      } (NIP: ${formData.nipKepalaSekolah || '-'})
- Satuan Pendidikan / Sekolah: ${
        formData.namaSekolah || 'Satuan Pendidikan'
      } (${formData.kotaPengesahan || 'Indonesia'})
- Jenjang / Fase: ${formData.jenjangFase}
- Kelas Spesifik: ${formData.kelasSpesifik || formData.jenjangFase}
- Mata Pelajaran: ${formData.mataPelajaran || 'Mata Pelajaran Umum'}
- Topik / Materi Pokok: ${formData.topikMateri || 'Sesuai CP dan TP'}
- Alokasi Waktu: ${formData.alokasiWaktu || '2 JP x 45 Menit (1 Pertemuan)'}
- Model Pembelajaran Pilihan: ${formData.modelPembelajaran}
- 8 Dimensi Profil Lulusan yang Difokuskan: ${(
        formData.profilLulusan || []
      ).join(', ')}
- Jumlah Soal Pilihan Ganda HOTS: ${formData.jumlahPG || 5} butir soal
- Jumlah Soal Uraian / Esai: ${formData.jumlahEsai || 3} butir soal

[CAPAIAN PEMBELAJARAN (CP)]:
${formData.capaianPembelajaran}

[TUJUAN PEMBELAJARAN (TP)]:
${formData.tujuanPembelajaran}

[KARAKTERISTIK MURID & KONTEKS]:
${
  formData.karakteristikMurid ||
  'Murid memiliki gaya belajar beragam dan membutuhkan pembelajaran mendalam yang aktif.'
}

[CATATAN PEMBELAJARAN MENDALAM & DIFERENSIASI]:
${
  formData.catatanKhusus ||
  'Terapkan prinsip Berkesadaran, Bermakna, dan Menggembirakan serta tahapan Memahami, Mengaplikasi, dan Merefleksi.'
}`;

      const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.65,
        },
      };

      const result = await fetchWithBackoff(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const rawText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) {
        throw new Error('EMPTY_AI_RESPONSE');
      }

      const parsedAI = JSON.parse(rawText);

      // Gabungkan hasil AI dengan struktur smartPackage agar semua properti (termasuk Bahan Ajar & Kisi-Kisi) terjamin utuh
      const mergedPackage = {
        ...smartPackage,
        modulAjar: {
          ...smartPackage.modulAjar,
          ...(parsedAI.modulAjar || {}),
        },
        lkpd: {
          ...smartPackage.lkpd,
          ...(parsedAI.lkpd || {}),
        },
        bahanAjar: {
          ...smartPackage.bahanAjar,
          ...(parsedAI.bahanAjar || {}),
        },
        asesmen: {
          ...smartPackage.asesmen,
          ...(parsedAI.asesmen || {}),
          kisiKisiSoal:
            parsedAI?.asesmen?.kisiKisiSoal ||
            smartPackage.asesmen.kisiKisiSoal,
        },
      };

      setGeneratedData(mergedPackage);
      saveToHistory(mergedPackage);
      showToast('Perangkat Ajar Lengkap berhasil dibuat dengan Gemini AI!');
    } catch (error) {
      const fallbackPackage = buildSmartContextualPackage(formData);
      setGeneratedData(fallbackPackage);
      saveToHistory(fallbackPackage);
      showToast('Perangkat Ajar Lengkap berhasil disusun secara otomatis!');
    } finally {
      stepTimers.forEach(clearTimeout);
      setIsGenerating(false);
      setGenerationStep('');
    }
  };

  // ==========================================
  // FITUR UTILITAS GURU: SALIN, CETAK DIALOG, UNDUH PDF (.PDF), UNDUH WORD (.DOC)
  // ==========================================
  const getCleanFileName = (ext) => {
    const tabTitle =
      activeTab === 'modul'
        ? 'Modul_Ajar'
        : activeTab === 'lkpd'
        ? 'LKPD_Siswa'
        : activeTab === 'bahan'
        ? 'Bahan_Ajar_Slide'
        : activeTab === 'asesmen'
        ? 'Asesmen_Penilaian'
        : 'Perangkat_Ajar_Lengkap';

    const cleanMapel = (generatedData.metadata.mataPelajaran || 'Mapel')
      .replace(/[^a-zA-Z0-9]/g, '_')
      .slice(0, 20);
    const cleanKelas = (
      generatedData.metadata.kelasSpesifik || 'Kelas'
    ).replace(/[^a-zA-Z0-9]/g, '_');

    return `${tabTitle}_${cleanMapel}_${cleanKelas}.${ext}`;
  };

  const handleCopyDocument = () => {
    if (!documentContainerRef.current) return;
    try {
      const range = document.createRange();
      range.selectNodeContents(documentContainerRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
      showToast(
        'Dokumen berhasil disalin! Silakan Paste (Ctrl+V) di Microsoft Word atau Google Docs.'
      );
    } catch (err) {
      showToast('Gagal menyalin dokumen.', 'error');
    }
  };

  // Fungsi Cetak / Print yang diperbaiki agar berfungsi di dalam iframe maupun tab baru
  const handlePrintPDF = () => {
    if (!documentContainerRef.current) return;
    const contentHtml = documentContainerRef.current.innerHTML;
    const docTitle = getCleanFileName('pdf').replace('.pdf', '');

    // Coba buka jendela cetak A4 mandiri agar tidak terhalang pembatasan iframe
    const printWindow = window.open('', '_blank', 'width=960,height=800');

    if (printWindow && printWindow.document) {
      printWindow.document.open();
      printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
          <meta charset="utf-8" />
          <title>${docTitle}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @page { size: A4 portrait; margin: 15mm; }
            body {
              font-family: 'Arial', sans-serif;
              color: #0f172a;
              background: #ffffff;
              line-height: 1.5;
              padding: 20px;
            }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; }
            th, td { border: 1px solid #334155 !important; padding: 7px 10px !important; vertical-align: top; }
            .page-break-before { page-break-before: always; }
            @media print {
              .no-print-bar { display: none !important; }
              body { padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="no-print-bar" style="background:#1e1b4b;color:white;padding:12px 20px;border-radius:10px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;font-family:sans-serif;">
            <div>
              <strong>Pratinjau Cetak / Simpan PDF Siap Digunakan</strong>
              <div style="font-size:12px;color:#cbd5e1;">Pilih Destination: "Save as PDF" atau printer Anda pada jendela yang muncul.</div>
            </div>
            <div style="display:flex;gap:10px;">
              <button onclick="window.print()" style="background:#0d9488;color:white;border:none;padding:8px 16px;border-radius:8px;font-weight:bold;cursor:pointer;">
                🖨️ Cetak / Simpan PDF Sekarang
              </button>
              <button onclick="window.close()" style="background:#475569;color:white;border:none;padding:8px 14px;border-radius:8px;cursor:pointer;">
                Tutup
              </button>
            </div>
          </div>
          <div>${contentHtml}</div>
          <script>
            setTimeout(function() {
              window.focus();
              window.print();
            }, 700);
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
      showToast(
        'Jendela Cetak A4 dibuka! Pilih "Save as PDF" atau printer Anda.'
      );
    } else {
      // Jika popup diblokir oleh sandbox browser, buka Modal Pratinjau Cetak & Unduh PDF Langsung
      setShowPrintPreviewModal(true);
    }
  };

  // Fungsi Unduh File PDF (.pdf) secara langsung menggunakan html2pdf.js (Tanpa Dialog Print)
  const handleDirectDownloadPDF = async () => {
    if (!documentContainerRef.current || isDownloadingPdf) return;
    setIsDownloadingPdf(true);
    showToast(
      'Sedang menyiapkan file PDF kualitas cetak A4, mohon tunggu sebentar...',
      'info'
    );

    try {
      // Muat pustaka html2pdf.js secara dinamis bila belum ada
      if (!window.html2pdf) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src =
            'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      const element = documentContainerRef.current;
      const pdfFileName = getCleanFileName('pdf');

      const opt = {
        margin: [10, 10, 10, 10],
        filename: pdfFileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await window.html2pdf().set(opt).from(element).save();
      showToast(
        `File PDF "${pdfFileName}" berhasil diunduh ke perangkat Anda!`
      );
    } catch (err) {
      console.error('Gagal mengunduh PDF langsung:', err);
      // Fallback ke jendela cetak
      handlePrintPDF();
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  const handleDownloadWord = () => {
    if (!documentContainerRef.current) return;
    const contentHtml = documentContainerRef.current.innerHTML;
    const fileName = getCleanFileName('doc');

    const fullHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset="utf-8">
        <title>${fileName}</title>
        <style>
          body { font-family: 'Arial', sans-serif; font-size: 11pt; line-height: 1.5; color: #1e293b; }
          h1, h2, h3, h4 { color: #1e1b4b; margin-top: 12pt; margin-bottom: 6pt; }
          table { width: 100%; border-collapse: collapse; margin-top: 8pt; margin-bottom: 12pt; }
          th, td { border: 1px solid #475569; padding: 6pt 8pt; text-align: left; vertical-align: top; font-size: 10.5pt; }
          th { background-color: #e0e7ff; font-weight: bold; color: #1e1b4b; }
          ul, ol { margin-top: 4pt; margin-bottom: 8pt; padding-left: 20pt; }
          li { margin-bottom: 3pt; }
          .section-box { border: 1px solid #cbd5e1; padding: 10pt; margin-bottom: 10pt; background-color: #f8fafc; }
          .no-export { display: none !important; }
        </style>
      </head>
      <body>
        ${contentHtml}
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff', fullHtml], {
      type: 'application/msword',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast(`File Word "${fileName}" berhasil diunduh!`);
  };

  // Helper ambil baris tabel pengamatan LKPD secara aman
  const getLkpdRows = () => {
    const tbl = generatedData?.lkpd?.tabelPengamatan;
    if (!tbl) return [];
    return tbl.barisContohIsian || [];
  };

  // Mulai Mode Kuis Interaktif Kelas
  const handleOpenInteractiveQuiz = () => {
    setQuizIndex(0);
    setSelectedQuizOption(null);
    setQuizScore(0);
    setQuizAnswered({});
    setShowQuizModal(true);
  };

  const currentQuizList = generatedData?.asesmen?.soalPilihanGanda || [];
  const activeQuizQuestion = currentQuizList[quizIndex];

  const handleSelectQuizAnswer = (optLetter) => {
    if (!activeQuizQuestion || quizAnswered[quizIndex]) return;
    setSelectedQuizOption(optLetter);
    const isCorrect = optLetter === activeQuizQuestion.kunci;
    setQuizAnswered((prev) => ({
      ...prev,
      [quizIndex]: { selected: optLetter, isCorrect },
    }));
    if (isCorrect) {
      setQuizScore((prev) => prev + Math.round(100 / currentQuizList.length));
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans">
      {/* CSS Khusus Cetak / PDF & Editor */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          .print-only-container {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
          .page-break-before {
            page-break-before: always;
          }
          table {
            page-break-inside: auto;
          }
          tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }
        }
        [contenteditable="true"] {
          outline: 2px dashed #6366f1;
          outline-offset: 4px;
          background-color: #fefce8;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        [contenteditable="true"]:focus {
          outline: 2px solid #4f46e5;
          background-color: #ffffff;
        }
      `}</style>

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 max-w-md no-print">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border ${
              toastMessage.type === 'error'
                ? 'bg-red-600 text-white border-red-700'
                : toastMessage.type === 'info'
                ? 'bg-indigo-600 text-white border-indigo-700'
                : 'bg-teal-700 text-white border-teal-800'
            }`}
          >
            {toastMessage.type === 'error' ? (
              <AlertCircle className="w-5 h-5 shrink-0" />
            ) : (
              <CheckCircle2 className="w-5 h-5 shrink-0" />
            )}
            <p className="text-sm font-medium">{toastMessage.text}</p>
          </div>
        </div>
      )}

      {/* HEADER UTAMA */}
      <header className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-teal-800 text-white shadow-lg sticky top-0 z-30 no-print">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/25 shadow-inner">
              <GraduationCap className="w-6 h-6 text-teal-300" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight">
                  Denmantap EduPlan
                </h1>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-400/20 text-teal-200 border border-teal-300/30">
                  Kurikulum Nasional • Pembelajaran Mendalam
                </span>
              </div>
              <p className="text-xs sm:text-sm text-indigo-100/90">
                Generator Otomatis RPP/Modul Ajar, Kerangka Materi, LKPD &
                Asesmen
              </p>
            </div>
          </div>

          {/* TOMBOL KUIS KELAS, PENGATURAN AI & RIWAYAT */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleOpenInteractiveQuiz}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold shadow-sm transition"
              title="Tampilkan Soal PG sebagai Kuis Interaktif di Proyektor Kelas"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Mode Kuis Kelas</span>
            </button>

            <button
              type="button"
              onClick={() => setShowApiModal(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/20 transition"
              title="Konfigurasi Mesin AI / Gemini API Key Opsional"
            >
              <Cpu className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">
                {customApiKey
                  ? 'Mode: Gemini API Aktif'
                  : 'Mode: Smart AI Engine'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setShowHistoryModal(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/20 transition"
            >
              <History className="w-4 h-4 text-teal-300" />
              <span>Riwayat</span>
              <span className="px-1.5 py-0.2 bg-teal-500 text-slate-950 font-bold rounded-full text-xs">
                {historyList.length}
              </span>
            </button>
          </div>
        </div>

        {/* BARIS CONTOH CEPAT (PRESET BAR) */}
        <div className="bg-indigo-950/60 border-t border-white/10">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs text-indigo-200">
              <Lightbulb className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="font-medium">
                Uji Coba 1-Klik (Isi Contoh Cepat):
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {PRESET_SAMPLES.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleApplyPreset(preset)}
                  className="group flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-900/80 hover:bg-teal-600 text-indigo-100 hover:text-white border border-indigo-700 hover:border-teal-400 text-xs font-medium transition shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:text-white" />
                  <span>{preset.label}</span>
                  <span className="hidden md:inline-block text-[10px] px-1.5 py-0.2 rounded bg-black/25 text-indigo-200">
                    {preset.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* MAIN WORKSPACE */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ============================================================
            KOLOM KIRI: FORM INPUT TERSTRUKTUR UNTUK GURU (5 KOLOM GRID)
            ============================================================ */}
        <section className="lg:col-span-5 xl:col-span-5 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden no-print">
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Sliders className="w-5 h-5 text-teal-400" />
              <div>
                <h2 className="font-bold text-base">
                  Data Perencanaan Pembelajaran
                </h2>
                <p className="text-xs text-slate-300">
                  Isi CP & TP (Wajib) serta identitas pengesahan opsional
                </p>
              </div>
            </div>
            <span className="text-[11px] bg-teal-500/20 text-teal-300 border border-teal-400/30 px-2.5 py-1 rounded-full font-medium">
              Siap Generate
            </span>
          </div>

          <form onSubmit={handleGenerateAI} className="p-5 space-y-6">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 1. BAGIAN WAJIB (REQUIRED): CP & TP + FITUR BANTU RUMUSKAN TP */}
            <div className="space-y-4 bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  1. Bagian Utama Wajib (Required)
                </span>
                <span className="text-[11px] text-rose-600 font-semibold">
                  * Wajib Diisi
                </span>
              </div>

              {/* Capaian Pembelajaran (CP) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Capaian Pembelajaran (CP){' '}
                  <span className="text-rose-600">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.capaianPembelajaran}
                  onChange={(e) =>
                    handleInputChange('capaianPembelajaran', e.target.value)
                  }
                  placeholder="Salin atau tuliskan kutipan Capaian Pembelajaran (CP) sesuai Keputusan BSKAP Kemendikbudristek..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 outline-none transition"
                />
              </div>

              {/* Tujuan Pembelajaran (TP) + Tombol Perumus Otomatis */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Tujuan Pembelajaran (TP){' '}
                    <span className="text-rose-600">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleAutoGenerateTPFromCP}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-semibold shadow-xs transition"
                    title="Otomatis pecah kalimat CP di atas menjadi 3 butir Tujuan Pembelajaran operasional"
                  >
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Bantu Rumuskan TP dari CP</span>
                  </button>
                </div>
                <textarea
                  rows={4}
                  required
                  value={formData.tujuanPembelajaran}
                  onChange={(e) =>
                    handleInputChange('tujuanPembelajaran', e.target.value)
                  }
                  placeholder="Tuliskan Tujuan Pembelajaran atau klik tombol 'Bantu Rumuskan TP dari CP' di atas..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 outline-none transition"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Tips: Jika Anda baru memiliki CP, cukup klik tombol{' '}
                  <strong>"Bantu Rumuskan TP dari CP"</strong> agar sistem
                  menyusun kalimat TP secara otomatis.
                </p>
              </div>
            </div>

            {/* 2. DATA ESENSIAL & IDENTITAS PENGESAHAN (TERMASUK KEPALA SEKOLAH) */}
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 border-b border-slate-200 pb-2">
                <School className="w-4 h-4 text-teal-600" />
                <span>2. Identitas Sekolah, Guru & Kepala Sekolah</span>
              </div>

              {/* Nama Guru & NIP Guru */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Guru Penyusun
                  </label>
                  <input
                    type="text"
                    value={formData.namaGuru}
                    onChange={(e) =>
                      handleInputChange('namaGuru', e.target.value)
                    }
                    placeholder="Contoh: Budi Santoso, S.Pd."
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    NIP / NIY Guru{' '}
                    <span className="text-slate-400 font-normal">
                      (Opsional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={formData.nipGuru || ''}
                    onChange={(e) =>
                      handleInputChange('nipGuru', e.target.value)
                    }
                    placeholder="Contoh: 19890412 201903 1 005"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 outline-none"
                  />
                </div>
              </div>

              {/* Nama Kepala Sekolah & NIP Kepala Sekolah (BARU - OTOMATIS DI LEMBAR PENGESAHAN) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-teal-50/50 p-3 rounded-xl border border-teal-100">
                <div>
                  <label className="block text-xs font-semibold text-teal-950 mb-1 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-teal-700" />
                    <span>Nama Kepala Sekolah</span>
                    <span className="text-[10px] text-teal-700 font-normal">
                      (Opsional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={formData.namaKepalaSekolah || ''}
                    onChange={(e) =>
                      handleInputChange('namaKepalaSekolah', e.target.value)
                    }
                    placeholder="Contoh: Hj. Ratna Dewi, S.Pd., M.Pd."
                    className="w-full rounded-xl border border-teal-300 bg-white px-3 py-2 text-sm focus:border-teal-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-teal-950 mb-1">
                    NIP Kepala Sekolah{' '}
                    <span className="text-[10px] text-teal-700 font-normal">
                      (Opsional)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={formData.nipKepalaSekolah || ''}
                    onChange={(e) =>
                      handleInputChange('nipKepalaSekolah', e.target.value)
                    }
                    placeholder="Contoh: 19720815 199802 2 001"
                    className="w-full rounded-xl border border-teal-300 bg-white px-3 py-2 text-sm focus:border-teal-600 outline-none"
                  />
                </div>
              </div>

              {/* Nama Satuan Pendidikan & Kota Pengesahan */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Satuan Pendidikan / Sekolah
                  </label>
                  <input
                    type="text"
                    value={formData.namaSekolah}
                    onChange={(e) =>
                      handleInputChange('namaSekolah', e.target.value)
                    }
                    placeholder="Contoh: SD Negeri Nusantara 01"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Kota Tanda Tangan
                  </label>
                  <input
                    type="text"
                    value={formData.kotaPengesahan || ''}
                    onChange={(e) =>
                      handleInputChange('kotaPengesahan', e.target.value)
                    }
                    placeholder="Misal: Yogyakarta"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 outline-none"
                  />
                </div>
              </div>

              {/* Jenjang Fase & Kelas Spesifik */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Jenjang / Fase Kurikulum Nasional
                  </label>
                  <select
                    value={formData.jenjangFase}
                    onChange={(e) =>
                      handleInputChange('jenjangFase', e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:border-indigo-600 outline-none"
                  >
                    {FASE_OPTIONS.map((fase) => (
                      <option key={fase} value={fase}>
                        {fase}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Kelas Spesifik
                  </label>
                  <input
                    type="text"
                    value={formData.kelasSpesifik}
                    onChange={(e) =>
                      handleInputChange('kelasSpesifik', e.target.value)
                    }
                    placeholder="Misal: Kelas 4 SD"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 outline-none"
                  />
                </div>
              </div>

              {/* Mata Pelajaran & Saran Cepat */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mata Pelajaran
                </label>
                <input
                  type="text"
                  value={formData.mataPelajaran}
                  onChange={(e) =>
                    handleInputChange('mataPelajaran', e.target.value)
                  }
                  placeholder="Contoh: IPAS, Matematika, Bahasa Indonesia, Koding & KA..."
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 outline-none"
                />
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {MAPEL_SUGGESTIONS.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => handleInputChange('mataPelajaran', m)}
                      className={`text-[11px] px-2 py-0.5 rounded-md border transition ${
                        formData.mataPelajaran === m
                          ? 'bg-indigo-600 text-white border-indigo-600 font-medium'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topik Materi & Alokasi Waktu */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Topik / Materi Pokok
                  </label>
                  <input
                    type="text"
                    value={formData.topikMateri}
                    onChange={(e) =>
                      handleInputChange('topikMateri', e.target.value)
                    }
                    placeholder="Contoh: Siklus Air / SPLDV"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Alokasi Waktu & Pertemuan
                  </label>
                  <input
                    type="text"
                    value={formData.alokasiWaktu}
                    onChange={(e) =>
                      handleInputChange('alokasiWaktu', e.target.value)
                    }
                    placeholder="Misal: 2 JP x 45 Menit (1 Pertemuan)"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-indigo-600 outline-none"
                  />
                </div>
              </div>

              {/* Praktik Pedagogis / Model Pembelajaran Mendalam */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Praktik Pedagogis / Model Pembelajaran Mendalam
                </label>
                <select
                  value={formData.modelPembelajaran}
                  onChange={(e) =>
                    handleInputChange('modelPembelajaran', e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:border-indigo-600 outline-none"
                >
                  {MODEL_PEMBELAJARAN_OPTIONS.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              {/* 8 Dimensi Profil Lulusan (Chips) */}
              <div className="bg-indigo-50/40 p-3.5 rounded-xl border border-indigo-100">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-indigo-950">
                    8 Dimensi Profil Lulusan
                  </label>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                    Kurikulum Nasional
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mb-2">
                  Pilih dimensi kompetensi lulusan yang dikembangkan dalam
                  pembelajaran ini:
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROFIL_LULUSAN_OPTIONS.map((dimensi) => {
                    const currentSelected =
                      formData.profilLulusan || formData.profilPancasila || [];
                    const active = currentSelected.includes(dimensi);
                    return (
                      <button
                        key={dimensi}
                        type="button"
                        onClick={() =>
                          handleToggleArrayItem('profilLulusan', dimensi)
                        }
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                          active
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <Check
                          className={`w-3.5 h-3.5 ${
                            active ? 'opacity-100' : 'opacity-0 w-0'
                          }`}
                        />
                        <span>{dimensi}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Komposisi Asesmen */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
                <label className="block text-xs font-semibold text-slate-700">
                  Komposisi Asesmen Penilaian (+ Kisi-Kisi Otomatis)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {KOMPOSISI_ASESMEN_OPTIONS.map((item) => {
                    const active = formData.komposisiAsesmen.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          handleToggleArrayItem('komposisiAsesmen', item)
                        }
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border text-left transition ${
                          active
                            ? 'bg-teal-700 text-white border-teal-700'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 ${
                            active ? 'text-teal-200' : 'text-slate-300'
                          }`}
                        />
                        <span className="leading-tight">{item}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Jumlah Soal PG & Uraian */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-1">
                      Jumlah Soal PG HOTS
                    </label>
                    <select
                      value={formData.jumlahPG}
                      onChange={(e) =>
                        handleInputChange('jumlahPG', Number(e.target.value))
                      }
                      className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs"
                    >
                      <option value={3}>3 Soal PG HOTS</option>
                      <option value={5}>5 Soal PG HOTS (Ideal)</option>
                      <option value={8}>8 Soal PG HOTS</option>
                      <option value={10}>10 Soal PG HOTS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-1">
                      Jumlah Soal Uraian Analitis
                    </label>
                    <select
                      value={formData.jumlahEsai}
                      onChange={(e) =>
                        handleInputChange('jumlahEsai', Number(e.target.value))
                      }
                      className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs"
                    >
                      <option value={2}>2 Soal Uraian</option>
                      <option value={3}>3 Soal Uraian (Ideal)</option>
                      <option value={5}>5 Soal Uraian</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. BAGIAN KONTEKS TAMBAHAN (OPSIONAL) */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setShowOptionalContext(!showOptionalContext)}
                className="w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-left transition"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    3. Konteks Tambahan & Diferensiasi (Opsional)
                  </span>
                </div>
                {showOptionalContext ? (
                  <ChevronUp className="w-4 h-4 text-slate-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                )}
              </button>

              {showOptionalContext && (
                <div className="p-4 space-y-3 bg-white border-t border-slate-200">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Karakteristik Siswa, Sarana & Konteks Lokal Sekolah
                    </label>
                    <textarea
                      rows={2}
                      value={formData.karakteristikSiswa}
                      onChange={(e) =>
                        handleInputChange('karakteristikSiswa', e.target.value)
                      }
                      placeholder="Misal: Gaya belajar dominan kinestetik/visual, daerah pertanian/pesisir, tersedia proyektor..."
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs text-slate-800 focus:border-indigo-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Catatan Khusus / Diferensiasi Pembelajaran
                    </label>
                    <textarea
                      rows={2}
                      value={formData.catatanKhusus}
                      onChange={(e) =>
                        handleInputChange('catatanKhusus', e.target.value)
                      }
                      placeholder="Misal: Sertakan diferensiasi proses untuk murid yang lambat membaca, fokuskan LKPD pada eksperimen sederhana..."
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs text-slate-800 focus:border-indigo-600 outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* TOMBOL SUBMIT GENERATE AI */}
            <button
              type="submit"
              onClick={() => setShowVerificationModal(true)}
              disabled={isGenerating}
              className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm text-white shadow-lg flex items-center justify-center gap-2.5 transition ${
                isGenerating
                  ? 'bg-indigo-400 cursor-wait'
                  : 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-teal-700 hover:from-indigo-700 hover:to-teal-800 active:scale-[0.99]'
              }`}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Sedang Menyusun Perangkat Ajar AI...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5 text-amber-300" />
                  <span>Buat Modul Ajar, LKPD, Slide & Asesmen Otomatis</span>
                </>
              )}
            </button>

            {isGenerating && (
              <div className="p-4 rounded-xl bg-indigo-950 text-white space-y-2.5 animate-pulse">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-teal-300">
                  <Sparkles className="w-4 h-4 shrink-0 animate-spin" />
                  <span>{generationStep}</span>
                </div>
                <div className="w-full bg-indigo-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-400 to-amber-300 h-full w-3/4 rounded-full" />
                </div>
              </div>
            )}

            {/* FOOTER / CREDIT DIBUAT OLEH */}
            <div className="border-t border-gray-200 pt-6 flex flex-col items-center justify-center gap-2">
              <p className="text-sm font-medium text-gray-600">
                Dibuat oleh{' '}
                <span className="font-bold text-blue-600">
                  Deagi Nur Mohamad Maliki
                </span>{' '}
                dengan bantuan AI.
              </p>
              <p className="text-xs text-gray-500 italic">
                Periksa kembali hasil dan gunakan dengan bijak.
              </p>
            </div>
          </form>
        </section>

        {/* ============================================================
            KOLOM KANAN: PANEL DOKUMEN HASIL GENERASI AI (7 KOLOM GRID)
            ============================================================ */}
        <section className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 print-only-container">
          {/* NAVIGATION TABS & UTILITY TOOLBAR */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3 sm:p-4 space-y-3 no-print">
            {/* Baris 1: 4 Tab Dokumen + Tab Semua */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('modul')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl text-xs font-bold border transition ${
                  activeTab === 'modul'
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>1. Modul Ajar</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('lkpd')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl text-xs font-bold border transition ${
                  activeTab === 'lkpd'
                    ? 'bg-teal-700 text-white border-teal-700 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>2. LKPD</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('bahan')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl text-xs font-bold border transition ${
                  activeTab === 'bahan'
                    ? 'bg-purple-700 text-white border-purple-700 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Presentation className="w-4 h-4 shrink-0" />
                <span>3. Kerangka Materi</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('asesmen')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl text-xs font-bold border transition ${
                  activeTab === 'asesmen'
                    ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <ClipboardCheck className="w-4 h-4 shrink-0" />
                <span>4. Asesmen</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('semua')}
                className={`col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl text-xs font-bold border transition ${
                  activeTab === 'semua'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Layers className="w-4 h-4 shrink-0" />
                <span>Semua (Lengkap)</span>
              </button>
            </div>

            {/* Baris 2: Tombol Utilitas Guru (Edit, Kunci Jawaban, Salin, Word, Unduh PDF, Cetak) */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditMode(!isEditMode);
                    showToast(
                      !isEditMode
                        ? 'Mode Edit Langsung AKTIF: Klik bagian teks mana saja di dokumen untuk merevisi langsung.'
                        : 'Mode Edit Langsung dinonaktifkan.'
                    );
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                    isEditMode
                      ? 'bg-amber-100 text-amber-900 border-amber-400 ring-2 ring-amber-300'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>
                    {isEditMode ? 'Selesai Edit' : 'Edit Langsung Teks'}
                  </span>
                </button>

                {(activeTab === 'asesmen' || activeTab === 'semua') && (
                  <button
                    type="button"
                    onClick={() => setShowAnswerKey(!showAnswerKey)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                      showAnswerKey
                        ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                        : 'bg-slate-100 text-slate-600 border-slate-300'
                    }`}
                  >
                    {showAnswerKey ? (
                      <Eye className="w-3.5 h-3.5" />
                    ) : (
                      <EyeOff className="w-3.5 h-3.5" />
                    )}
                    <span>
                      {showAnswerKey
                        ? 'Kunci & Kisi-Kisi: Tampil'
                        : 'Mode Lembar Soal Siswa'}
                    </span>
                  </button>
                )}
              </div>

              {/* Aksi Ekspor Dokumen */}
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleCopyDocument}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadWord}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Word (.doc)</span>
                </button>

                <button
                  type="button"
                  disabled={isDownloadingPdf}
                  onClick={handleDirectDownloadPDF}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 text-white text-xs font-semibold shadow-sm transition"
                  title="Unduh langsung sebagai file PDF (.pdf) siap cetak"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>
                    {isDownloadingPdf ? 'Membuat PDF...' : 'Unduh PDF (.pdf)'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handlePrintPDF}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-sm transition"
                  title="Buka Jendela Cetak A4"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak</span>
                </button>
              </div>
            </div>

            {isEditMode && (
              <div className="px-3 py-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  <strong>Mode Edit Langsung Aktif:</strong> Klik pada judul,
                  paragraf, atau isi tabel di bawah ini untuk mengubah kalimat
                  sesuai kebutuhan sekolah Anda sebelum mengunduh PDF atau Word.
                </span>
              </div>
            )}
          </div>

          {/* ============================================================
              KANVAS KERTAS DOKUMEN (MODUL AJAR / LKPD / BAHAN AJAR / ASESMEN)
              ============================================================ */}
          <div
            ref={documentContainerRef}
            contentEditable={isEditMode}
            suppressContentEditableWarning={true}
            className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-10 space-y-10 print-only-container text-slate-800 leading-relaxed"
          >
            {/* ============================================================
                TAB 1: PERENCANAAN PEMBELAJARAN MENDALAM (MODUL AJAR KURIKULUM NASIONAL)
                ============================================================ */}
            {(activeTab === 'modul' || activeTab === 'semua') && (
              <article className="space-y-6">
                <div className="border-b-4 border-double border-indigo-950 pb-4 text-center space-y-1">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase">
                    MODUL AJAR / RPP — {generatedData.metadata.mataPelajaran}
                  </h2>
                  <p className="text-sm font-semibold text-slate-700">
                    Topik: {generatedData.metadata.topikMateri}
                  </p>
                </div>

                {/* BAGIAN A: IDENTIFIKASI & INFORMASI UMUM */}
                <section className="space-y-3">
                  <h3 className="text-base font-bold uppercase tracking-wide bg-indigo-900 text-white px-3.5 py-1.5 rounded-lg">
                    A. Identifikasi & Informasi Umum Perangkat Ajar
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                      <tbody>
                        <tr>
                          <th className="w-1/3 border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold text-slate-700">
                            Nama Penyusun
                          </th>
                          <td className="border border-slate-300 px-3.5 py-2">
                            <span className="font-semibold">
                              {generatedData.metadata.namaGuru}
                            </span>
                            {generatedData.metadata.nipGuru
                              ? ` (NIP. ${generatedData.metadata.nipGuru})`
                              : ''}
                          </td>
                        </tr>
                        <tr>
                          <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold text-slate-700">
                            Satuan Pendidikan
                          </th>
                          <td className="border border-slate-300 px-3.5 py-2">
                            {generatedData.metadata.namaSekolah}
                          </td>
                        </tr>
                        <tr>
                          <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold text-slate-700">
                            Kepala Satuan Pendidikan
                          </th>
                          <td className="border border-slate-300 px-3.5 py-2">
                            {generatedData.metadata.namaKepalaSekolah ||
                              '.....................................................'}
                            {generatedData.metadata.nipKepalaSekolah
                              ? ` (NIP. ${generatedData.metadata.nipKepalaSekolah})`
                              : ''}
                          </td>
                        </tr>
                        <tr>
                          <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold text-slate-700">
                            Jenjang / Fase / Kelas
                          </th>
                          <td className="border border-slate-300 px-3.5 py-2">
                            {generatedData.metadata.jenjangFase} —{' '}
                            {generatedData.metadata.kelasSpesifik}
                          </td>
                        </tr>
                        <tr>
                          <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold text-slate-700">
                            Mata Pelajaran & Topik
                          </th>
                          <td className="border border-slate-300 px-3.5 py-2 font-medium">
                            {generatedData.metadata.mataPelajaran} —{' '}
                            {generatedData.metadata.topikMateri}
                          </td>
                        </tr>
                        <tr>
                          <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold text-slate-700">
                            Alokasi Waktu
                          </th>
                          <td className="border border-slate-300 px-3.5 py-2">
                            {generatedData.metadata.alokasiWaktu}
                          </td>
                        </tr>
                        <tr>
                          <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold text-slate-700">
                            Praktik Pedagogis & Model
                          </th>
                          <td className="border border-slate-300 px-3.5 py-2">
                            <span className="font-semibold text-indigo-800">
                              {generatedData.metadata.modelPembelajaran}
                            </span>{' '}
                            (
                            {
                              generatedData.modulAjar.informasiUmum
                                .modelDanMetode
                            }
                            )
                          </td>
                        </tr>
                        <tr>
                          <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold text-slate-700">
                            Identifikasi Kesiapan Peserta Didik
                          </th>
                          <td className="border border-slate-300 px-3.5 py-2">
                            {
                              generatedData.modulAjar.informasiUmum
                                .kompetensiAwal
                            }{' '}
                            —{' '}
                            {
                              generatedData.modulAjar.informasiUmum
                                .targetPesertaDidik
                            }
                          </td>
                        </tr>
                        <tr>
                          <th className="border border-slate-300 bg-indigo-50/70 px-3.5 py-2 text-left font-bold text-indigo-950">
                            8 Dimensi Profil Lulusan
                          </th>
                          <td className="border border-slate-300 px-3.5 py-2 bg-indigo-50/20">
                            <ul className="list-disc pl-5 space-y-1">
                              {(
                                generatedData.modulAjar.informasiUmum
                                  .profilLulusan ||
                                generatedData.modulAjar.informasiUmum
                                  .profilPelajarPancasila ||
                                []
                              ).map((p, idx) => (
                                <li key={idx}>{p}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold text-slate-700">
                            Sarana, Prasarana & Media
                          </th>
                          <td className="border border-slate-300 px-3.5 py-2">
                            {
                              generatedData.modulAjar.informasiUmum
                                .saranaPrasarana
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* BAGIAN B: DESAIN PEMBELAJARAN MENDALAM (PRINSIP, KERANGKA & KOMPONEN INTI) */}
                <section className="space-y-4">
                  <h3 className="text-base font-bold uppercase tracking-wide bg-indigo-900 text-white px-3.5 py-1.5 rounded-lg">
                    B. Desain Pembelajaran Mendalam
                  </h3>

                  {/* 3 Prinsip Pembelajaran Mendalam: Berkesadaran, Bermakna, Menggembirakan */}
                  {generatedData.modulAjar.informasiUmum
                    .prinsipPembelajaranMendalam && (
                    <div className="space-y-2 text-sm">
                      <h4 className="font-bold text-indigo-950">
                        1. Penerapan 3 Prinsip Pembelajaran Mendalam
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200">
                          <div className="font-bold text-indigo-900 text-xs uppercase tracking-wider mb-1">
                            • Berkesadaran (Mindful)
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700">
                            {
                              generatedData.modulAjar.informasiUmum
                                .prinsipPembelajaranMendalam.berkesadaran
                            }
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200">
                          <div className="font-bold text-teal-900 text-xs uppercase tracking-wider mb-1">
                            • Bermakna (Meaningful)
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700">
                            {
                              generatedData.modulAjar.informasiUmum
                                .prinsipPembelajaranMendalam.bermakna
                            }
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                          <div className="font-bold text-amber-900 text-xs uppercase tracking-wider mb-1">
                            • Menggembirakan (Joyful)
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700">
                            {
                              generatedData.modulAjar.informasiUmum
                                .prinsipPembelajaranMendalam.menggembirakan
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4 Kerangka Pembelajaran Mendalam */}
                  {generatedData.modulAjar.informasiUmum
                    .kerangkaPembelajaran && (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-slate-300 text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900">
                            <th
                              colSpan={2}
                              className="border border-slate-300 px-3.5 py-2 text-left font-bold"
                            >
                              2. Empat Kerangka Pembelajaran Mendalam
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className="w-1/4 border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold">
                              Praktik Pedagogis
                            </th>
                            <td className="border border-slate-300 px-3.5 py-2">
                              {
                                generatedData.modulAjar.informasiUmum
                                  .kerangkaPembelajaran.praktikPedagogis
                              }
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold">
                              Kemitraan Pembelajaran
                            </th>
                            <td className="border border-slate-300 px-3.5 py-2">
                              {
                                generatedData.modulAjar.informasiUmum
                                  .kerangkaPembelajaran.kemitraanPembelajaran
                              }
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold">
                              Lingkungan Pembelajaran
                            </th>
                            <td className="border border-slate-300 px-3.5 py-2">
                              {
                                generatedData.modulAjar.informasiUmum
                                  .kerangkaPembelajaran.lingkunganPembelajaran
                              }
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-slate-300 bg-slate-50 px-3.5 py-2 text-left font-semibold">
                              Pemanfaatan Digital
                            </th>
                            <td className="border border-slate-300 px-3.5 py-2">
                              {
                                generatedData.modulAjar.informasiUmum
                                  .kerangkaPembelajaran.pemanfaatanDigital
                              }
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="space-y-3 text-sm">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-bold text-indigo-950 mb-1">
                        3. Capaian Pembelajaran (CP)
                      </h4>
                      <p className="text-slate-700">
                        {
                          generatedData.modulAjar.komponenInti
                            .capaianPembelajaran
                        }
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100">
                        <h4 className="font-bold text-indigo-950 mb-1.5">
                          4. Tujuan Pembelajaran (TP)
                        </h4>
                        <ol className="list-decimal pl-5 space-y-1.5 text-slate-700">
                          {generatedData.modulAjar.komponenInti.tujuanPembelajaran.map(
                            (tp, idx) => (
                              <li key={idx}>{tp}</li>
                            )
                          )}
                        </ol>
                      </div>

                      <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-100">
                        <h4 className="font-bold text-teal-950 mb-1.5">
                          5. Indikator Ketercapaian Tujuan Pembelajaran (IKTP /
                          KKTP)
                        </h4>
                        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                          {generatedData.modulAjar.komponenInti.indikatorKetercapaian.map(
                            (iktp, idx) => (
                              <li key={idx}>{iktp}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-1">
                          6. Pemahaman Bermakna
                        </h4>
                        <p className="text-slate-700">
                          {
                            generatedData.modulAjar.komponenInti
                              .pemahamanBermakna
                          }
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                        <h4 className="font-bold text-amber-950 mb-1.5">
                          7. Pertanyaan Pemantik
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-slate-700">
                          {generatedData.modulAjar.komponenInti.pertanyaanPemantik.map(
                            (q, idx) => (
                              <li key={idx} className="italic">
                                "{q}"
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* BAGIAN C: PENGALAMAN BELAJAR (MEMAHAMI, MENGAPLIKASI, MEREFLEKSI) */}
                <section className="space-y-4">
                  <h3 className="text-base font-bold uppercase tracking-wide bg-indigo-900 text-white px-3.5 py-1.5 rounded-lg">
                    C. Pengalaman Belajar (Memahami, Mengaplikasi, Merefleksi)
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                      <thead>
                        <tr className="bg-indigo-100 text-indigo-950">
                          <th className="border border-slate-300 px-3.5 py-2.5 w-1/4 text-left font-bold">
                            Tahap Pengalaman Belajar & Sintaks
                          </th>
                          <th className="border border-slate-300 px-3.5 py-2.5 text-left font-bold">
                            Deskripsi Aktivitas Pembelajaran Mendalam
                            (Berkesadaran, Bermakna, Menggembirakan)
                          </th>
                          <th className="border border-slate-300 px-3.5 py-2.5 w-28 text-center font-bold">
                            Alokasi Waktu
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-300 px-3.5 py-3 font-bold text-indigo-900 bg-slate-50">
                            1. Kegiatan Awal / Pendahuluan
                            <div className="text-xs font-normal text-slate-500 mt-1">
                              Berkesadaran, Apersepsi Bermakna & Menggembirakan
                            </div>
                          </td>
                          <td className="border border-slate-300 px-3.5 py-3">
                            <ol className="list-decimal pl-5 space-y-1.5">
                              {generatedData.modulAjar.kegiatanPembelajaran.pendahuluan.langkah.map(
                                (item, idx) => (
                                  <li key={idx}>{item}</li>
                                )
                              )}
                            </ol>
                          </td>
                          <td className="border border-slate-300 px-3.5 py-3 text-center font-semibold text-slate-700">
                            {
                              generatedData.modulAjar.kegiatanPembelajaran
                                .pendahuluan.durasi
                            }
                          </td>
                        </tr>

                        {generatedData.modulAjar.kegiatanPembelajaran.inti.map(
                          (sintaksItem, idx) => (
                            <tr key={idx}>
                              <td className="border border-slate-300 px-3.5 py-3 bg-indigo-50/40">
                                <div className="text-[11px] font-extrabold uppercase text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded inline-block mb-1">
                                  {sintaksItem.pengalamanBelajar ||
                                    'Kegiatan Inti — Pembelajaran Mendalam'}
                                </div>
                                <div className="font-bold text-slate-900 mt-0.5">
                                  {sintaksItem.sintaks}
                                </div>
                              </td>
                              <td className="border border-slate-300 px-3.5 py-3 space-y-2">
                                <div>
                                  <span className="font-bold text-indigo-900">
                                    Fasilitasi Guru:{' '}
                                  </span>
                                  <span>{sintaksItem.aktivitasGuru}</span>
                                </div>
                                <div>
                                  <span className="font-bold text-teal-800">
                                    Pengalaman Belajar Siswa:{' '}
                                  </span>
                                  <span>{sintaksItem.aktivitasSiswa}</span>
                                </div>
                              </td>
                              <td className="border border-slate-300 px-3.5 py-3 text-center font-semibold text-slate-700">
                                {sintaksItem.durasi}
                              </td>
                            </tr>
                          )
                        )}

                        <tr>
                          <td className="border border-slate-300 px-3.5 py-3 font-bold text-indigo-900 bg-slate-50">
                            3. Kegiatan Penutup
                            <div className="text-xs font-normal text-slate-500 mt-1">
                              Refleksi Mendalam, Evaluasi & Tindak Lanjut
                            </div>
                          </td>
                          <td className="border border-slate-300 px-3.5 py-3">
                            <ol className="list-decimal pl-5 space-y-1.5">
                              {generatedData.modulAjar.kegiatanPembelajaran.penutup.langkah.map(
                                (item, idx) => (
                                  <li key={idx}>{item}</li>
                                )
                              )}
                            </ol>
                          </td>
                          <td className="border border-slate-300 px-3.5 py-3 text-center font-semibold text-slate-700">
                            {
                              generatedData.modulAjar.kegiatanPembelajaran
                                .penutup.durasi
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* BAGIAN D: PENGAYAAN, REMEDIAL & REFLEKSI */}
                <section className="space-y-4">
                  <h3 className="text-base font-bold uppercase tracking-wide bg-indigo-900 text-white px-3.5 py-1.5 rounded-lg">
                    D. Pengayaan, Remedial & Refleksi
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="p-4 rounded-xl border border-slate-300 bg-slate-50">
                      <h4 className="font-bold text-indigo-950 mb-1">
                        Program Pengayaan
                      </h4>
                      <p>
                        {generatedData.modulAjar.pengayaanDanRemedial.pengayaan}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-300 bg-slate-50">
                      <h4 className="font-bold text-indigo-950 mb-1">
                        Program Remedial
                      </h4>
                      <p>
                        {generatedData.modulAjar.pengayaanDanRemedial.remedial}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="p-4 rounded-xl border border-slate-300">
                      <h4 className="font-bold text-slate-900 mb-1.5">
                        Refleksi Guru
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {generatedData.modulAjar.refleksi.refleksiGuru.map(
                          (r, idx) => (
                            <li key={idx}>{r}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-300">
                      <h4 className="font-bold text-slate-900 mb-1.5">
                        Refleksi Peserta Didik
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {generatedData.modulAjar.refleksi.refleksiSiswa.map(
                          (r, idx) => (
                            <li key={idx}>{r}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="p-4 rounded-xl border border-slate-300 bg-slate-50/70">
                      <h4 className="font-bold text-slate-900 mb-1.5">
                        Glosarium
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {generatedData.modulAjar.glosariumDanPustaka.glosarium.map(
                          (g, idx) => (
                            <li key={idx}>{g}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-300 bg-slate-50/70">
                      <h4 className="font-bold text-slate-900 mb-1.5">
                        Daftar Pustaka
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {generatedData.modulAjar.glosariumDanPustaka.daftarPustaka.map(
                          (d, idx) => (
                            <li key={idx}>{d}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </section>
              </article>
            )}

            {/* ============================================================
                TAB 2: Lembar Kerja Peserta Didik (LKPD SIAP CETAK)
                ============================================================ */}
            {(activeTab === 'lkpd' || activeTab === 'semua') && (
              <article
                className={`space-y-6 ${
                  activeTab === 'semua'
                    ? 'page-break-before pt-8 border-t-4 border-dashed border-slate-300'
                    : ''
                }`}
              >
                <div className="border-2 border-teal-900 rounded-xl p-5 bg-teal-50/40 space-y-4">
                  <div className="text-center border-b-2 border-teal-800 pb-3">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                      {generatedData.lkpd.judul}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm bg-white p-4 rounded-lg border border-teal-200">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold w-36 shrink-0">
                          Nama Kelompok/Siswa:
                        </span>
                        <span className="border-b border-dotted border-slate-500 flex-1 h-5"></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold w-36 shrink-0">
                          Anggota Kelompok:
                        </span>
                        <span className="border-b border-dotted border-slate-500 flex-1 h-5">
                          1.
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-36 shrink-0"></span>
                        <span className="border-b border-dotted border-slate-500 flex-1 h-5">
                          2.
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold w-28 shrink-0">
                          Kelas / Fase:
                        </span>
                        <span className="font-medium text-slate-800">
                          {generatedData.metadata.kelasSpesifik} (
                          {generatedData.metadata.jenjangFase})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold w-28 shrink-0">
                          Hari / Tanggal:
                        </span>
                        <span className="border-b border-dotted border-slate-500 flex-1 h-5"></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-28 shrink-0"></span>
                        <span className="border-b border-dotted border-slate-500 flex-1 h-5">
                          3. & 4.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-xl border border-teal-300 bg-teal-50/30">
                    <h3 className="font-bold text-teal-950 uppercase text-xs tracking-wider mb-2">
                      A. Tujuan Kegiatan Belajar
                    </h3>
                    <ol className="list-decimal pl-5 space-y-1">
                      {generatedData.lkpd.tujuanKegiatan.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-300 bg-slate-50">
                    <h3 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2">
                      B. Petunjuk Pengerjaan
                    </h3>
                    <ol className="list-decimal pl-5 space-y-1">
                      {generatedData.lkpd.petunjukPengerjaan.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ol>
                  </div>
                </div>

                <section className="p-5 rounded-xl border-2 border-indigo-200 bg-indigo-50/30 space-y-3 text-sm">
                  <div className="flex items-center justify-between border-b border-indigo-200 pb-2">
                    <h3 className="font-bold text-base text-indigo-950">
                      C. Wacana & Stimulus Masalah:{' '}
                      {generatedData.lkpd.stimulusKontekstual.judulWacana}
                    </h3>
                    <span className="text-[11px] font-semibold bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full">
                      Ayo Membaca & Mengamati!
                    </span>
                  </div>
                  <p className="text-slate-800 leading-relaxed whitespace-pre-line">
                    {generatedData.lkpd.stimulusKontekstual.isiWacana}
                  </p>
                  <div className="p-3 rounded-lg bg-white border border-indigo-200 text-xs text-indigo-950 font-medium">
                    <strong>Data / Fakta Pendukung: </strong>
                    {generatedData.lkpd.stimulusKontekstual.faktaData}
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 rounded-xl border border-slate-300">
                    <h3 className="font-bold text-slate-900 mb-2">
                      D. Alat & Bahan
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {generatedData.lkpd.alatDanBahan.map((alat, idx) => (
                        <li key={idx}>{alat}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-2 p-4 rounded-xl border border-slate-300">
                    <h3 className="font-bold text-slate-900 mb-2">
                      E. Langkah Aktivitas Kelompok
                    </h3>
                    <ol className="list-decimal pl-5 space-y-1">
                      {generatedData.lkpd.langkahAktivitas.map(
                        (langkah, idx) => (
                          <li key={idx}>{langkah}</li>
                        )
                      )}
                    </ol>
                  </div>
                </div>

                <section className="space-y-2.5 text-sm">
                  <h3 className="font-bold text-base text-slate-900">
                    F. {generatedData.lkpd.tabelPengamatan.judulTabel}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-slate-400 text-sm">
                      <thead>
                        <tr className="bg-teal-800 text-white">
                          {generatedData.lkpd.tabelPengamatan.kolom.map(
                            (kol, idx) => (
                              <th
                                key={idx}
                                className="border border-slate-400 px-3.5 py-2.5 text-left font-bold"
                              >
                                {kol}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {getLkpdRows().map((row, rIdx) => (
                          <tr key={rIdx} className="even:bg-slate-50">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className="border border-slate-400 px-3.5 py-3"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="space-y-4 text-sm">
                  <h3 className="font-bold text-base text-slate-900">
                    G. Pertanyaan Diskusi & Analisis Kelompok
                  </h3>
                  <div className="space-y-4">
                    {generatedData.lkpd.pertanyaanDiskusi.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-slate-300 space-y-2"
                      >
                        <p className="font-semibold text-slate-900">
                          {item.nomor || idx + 1}. {item.pertanyaan}
                        </p>
                        <p className="text-xs text-teal-800 italic">
                          Petunjuk Berpikir: {item.petunjukJawaban}
                        </p>
                        <div className="pt-2 space-y-3">
                          <div className="border-b border-dotted border-slate-400 h-5 w-full"></div>
                          <div className="border-b border-dotted border-slate-400 h-5 w-full"></div>
                          <div className="border-b border-dotted border-slate-400 h-5 w-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="p-5 rounded-xl border-2 border-teal-700 bg-teal-50/20 space-y-3 text-sm">
                  <h3 className="font-bold text-base text-teal-950">
                    H. Kesimpulan Hasil Belajar Kelompok
                  </h3>
                  <p className="text-slate-700 leading-loose">
                    {generatedData.lkpd.panduanKesimpulan}
                  </p>
                  <div className="border-b border-dotted border-slate-400 h-6 w-full"></div>
                  <div className="border-b border-dotted border-slate-400 h-6 w-full"></div>
                </section>
              </article>
            )}

            {/* ============================================================
                TAB 3: LAMPIRAN BAHAN AJAR, KERANGKA SLIDE PPT & ICE BREAKING
                ============================================================ */}
            {(activeTab === 'bahan' || activeTab === 'semua') &&
              generatedData.bahanAjar && (
                <article
                  className={`space-y-6 ${
                    activeTab === 'semua'
                      ? 'page-break-before pt-8 border-t-4 border-dashed border-slate-300'
                      : ''
                  }`}
                >
                  <div className="border-b-4 border-double border-purple-900 pb-4 text-center space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-800">
                      Lampiran Modul Ajar
                    </p>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase">
                      KERANGKA SLIDE MATERI
                    </h2>
                    <p className="text-sm font-semibold text-slate-700">
                      {generatedData.metadata.mataPelajaran} (
                      {generatedData.metadata.kelasSpesifik}) —{' '}
                      {generatedData.metadata.topikMateri}
                    </p>
                  </div>

                  {/* 1. RINGKASAN MATERI AJAR (BAHAN BACAAN GURU & SISWA) */}
                  <section className="space-y-3 text-sm">
                    <h3 className="text-base font-bold uppercase tracking-wide bg-purple-900 text-white px-3.5 py-1.5 rounded-lg">
                      A. Bahan Bacaan Guru & Murid (Ringkasan Materi Esensial)
                    </h3>
                    <div className="space-y-3">
                      {generatedData.bahanAjar.ringkasanMateri.map(
                        (item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl border border-slate-300 bg-slate-50/70 space-y-1.5"
                          >
                            <h4 className="font-bold text-purple-950 text-sm">
                              {item.subjudul}
                            </h4>
                            <p className="text-slate-700 whitespace-pre-line">
                              {item.uraian}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </section>

                  {/* 2. PANDUAN ICE BREAKING KELAS */}
                  <section className="space-y-3 text-sm">
                    <h3 className="text-base font-bold uppercase tracking-wide bg-purple-900 text-white px-3.5 py-1.5 rounded-lg">
                      B. Panduan Ice Breaking & Pencair Suasana Kelas
                    </h3>
                    <div className="p-5 rounded-xl border-2 border-amber-300 bg-amber-50/50 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-amber-950 text-base">
                        <Smile className="w-5 h-5 text-amber-600 shrink-0" />
                        <span>
                          {generatedData.bahanAjar.iceBreaking.namaKegiatan}
                        </span>
                      </div>
                      <p className="text-slate-800 whitespace-pre-line">
                        {generatedData.bahanAjar.iceBreaking.instruksi}
                      </p>
                    </div>
                  </section>

                  {/* 3. KERANGKA SLIDE PRESENTASI GURU (SIAP SALIN KE PPT / CANVA) */}
                  <section className="space-y-3 text-sm">
                    <h3 className="text-base font-bold uppercase tracking-wide bg-purple-900 text-white px-3.5 py-1.5 rounded-lg">
                      C. Kerangka Slide Presentasi Mengajar (6 Slide Siap Buat
                      di PPT / Canva)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {generatedData.bahanAjar.kerangkaSlide.map((s, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-purple-200 bg-purple-50/30 space-y-2"
                        >
                          <div className="text-xs font-bold uppercase tracking-wider text-purple-700">
                            {s.slide}
                          </div>
                          <h4 className="font-bold text-slate-900">
                            {s.judul}
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                            {s.poinIsi.map((p, pIdx) => (
                              <li key={pIdx}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                </article>
              )}

            {/* ============================================================
                TAB 4: ASESMEN, RUBRIK & KISI-KISI PENULISAN SOAL LENGKAP
                ============================================================ */}
            {(activeTab === 'asesmen' || activeTab === 'semua') && (
              <article
                className={`space-y-8 ${
                  activeTab === 'semua'
                    ? 'page-break-before pt-8 border-t-4 border-dashed border-slate-300'
                    : ''
                }`}
              >
                <div className="border-b-4 border-double border-amber-900 pb-4 text-center space-y-1">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase">
                    ASESMEN — {generatedData.metadata.mataPelajaran}
                  </h2>
                  <p className="text-sm font-semibold text-slate-700">
                    {generatedData.metadata.kelasSpesifik} • Topik:{' '}
                    {generatedData.metadata.topikMateri}
                  </p>
                </div>

                {/* 1. ASESMEN DIAGNOSTIK / FORMATIF AWAL */}
                <section className="space-y-3 text-sm">
                  <h3 className="text-base font-bold uppercase tracking-wide bg-amber-800 text-white px-3.5 py-1.5 rounded-lg">
                    1. Asesmen Formatif Awal (Diagnostik Kesiapan Belajar)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-300 bg-slate-50">
                      <h4 className="font-bold text-slate-900 mb-1.5">
                        A. Pertanyaan Diagnostik Non-Kognitif
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {generatedData.asesmen.asesmenDiagnostik.nonKognitif.map(
                          (q, idx) => (
                            <li key={idx}>{q}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-300 bg-slate-50">
                      <h4 className="font-bold text-slate-900 mb-1.5">
                        B. Pertanyaan Diagnostik Kognitif Awal
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {generatedData.asesmen.asesmenDiagnostik.kognitifAwal.map(
                          (q, idx) => (
                            <li key={idx}>{q}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
                    <strong>Tindak Lanjut Hasil Diagnostik: </strong>
                    {
                      generatedData.asesmen.asesmenDiagnostik
                        .tindakLanjutDiagnostik
                    }
                  </div>
                </section>

                {/* 2. RUBRIK PENILAIAN KINERJA / SIKAP & KETERAMPILAN */}
                <section className="space-y-3 text-sm">
                  <h3 className="text-base font-bold uppercase tracking-wide bg-amber-800 text-white px-3.5 py-1.5 rounded-lg">
                    2. {generatedData.asesmen.rubrikKinerja.judulRubrik}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-slate-300 text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-amber-100 text-amber-950">
                          <th className="border border-slate-300 px-3 py-2.5 w-1/5 text-left font-bold">
                            Aspek / Kriteria Penilaian
                          </th>
                          <th className="border border-slate-300 px-3 py-2.5 w-1/5 text-left font-bold">
                            Sangat Baik (Skor 4)
                          </th>
                          <th className="border border-slate-300 px-3 py-2.5 w-1/5 text-left font-bold">
                            Baik (Skor 3)
                          </th>
                          <th className="border border-slate-300 px-3 py-2.5 w-1/5 text-left font-bold">
                            Cukup (Skor 2)
                          </th>
                          <th className="border border-slate-300 px-3 py-2.5 w-1/5 text-left font-bold">
                            Perlu Bimbingan (Skor 1)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {generatedData.asesmen.rubrikKinerja.kriteria.map(
                          (item, idx) => (
                            <tr key={idx} className="even:bg-slate-50">
                              <td className="border border-slate-300 px-3 py-2.5 font-bold text-slate-900">
                                {item.aspek}
                              </td>
                              <td className="border border-slate-300 px-3 py-2.5">
                                {item.sangatBaik}
                              </td>
                              <td className="border border-slate-300 px-3 py-2.5">
                                {item.baik}
                              </td>
                              <td className="border border-slate-300 px-3 py-2.5">
                                {item.cukup}
                              </td>
                              <td className="border border-slate-300 px-3 py-2.5">
                                {item.perluBimbingan}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 3. TABEL KISI-KISI PENULISAN SOAL (FITUR BARU UNTUK ADMINISTRASI GURU) */}
                {showAnswerKey && generatedData.asesmen.kisiKisiSoal && (
                  <section className="space-y-3 text-sm">
                    <h3 className="text-base font-bold uppercase tracking-wide bg-amber-800 text-white px-3.5 py-1.5 rounded-lg flex items-center justify-between">
                      <span>
                        3. Tabel Kisi-Kisi Penulisan Soal Evaluasi (Blueprint
                        Asesmen)
                      </span>
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-slate-300 text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-amber-100 text-amber-950">
                            <th className="border border-slate-300 px-3 py-2 w-12 text-center font-bold">
                              No
                            </th>
                            <th className="border border-slate-300 px-3 py-2 w-1/4 text-left font-bold">
                              Tujuan Pembelajaran (TP)
                            </th>
                            <th className="border border-slate-300 px-3 py-2 text-left font-bold">
                              Indikator Butir Soal
                            </th>
                            <th className="border border-slate-300 px-3 py-2 w-28 text-center font-bold">
                              Level Kognitif
                            </th>
                            <th className="border border-slate-300 px-3 py-2 w-28 text-center font-bold">
                              Bentuk & No. Soal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {generatedData.asesmen.kisiKisiSoal.map((kk, idx) => (
                            <tr key={idx} className="even:bg-slate-50">
                              <td className="border border-slate-300 px-3 py-2 text-center font-semibold">
                                {kk.nomor || idx + 1}
                              </td>
                              <td className="border border-slate-300 px-3 py-2">
                                {kk.tujuanPembelajaran}
                              </td>
                              <td className="border border-slate-300 px-3 py-2">
                                {kk.indikatorSoal}
                              </td>
                              <td className="border border-slate-300 px-3 py-2 text-center font-semibold text-indigo-900">
                                {kk.levelKognitif}
                              </td>
                              <td className="border border-slate-300 px-3 py-2 text-center">
                                {kk.nomorSoal}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {/* 4. SOAL EVALUASI PILIHAN GANDA HOTS */}
                <section className="space-y-4 text-sm">
                  <h3 className="text-base font-bold uppercase tracking-wide bg-amber-800 text-white px-3.5 py-1.5 rounded-lg">
                    4. Instrumen Evaluasi Kognitif — Pilihan Ganda Berorientasi
                    HOTS
                  </h3>

                  <div className="space-y-4">
                    {generatedData.asesmen.soalPilihanGanda.map((soal, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-slate-300 bg-white space-y-2.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-indigo-900">
                            Soal Nomor {soal.nomor || idx + 1}
                          </span>
                          {showAnswerKey && (
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                              Level Kognitif: {soal.levelKognitif}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-900 font-medium">
                          {soal.pertanyaan}
                        </p>
                        <div className="grid grid-cols-1 gap-1.5 pl-2 pt-1">
                          {soal.opsi.map((op, oIdx) => (
                            <div key={oIdx} className="text-slate-800">
                              {op}
                            </div>
                          ))}
                        </div>

                        {showAnswerKey && (
                          <div className="mt-3 pt-2.5 border-t border-dashed border-slate-300 bg-teal-50/60 p-3 rounded-lg text-xs space-y-1">
                            <div className="font-bold text-teal-900">
                              Kunci Jawaban:{' '}
                              <span className="px-2 py-0.5 bg-teal-700 text-white rounded">
                                {soal.kunci}
                              </span>
                            </div>
                            <div className="text-slate-700">
                              <strong>Pembahasan: </strong>
                              {soal.pembahasan}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* 5. SOAL URAIAN / ESAI ANALITIS */}
                <section className="space-y-4 text-sm">
                  <h3 className="text-base font-bold uppercase tracking-wide bg-amber-800 text-white px-3.5 py-1.5 rounded-lg">
                    5. Instrumen Evaluasi Kognitif — Uraian / Esai Analitis
                  </h3>

                  <div className="space-y-4">
                    {generatedData.asesmen.soalUraian.map((esai, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-slate-300 bg-white space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-indigo-900">
                            Uraian Nomor {esai.nomor || idx + 1}
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                            {esai.levelKognitif} • Skor Maks:{' '}
                            {esai.skorMaksimal}
                          </span>
                        </div>
                        <p className="text-slate-900 font-medium">
                          {esai.pertanyaan}
                        </p>

                        {showAnswerKey ? (
                          <div className="mt-2 p-3 rounded-lg bg-indigo-50/60 border border-indigo-200 text-xs space-y-1">
                            <div className="font-bold text-indigo-950">
                              Kunci Jawaban & Pedoman Penskoran:
                            </div>
                            <p className="text-slate-700">
                              {esai.kunciDanPedoman}
                            </p>
                          </div>
                        ) : (
                          <div className="pt-2 space-y-3">
                            <div className="border-b border-dotted border-slate-400 h-5 w-full"></div>
                            <div className="border-b border-dotted border-slate-400 h-5 w-full"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* 6. RUMUS NILAI AKHIR & INTERVAL KKTP */}
                {showAnswerKey && (
                  <section className="p-5 rounded-xl border-2 border-slate-300 bg-slate-50 space-y-3 text-sm">
                    <h3 className="font-bold text-base text-slate-900">
                      6. Pedoman Perhitungan Nilai Akhir & Kriteria Ketercapaian
                      (KKTP)
                    </h3>
                    <div className="p-3 rounded-lg bg-white border border-slate-200 font-semibold text-indigo-950">
                      {generatedData.asesmen.pedomanPenskoran.rumusNilai}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600 mb-1.5">
                        Interval Nilai & Tindak Lanjut KKTP:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                        {generatedData.asesmen.pedomanPenskoran.kktpInterval.map(
                          (kktp, idx) => (
                            <li key={idx}>{kktp}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </section>
                )}
              </article>
            )}

            {/* ============================================================
                BLOK TANDA TANGAN PENGESAHAN OTOMATIS (GURU & KEPALA SEKOLAH)
                ============================================================ */}
            <div className="pt-8 mt-8 border-t border-slate-300 grid grid-cols-2 gap-8 text-center text-sm">
              <div className="space-y-16">
                <div>
                  <p>Mengetahui,</p>
                  <p className="font-bold">
                    Kepala {generatedData.metadata.namaSekolah}
                  </p>
                </div>
                <div>
                  <p className="font-bold underline">
                    {generatedData.metadata.namaKepalaSekolah
                      ? generatedData.metadata.namaKepalaSekolah
                      : '( ..................................................... )'}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    NIP.{' '}
                    {generatedData.metadata.nipKepalaSekolah
                      ? generatedData.metadata.nipKepalaSekolah
                      : '...........................................'}
                  </p>
                </div>
              </div>
              <div className="space-y-16">
                <div>
                  <p>
                    {generatedData.metadata.kotaPengesahan
                      ? `${generatedData.metadata.kotaPengesahan}, `
                      : ''}
                    {new Date().toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="font-bold">Guru Mata Pelajaran</p>
                </div>
                <div>
                  <p className="font-bold underline">
                    {generatedData.metadata.namaGuru ||
                      '( ..................................................... )'}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    NIP.{' '}
                    {generatedData.metadata.nipGuru
                      ? generatedData.metadata.nipGuru
                      : '...........................................'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================
          MODAL KUIS INTERAKTIF KELAS (UNTUK PROYEKTOR)
          ============================================================ */}
      {showQuizModal && activeQuizQuestion && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 no-print">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-3xl w-full overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 bg-gradient-to-r from-indigo-900 to-teal-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-300" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg">
                    Kuis Interaktif Kelas —{' '}
                    {generatedData.metadata.mataPelajaran}
                  </h3>
                  <p className="text-xs text-indigo-200">
                    Soal {quizIndex + 1} dari {currentQuizList.length} • Level:{' '}
                    {activeQuizQuestion.levelKognitif}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm">
                  Skor Kelas: {quizScore}
                </div>
                <button
                  type="button"
                  onClick={() => setShowQuizModal(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
                {activeQuizQuestion.pertanyaan}
              </div>

              <div className="grid grid-cols-1 gap-3">
                {activeQuizQuestion.opsi.map((op, idx) => {
                  const letter = ['A', 'B', 'C', 'D'][idx];
                  const answeredData = quizAnswered[quizIndex];
                  const isSelected = answeredData?.selected === letter;
                  const isCorrectOption = letter === activeQuizQuestion.kunci;

                  let btnStyle =
                    'bg-white hover:bg-indigo-50 border-slate-300 text-slate-800';
                  if (answeredData) {
                    if (isCorrectOption) {
                      btnStyle =
                        'bg-emerald-600 text-white border-emerald-600 font-bold shadow-md';
                    } else if (isSelected && !isCorrectOption) {
                      btnStyle =
                        'bg-rose-600 text-white border-rose-600 font-bold';
                    } else {
                      btnStyle = 'bg-slate-100 text-slate-400 border-slate-200';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectQuizAnswer(letter)}
                      className={`w-full p-4 rounded-xl border-2 text-left text-sm sm:text-base transition flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{op}</span>
                      {answeredData && isCorrectOption && (
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {quizAnswered[quizIndex] && (
                <div
                  className={`p-4 rounded-2xl border text-sm space-y-1 ${
                    quizAnswered[quizIndex].isCorrect
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-amber-50 border-amber-300 text-amber-950'
                  }`}
                >
                  <div className="font-extrabold text-base">
                    {quizAnswered[quizIndex].isCorrect
                      ? '🎉 Luar Biasa! Jawaban Tepat!'
                      : `💡 Kurang Tepat. Kunci Jawaban yang benar adalah ${activeQuizQuestion.kunci}`}
                  </div>
                  <p className="text-slate-700">
                    <strong>Pembahasan: </strong>
                    {activeQuizQuestion.pembahasan}
                  </p>
                </div>
              )}
            </div>

            <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                disabled={quizIndex === 0}
                onClick={() => setQuizIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl border border-slate-300 bg-white disabled:opacity-40 text-xs sm:text-sm font-semibold"
              >
                ← Soal Sebelumnya
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleOpenInteractiveQuiz}
                  className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200"
                >
                  Ulangi Kuis
                </button>
                {quizIndex < currentQuizList.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setQuizIndex((prev) => prev + 1)}
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold"
                  >
                    Soal Berikutnya →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowQuizModal(false)}
                    className="px-5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold"
                  >
                    Selesai Kuis
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          MODAL PRATINJAU CETAK & UNDUH PDF (FALLBACK BILA POPUP DIBLOKIR)
          ============================================================ */}
      {showPrintPreviewModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4 no-print">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden">
            <div className="px-6 py-4 bg-teal-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Printer className="w-5 h-5 text-teal-300" />
                <h3 className="font-bold text-base">
                  Cetak atau Simpan sebagai PDF
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPrintPreviewModal(false)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-sm text-slate-700">
              <p>
                Peramban Anda membatasi jendela popup cetak otomatis. Anda dapat
                langsung mengunduh file <strong>.PDF</strong> siap cetak atau
                memicu dialog printer bawaan:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowPrintPreviewModal(false);
                    handleDirectDownloadPDF();
                  }}
                  className="p-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold flex items-center justify-center gap-2 shadow-md transition"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Unduh File PDF (.pdf)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPrintPreviewModal(false);
                    setTimeout(() => window.print(), 250);
                  }}
                  className="p-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold flex items-center justify-center gap-2 shadow-md transition"
                >
                  <Printer className="w-4 h-4" />
                  <span>Buka Dialog Printer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          MODAL RIWAYAT PERANGKAT AJAR (LOCALSTORAGE)
          ============================================================ */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 no-print">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden">
            <div className="px-6 py-4 bg-indigo-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FolderOpen className="w-5 h-5 text-teal-400" />
                <div>
                  <h3 className="font-bold text-base">
                    Riwayat Perangkat Ajar Tersimpan
                  </h3>
                  <p className="text-xs text-indigo-200">
                    Tersimpan otomatis di peramban (LocalStorage) Anda
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowHistoryModal(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-3 flex-1">
              {historyList.length === 0 ? (
                <div className="text-center py-12 space-y-2 text-slate-500">
                  <History className="w-10 h-10 mx-auto text-slate-300" />
                  <p className="font-semibold text-sm">
                    Belum ada riwayat perangkat ajar yang disimpan.
                  </p>
                  <p className="text-xs">
                    Setiap kali Anda menekan tombol Buat Perangkat Ajar,
                    hasilnya otomatis tersimpan di sini.
                  </p>
                </div>
              ) : (
                historyList.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                          {item.metadata?.mataPelajaran}
                        </span>
                        <span className="text-xs text-slate-500">
                          {item.metadata?.kelasSpesifik} • {item.createdAt}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">
                        {item.metadata?.topikMateri}
                      </h4>
                      <p className="text-xs text-slate-600">
                        Model: {item.metadata?.modelPembelajaran} • Penyusun:{' '}
                        {item.metadata?.namaGuru}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setGeneratedData(item);
                          setShowHistoryModal(false);
                          showToast(
                            `Perangkat ajar "${item.metadata?.topikMateri}" berhasil dibuka kembali!`
                          );
                        }}
                        className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition"
                      >
                        Buka Dokumen
                      </button>

                      {deleteConfirmId === item.id ? (
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleDeleteHistory(item.id)}
                            className="px-2.5 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold"
                          >
                            Ya, Hapus
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteConfirmId(null)}
                            className="px-2 py-1.5 rounded-lg bg-slate-200 text-slate-700 text-xs"
                          >
                            Batal
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setDeleteConfirmId(item.id)}
                          className="p-1.5 rounded-lg border border-slate-300 hover:bg-red-50 hover:text-red-600 text-slate-500 transition"
                          title="Hapus Riwayat"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setShowHistoryModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold"
              >
                Tutup Panel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          MODAL PENGATURAN MESIN AI / GEMINI API KEY (OPSIONAL)
          ============================================================ */}
      {showApiModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 no-print">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden">
            <div className="px-6 py-4 bg-indigo-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <KeyRound className="w-5 h-5 text-amber-300" />
                <div>
                  <h3 className="font-bold text-base">
                    Pengaturan Mesin Generator AI
                  </h3>
                  <p className="text-xs text-indigo-200">
                    Berjalan otomatis tanpa API Key atau gunakan Gemini API Key
                    pribadi
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowApiModal(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-sm">
              <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>
                    Smart Contextual Kurikulum Merdeka Engine (Aktif Otomatis)
                  </span>
                </div>
                <p className="text-slate-700">
                  Aplikasi ini sudah dilengkapi mesin penyusun perangkat ajar
                  kontekstual yang langsung memproses CP, TP, Model
                  Pembelajaran, LKPD, Bahan Ajar, dan Kisi-Kisi Soal HOTS tanpa
                  memerlukan API Key eksternal.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Google Gemini API Key (Opsional)
                </label>
                <input
                  type="password"
                  value={customApiKey}
                  onChange={(e) => setCustomApiKey(e.target.value)}
                  placeholder="Kosongkan untuk memakai Smart Engine bawaan, atau tempel AIzaSy..."
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-indigo-600 outline-none"
                />
                <p className="text-[11px] text-slate-500 mt-1.5">
                  Jika Anda memiliki kunci API dari Google AI Studio, Anda dapat
                  memasukkannya di atas. Jika dikosongkan, aplikasi otomatis
                  menggunakan Smart Engine bawaan tanpa error.
                </p>
              </div>
            </div>

            <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => handleSaveApiKey('')}
                className="px-3.5 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
              >
                Gunakan Mesin Bawaan (Tanpa Key)
              </button>
              <button
                type="button"
                onClick={() => handleSaveApiKey(customApiKey)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition"
              >
                Simpan Pengaturan
              </button>
            </div>
          </div>
        </div>
      )}
      {/* POP-UP PERINGATAN / VERIFIKASI HASIL AI */}
      {showVerificationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100">
            <div className="flex items-center gap-3 text-amber-600 mb-4">
              <div className="p-3 bg-amber-50 rounded-full">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Verifikasi Perangkat Ajar AI
                </h3>
                <p className="text-xs text-gray-500">
                  Kebijakan Penggunaan Kecerdasan Buatan
                </p>
              </div>
            </div>

            <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 mb-5 text-sm text-amber-900 leading-relaxed space-y-2">
              <p className="font-medium">
                Perhatian Bapak/Ibu Guru, hasil generasi kecerdasan buatan (AI)
                ini bersifat sebagai draf/bantuan referensi awal.
              </p>
              <p className="text-xs text-amber-800">
                Guru <strong>wajib</strong> memeriksa, meninjau ulang
                (*review*), dan menyesuaikan materi, tujuan pembelajaran, LKPD,
                serta instrumen asesmen agar selaras dengan karakteristik
                peserta didik, sarana prasarana sekolah, serta konteks nyata di
                kelas Anda.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowVerificationModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
              >
                Batal / Periksa Kembali
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowVerificationModal(false);
                  handleGenerate(); // Menjalankan fungsi generate asli Anda
                }}
                className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Saya Paham, Lanjutkan Generate</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
