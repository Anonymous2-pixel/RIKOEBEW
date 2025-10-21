/* --- Fitur 1: Tombol "Sapa" (Alert) --- */

// Ambil elemen tombol sapa
const Kliksaja = document.getElementById('sapaButton');

// Ambil elemen pemutar musik (untuk di-pause)
const pemutarMusik = document.getElementById('player-musik');

// Saat tombol "sapa" diklik...
Kliksaja.addEventListener('click', function() {
    
    // Jeda musiknya dulu (biar alert kedengaran)
    pemutarMusik.pause(); 
    
    // Tampilkan alert (ini sudah diperbaiki)
    alert('Maaf! Kita hanya bisa temenan aja ya sory!');
});


/* --- Fitur 2: Tombol "Ganti Mode" (Dark Mode) --- */

// Ambil elemen tombol warna
const tombolWarna = document.getElementById('toggleWarna');

// Ambil elemen <body>
const bodyHalaman = document.body;

// Saat tombol "warna" diklik...
tombolWarna.addEventListener('click', function() {
    
    // Toggle (tambah/hapus) class 'dark-mode' di <body>
    bodyHalaman.classList.toggle('dark-mode');
    
});
