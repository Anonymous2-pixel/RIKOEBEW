// --- BAGIAN 1: KODE LAMA ANDA UNTUK TOMBOL "SAPA" ---
// (Ini sudah diperbaiki syntax error-nya)

const Kliksaja = document.getElementById('sapaButton');

Kliksaja.addEventListener('click', function() {
    alert('Maaf! Kita hanya bisa temenan aja ya sory!');
});


// --- BAGIAN 2: KODE BARU UNTUK GANTI WARNA ---

// 1. Cari tombol "toggleWarna" yang kita buat di HTML
const tombolWarna = document.getElementById('toggleWarna');

// 2. Cari elemen <body>, karena kita mau ganti warna seluruh body
const bodyHalaman = document.body;

// 3. Tambahkan pendengar 'klik' ke tombol warna
tombolWarna.addEventListener('click', function() {
    
    // 4. Inilah intinya:
    // "classList.toggle" artinya:
    // - JIKA class 'dark-mode' TIDAK ADA, maka TAMBAHKAN.
    // - JIKA class 'dark-mode' SUDAH ADA, maka HAPUS.
    bodyHalaman.classList.toggle('dark-mode');
    
});
