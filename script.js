// 1. Inisialisasi Judul dan Pesan
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// Event Tombol Aksi
const tombolAksi = document.getElementById("tombolAksi");
tombolAksi.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// Penghitung Karakter Input Nama
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// 2. Manipulasi Gaya CSS & Toggle Sembunyi (Eksperimen #4)
const tombolGaya = document.getElementById("tombolGaya");
const tombolSembunyi = document.getElementById("tombolSembunyi");
const teksGaya = document.getElementById("teksGaya");

if (tombolGaya && teksGaya) {
    tombolGaya.addEventListener("click", function () {
        teksGaya.classList.toggle("highlight");
        teksGaya.classList.toggle("teks-besar");
    });
}

if (tombolSembunyi && teksGaya) {
    tombolSembunyi.addEventListener("click", function () {
        // Menggunakan class CSS tersembunyi
        teksGaya.classList.toggle("tersembunyi");
    });
}

// 3. Dropdown Event Change (Eksperimen #3)
const sesiWorkshop = document.getElementById("sesiWorkshop");
const pesanSesi = document.getElementById("pesanSesi");

if (sesiWorkshop) {
    sesiWorkshop.addEventListener("change", function () {
        if (sesiWorkshop.value !== "") {
            pesanSesi.textContent = "Anda memilih sesi: " + sesiWorkshop.value;
        } else {
            pesanSesi.textContent = "";
        }
    });
}

// Form Validation (Eksperimen #2: Validasi Nama Min 3 Karakter)
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const usiaInput = document.getElementById("usia").value;
        const sesi = sesiWorkshop ? sesiWorkshop.value : "";
        const usia = Number(usiaInput);
        const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validasi nama minimal 3 karakter (Eksperimen Mandiri #2)
        if (nama === "" || nama.length < 3) {
            pesanForm.textContent = "Nama wajib diisi dan minimal 3 karakter.";
            pesanForm.className = "status-msg error";
        } else if (!polaEmail.test(email)) {
            pesanForm.textContent = "Masukkan email yang valid.";
            pesanForm.className = "status-msg error";
        } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
            pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
            pesanForm.className = "status-msg error";
        } else if (sesi === "") {
            pesanForm.textContent = "Silakan pilih sesi workshop.";
            pesanForm.className = "status-msg error";
        } else {
            pesanForm.textContent = "Validasi berhasil. Form siap diproses!";
            pesanForm.className = "status-msg success";
            form.reset();
            if (pesanSesi) pesanSesi.textContent = "";
        }
    });
}

// 4. To-Do List dengan Tombol Hapus (Eksperimen #1)
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

if (tambahTugas) {
    tambahTugas.addEventListener("click", function () {
        const teks = inputTugas.value.trim();
        if (teks === "") {
            pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
            pesanTugas.className = "status-msg error";
            return;
        }

        const item = document.createElement("li");
        const label = document.createElement("span");
        const tombolAksiDiv = document.createElement("div");
        tombolAksiDiv.className = "btn-group";

        const selesai = document.createElement("button");
        const hapus = document.createElement("button");

        label.textContent = teks;
        
        selesai.type = "button";
        selesai.textContent = "Tandai selesai";
        selesai.className = "btn-done";
        selesai.addEventListener("click", function () {
            item.classList.toggle("selesai");
            selesai.textContent = item.classList.contains("selesai")
                ? "Batalkan" : "Tandai selesai";
        });

        // Tombol Hapus Item (Eksperimen Mandiri #1)
        hapus.type = "button";
        hapus.textContent = "Hapus";
        hapus.className = "btn-delete";
        hapus.addEventListener("click", function () {
            item.remove();
            pesanTugas.textContent = "Tugas berhasil dihapus.";
            pesanTugas.className = "status-msg info";
        });

        tombolAksiDiv.append(selesai, hapus);
        item.append(label, tombolAksiDiv);
        daftarTugas.appendChild(item);

        inputTugas.value = "";
        pesanTugas.textContent = "Tugas ditambahkan.";
        pesanTugas.className = "status-msg success";
        inputTugas.focus();
    });
}