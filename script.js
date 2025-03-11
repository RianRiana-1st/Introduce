// Data proyek dengan informasi gambar dan deskripsinya
const projects = {
  1: {
    title: "RJFARMSHOP",
    description: "Merupakan produk jamuan, suplemen, vitamin untuk perawatan ayam",
    images: [
      { src: "/Source/Work/RJFSADS.png", desc: "Strategi RJFARMSHOP #1" },
      { src: "/Source/Work/LAST7DAYSRJFS.png", desc: "Strategi RJFARMSHOP #2" },
      { src: "/Source/Work/GMVRJFS.png", desc: "Strategi RJFARMSHOP #3" }
    ]
  },
  2: {
    title: "CV Ranz Jaya Yogyakarta",
    description: "Produk aksesoris dan juga multivitamin untuk ayam",
    images: [
      { src: "/Source/Work/CVRADS.png", desc: "Proyek Utama Ranz Jaya #1" },
      { src: "/Source/Work/LAST7DAYSCVR.png", desc: "Proyek Utama Ranz Jaya #2" },
      { src: "/Source/Work/GMVCVR", desc: "Proyek Utama Ranz Jaya #3" }
    ]
  }
};

// Variabel untuk mengelola slide saat ini
let currentSlide = 0;

// Fungsi untuk menampilkan modal detail proyek
function viewDetails(projectId) {
  const modal = document.getElementById("project-modal");
  const slides = document.querySelectorAll(".slide");
  const project = projects[projectId];

  // Menambahkan judul dan deskripsi proyek
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.description;

  // Menampilkan gambar dan deskripsi dalam slider
  slides.forEach((slide, index) => {
    slide.querySelector(".slide-img").src = project.images[index].src;
    slide.querySelector(".slide-desc").textContent = project.images[index].desc;
  });

  // Reset ke slide pertama
  currentSlide = 0;
  updateSlides();

  // Tambahkan efek fade-in dan tampilkan modal
  modal.style.opacity = "0";
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);
}

// Fungsi untuk menutup modal
function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// Fungsi untuk memperbarui posisi slider dan dot navigation
function updateSlides() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// Fungsi untuk navigasi ke slide sebelumnya
function prevSlide() {
  const slides = document.querySelectorAll(".slide");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
}

// Fungsi untuk navigasi ke slide berikutnya
function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}

// Fungsi untuk menampilkan slide tertentu dengan klik dot navigation
function goToSlide(index) {
  currentSlide = index;
  updateSlides();
}

// Fungsi untuk menutup modal jika area di luar modal diklik
window.addEventListener("click", function(event) {
  const modal = document.getElementById("project-modal");
  if (event.target === modal) {
    closeModal();
  }
});

// Menambahkan validasi pada form kontak
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Validasi sederhana
  if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
    alert("Semua bidang harus diisi!");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email.value)) {
    alert("Email tidak valid!");
    return;
  }

  alert("Pesan berhasil dikirim!");
  this.reset();
});
