document.addEventListener("DOMContentLoaded", function () {
    const wsForm = document.getElementById("workshopForm");
    const wsNama = document.getElementById("wsNama");
    const wsEmail = document.getElementById("wsEmail");
    const wsSesi = document.getElementById("wsSesi");
    
    const wsCharCount = document.getElementById("wsCharCount");
    const wsPesanStatus = document.getElementById("wsPesanStatus");
    const btnResetForm = document.getElementById("btnResetForm");

    // Elemen Ringkasan (Live Preview)
    const prevNama = document.getElementById("prevNama");
    const prevEmail = document.getElementById("prevEmail");
    const prevSesi = document.getElementById("prevSesi");

    // 1. Event 'input' untuk Penghitung Karakter & Live Preview Nama
    wsNama.addEventListener("input", function () {
        const val = wsNama.value;
        wsCharCount.textContent = val.length;
        prevNama.textContent = val.trim() !== "" ? val : "-";
    });

    // 2. Event 'input' untuk Live Preview Email
    wsEmail.addEventListener("input", function () {
        const val = wsEmail.value;
        prevEmail.textContent = val.trim() !== "" ? val : "-";
    });

    // 3. Event 'change' untuk Live Preview Sesi Workshop
    wsSesi.addEventListener("change", function () {
        const val = wsSesi.value;
        prevSesi.textContent = val !== "" ? val : "-";
    });

    // 4. Event 'click' pada Tombol Reset
    btnResetForm.addEventListener("click", function () {
        wsForm.reset();
        wsCharCount.textContent = "0";
        prevNama.textContent = "-";
        prevEmail.textContent = "-";
        prevSesi.textContent = "-";
        wsPesanStatus.textContent = "Form telah dikosongkan.";
        wsPesanStatus.className = "status-msg info";
    });

    // 5. Event 'submit' untuk Validasi Formulir
    wsForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const namaVal = wsNama.value.trim();
        const emailVal = wsEmail.value.trim();
        const sesiVal = wsSesi.value;
        const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validasi Nama
        if (namaVal === "" || namaVal.length < 3) {
            wsPesanStatus.textContent = "Error: Nama wajib diisi minimal 3 karakter!";
            wsPesanStatus.className = "status-msg error";
            wsNama.focus();
            return;
        }

        // Validasi Email
        if (!polaEmail.test(emailVal)) {
            wsPesanStatus.textContent = "Error: Format alamat email tidak valid!";
            wsPesanStatus.className = "status-msg error";
            wsEmail.focus();
            return;
        }

        // Validasi Sesi Workshop
        if (sesiVal === "") {
            wsPesanStatus.textContent = "Error: Anda harus memilih salah satu sesi workshop!";
            wsPesanStatus.className = "status-msg error";
            wsSesi.focus();
            return;
        }

        // Jika semua validasi sukses
        wsPesanStatus.textContent = "Sukses! Pendaftaran Anda berhasil dikirim.";
        wsPesanStatus.className = "status-msg success";
    });
});