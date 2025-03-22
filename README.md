# PROYEK WEBSITE - ABDUL LATIF

## Deskripsi Proyek

### Tujuan
Website portfolio ini dirancang untuk memperkenalkan Abdul Latif sebagai seorang Fotographer dan Editor. Tujuan utama dari website ini adalah untuk:
- Menampilkan kemampuan dan pengalaman Abdul Latif
- Menyediakan informasi kontak dan cara menghubungi Abdul Latif
- Menunjukkan proyek-proyek yang telah dikerjakan

### Fitur Utama
1. **Mode Gelap/Terang (Dark/Light Mode)**
   - Toggle switch untuk beralih antara mode gelap dan terang

2. **Navigasi Responsif**
   - Indikator halaman aktif
   - Menu navigasi yang kolaps menjadi hamburger menu pada tampilan mobile

3. **Halaman Beranda**
   - Hero section dengan pengenalan singkat

4. **Halaman Portfolio**
   - Informasi personal dan latar belakang pendidikan
   - Timeline pendidikan dan pengalaman
   - Gallery proyek dalam bentuk grid dengan animasi hover

5. **Halaman Kontak**
   - Form kontak dengan validasi
   - Informasi kontak personal (lokasi, email, telepon)
   - Tautan media sosial

6. **Footer Komprehensif**
   - Link navigasi cepat
   - Pengulangan informasi kontak
   - Tautan sosial media (ongoing)

### Teknologi yang Digunakan

1. **HTML5**
   - Struktur semantik untuk SEO yang lebih baik
   - Atribut ARIA untuk aksesibilitas

2. **CSS3**
   - CSS Variables untuk manajemen warna dan tema
   - Flexbox dan Grid untuk layout
   - Media queries untuk desain responsif
   - Animasi dan transisi CSS
   - Custom scrollbar

3. **JavaScript**
   - Manipulasi DOM untuk interaktivitas
   - Event handling untuk user input
   - Toggle dark/light mode
   - Filter portfolio
   - Form validation
   - Smooth scrolling
   - Animasi

4. **Font Awesome (v6.4.0)**
   - Ikon untuk elemen UI
   - Ikon sosial media

5. **Google Fonts**
   - Font Montserrat untuk tipografi yang konsisten

## Struktur Folder dan File

```
latif/
│
├── index.html                # Halaman beranda
├── portfolio.html            # Halaman portfolio
├── contact.html              # Halaman kontak
├── styles.css                # Stylesheet utama
├── script.js                 # JavaScript utama
│
└── images/                      # Folder untuk gambar
    ├── latif.jpg               # Foto profil
    ├── foto.jpg               # Gambar proyek foto
    ├── thumbnail.jpg            # Gambar proyek editing
    ├── thumbnail2.jpg          # Gambar proyek editing
    ├── hh.png                # Gambar proyek
    └── g2.png                # Gambar proyek
```

### Deskripsi File

1. **index.html**
   - Halaman beranda website
   - Berisi hero section dan informasi layanan
   - Memperkenalkan Abdul Latif sebagai Fotographer

2. **portfolio.html**
   - Menampilkan gallery proyek dengan filter

3. **contact.html**
   - Form kontak untuk mengirim pesan
   - Menampilkan informasi kontak (lokasi, email, telepon)
   - Links ke sosial media

4. **styles.css**
   - Mendefinisikan seluruh styling website
   - Mengatur tema gelap dan terang
   - Mendefinisikan layout responsif
   - Mengatur animasi dan transisi
   - Mendefinisikan komponen UI

5. **script.js**
   - Mengatur toggle dark/light mode
   - Menangani menu mobile
   - Mengatur filter portfolio
   - Validasi form kontak
   - Mengimplementasikan efek scroll
   - Menambahkan animasi UI

## Fitur Teknis Utama

### 1. Dark/Light Mode
Website mengimplementasikan sistem tema dual dengan class `dark-mode` dan `light-mode` yang dapat ditoggle. CSS Variables digunakan untuk mengelola perbedaan warna antara dua mode dengan mulus.

### 2. Responsivitas
Website dirancang dengan pendekatan mobile-first dan menggunakan media queries untuk memastikan tampilan yang optimal di semua ukuran layar. Layout menggunakan kombinasi flexbox dan grid untuk fleksibilitas maksimum.

### 3. Animasi UI
Terdapat berbagai animasi UI untuk meningkatkan pengalaman pengguna, termasuk:
- Hover effects pada kartu layanan
- Animasi portfolio items
- Animasi scroll
- Transisi halaman dan komponen

### 4. Filtering Portfolio
JavaScript digunakan untuk memfilter dan menampilkan proyek berdasarkan kategori dengan animasi transisi yang halus.

### 5. Form Validasi
Form kontak dilengkapi dengan validasi sisi klien untuk memastikan pengiriman data yang benar, dengan umpan balik visual untuk pengguna.

## Kesimpulan

Website portfolio ini berhasil mencapai tujuannya untuk menampilkan identitas profesional Abdul Latif sebagai Fotographer dan Editor. Desain modern dengan fitur interaktif seperti dark/light mode dan filtering portfolio meningkatkan pengalaman pengguna. Website ini responsif dan dapat diakses dengan baik di berbagai perangkat.

Kedepannya, proyek ini dapat ditingkatkan dengan menambahkan fitur seperti:
- Integrasi backend untuk form kontak
- Animasi loading halaman
- Galeri proyek yang lebih detail
- Blog atau artikel teknis
- Portfolio interaktif dengan lebih banyak detail proyek

