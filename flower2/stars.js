var cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");
let W = window.innerWidth;
let H = window.innerHeight;

// Set ukuran kanvas dan warna latar belakang
cnv.width = W;
cnv.height = H;
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, W, H);

// Fungsi untuk membuat bintang
cnv.width = W;
cnv.height = H;
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, W, H);

function createStar() {
  // Posisi dan ukuran acak untuk bintang
  let x = W * Math.random();
  let y = H * Math.random();
  let r = Math.random() * 2 + 0.5; // Ukuran bintang yang lebih kecil, radius dari 0.5 hingga 3.0
  let opacity = { value: 0 };

  // Menggunakan GSAP untuk membuat bintang muncul perlahan
  gsap.to(opacity, {
    value: 1,
    duration: 1, // Durasi muncul
    onUpdate: () => {
      ctx.clearRect(x - r - 1, y - r - 1, r * 2 + 2, r * 2 + 2);
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity.value})`;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    },
  });

  // Menggunakan GSAP untuk membuat bintang menghilang perlahan
  gsap.to(opacity, {
    value: 0,
    delay: Math.random() * 25 + 15, // Waktu sebelum mulai menghilang
    duration: 1, // Durasi menghilang
    onUpdate: () => {
      ctx.clearRect(x - r - 1, y - r - 1, r * 2 + 2, r * 2 + 2);
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity.value})`;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    },
    onComplete: () => {
      // Menghapus bintang dari kanvas setelah animasi selesai
      ctx.clearRect(x - r - 1, y - r - 1, r * 2 + 2, r * 2 + 2);
    },
  });
}

function startStars() {
  // Set interval untuk membuat bintang baru setiap 300ms
  setInterval(createStar, 300);
}

startStars();
