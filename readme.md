# Praktikum DOM, Event JavaScript, dan Mini Project Workshop

Proyek ini dibuat untuk memenuhi modul **Praktikum Pemrograman Web (OBE)** mengenai manipulasi **Document Object Model (DOM)**, penanganan **Event**, validasi form interaktif, serta implementasi **Mini Project — Form Pendaftaran Workshop**.

---

## 📂 Struktur Berkas Proyek

Proyek ini tersusun secara terpisah (*modular*) untuk mempermudah pengelolaan kode:

```text
.
├── index.html     # Halaman utama latihan praktikum DOM & Eksperimen Mandiri
├── script.js      # Script logika JavaScript untuk index.html
├── workshop.html  # Halaman Mini Project (Form Pendaftaran Workshop)
├── workshop.js    # Script logika JavaScript untuk workshop.html
├── style.css      # Stylesheet terpusat (layout card, tombol, & desain responsif)
└── README.md      # Dokumentasi proyek
```

---

## 🎯 Fitur & Implementasi Kode

### A. Halaman Utama (`index.html` & `script.js`)

1. **Manipulasi DOM & Event Input**
   - Mengubah teks header dan status pesan secara langsung saat halaman dimuat.
   - Penghitung karakter otomatis (`input` event) untuk input nama.
   - Penambahan waktu lokal saat tombol *"Klik Saya"* ditekan.

2. **Manipulasi Gaya CSS & Toggle Paragraf (Eksperimen Mandiri #4)**
   - Tombol toggle untuk menambahkan/menghapus kelas CSS `.highlight` dan `.teks-besar`.
   - Tombol sembunyi/tampilkan paragraf dengan memanfaatkan manipulasi kelas CSS `.tersembunyi` (`display: none`).

3. **Form Pendaftaran & Validasi (Eksperimen Mandiri #2 & #3)**
   - **Validasi Nama:** Memastikan nama tidak kosong dan memiliki **minimal 3 karakter**.
   - **Validasi Email:** Memeriksa format alamat email menggunakan RegEx (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
   - **Validasi Usia:** Memastikan usia berupa bilangan bulat antara 17 hingga 100 tahun.
   - **Event Change Dropdown:** Menangkap event `change` pada *dropdown* sesi workshop dan menampilkan sesi yang dipilih di bawah form.

4. **Daftar Tugas / To-Do List (Eksperimen Mandiri #1)**
   - Penambahan item tugas baru secara dinamis menggunakan `document.createElement()`.
   - Fitur **Tandai Selesai** (*strikethrough*) pada teks tugas.
   - Tombol **Hapus** untuk menghapus item tugas individual dari DOM.

---

### B. Mini Project (`workshop.html` & `workshop.js`)

Halaman khusus **Form Pendaftaran Workshop** dirancang dengan fitur interaktif lengkap:

* ✅ **Validasi Input Real-Time & Submit:** Validasi nama (min. 3 karakter), format email, dan pilihan sesi workshop.
* ✅ **Live Character Counter:** Menghitung jumlah karakter input nama secara langsung ($0/50$).
* ✅ **Live Preview (Ringkasan Pendaftaran):** Menampilkan ringkasan data yang diisi pengguna secara *real-time* sebelum form dikirim.
* ✅ **Tombol Reset Form:** Mengosongkan seluruh isi input dan mengembalikan status *preview* ke tampilan awal.
* ✅ **Penerapan Multi-Event:** Menggunakan `addEventListener()` untuk event `input`, `change`, `click`, dan `submit`.
* ✅ **Desain Responsif:** Tampilan yang nyaman diakses pada perangkat desktop maupun perangkat *mobile*.

---

## ❓ Jawaban Eksperimen Mandiri #5

> **Pertanyaan:** *Coba pindahkan script tanpa `defer` ke bagian `head`. Amati kemungkinan masalah dan jelaskan penyababnya.*

### **Analisis & Penjelasan:**
1. **Masalah yang Terjadi:**
   Jika elemen `<script src="script.js"></script>` diletakkan di dalam `<head>` **tanpa** atribut `defer`, browser akan menampilkan pesan kesalahan di console:
   ```text
   Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
   ```
   Akibatnya, interaktivitas JavaScript tidak berjalan sama sekali.

2. **Penyebab Utama:**
   - Browser membaca dokumen HTML secara berurutan dari atas ke bawah (*sequential parsing*).
   - Tanpa atribut `defer`, skrip akan langsung diunduh dan dieksekusi saat proses pembacaan sampai di bagian `<head>`.
   - Pada saat skrip dieksekusi, elemen-elemen di bagian `<body>` (seperti tombol, form, dan input) **belum dimuat/dibuat di DOM DOM Tree**.
   - Ketika JavaScript mengeksekusi fungsi `document.getElementById()`, DOM mengembalikan nilai `null` karena elemen target belum ada.

3. **Solusi Penanganan:**
   - Gunakan atribut `defer` pada tag `<script>` di bagian `<head>` agar eksekusi script ditunda hingga HTML selesai di-parse.
   - Atau letakkan `<script>` di akhir bagian `<body>` sebelum tag penutup `</body>`.
   - Atau bungkus logika JS di dalam event listener `DOMContentLoaded`.

---

## 💻 Cara Menjalankan Proyek

1. Unduh atau *clone* seluruh berkas proyek ke dalam satu direktori.
2. Buka berkas `index.html` menggunakan peramban (*web browser*) favorit Anda.
3. Gunakan navigasi pada bagian atas halaman untuk berpindah antara halaman **Praktikum** dan **Mini Project Workshop**.