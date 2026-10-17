/* ==========================================================================
   PENGATURAN MENU & TOMBOL HWANG'S CINEHUB (DENGAN TRANSISI HALUS)
   ========================================================================== */

const menuList = [
  {
    title: "Monthly Calendar",
    desc: "Buat kalender bulanan estetik dari file CSV Diary Letterboxd kamu.",
    url: "https://sites.google.com/view/kalenderhwangik/movie-calendar",
    icon: "fa-calendar-days",
    active: true
  },
  {
    title: "Custom Posters",
    desc: "Generator template poster ulasan film siap post untuk media sosial.",
    url: "https://sites.google.com/view/dual-picture-signature-templat/poster-reviewer",
    icon: "fa-film",
    active: true
  },
  {
    title: "Movie Collage",
    desc: "Buat kolase poster film bertema bebas dengan kustomisasi judul sesukamu.",
    url: "https://sites.google.com/view/custom-favorite-thematic-colla/collage",
    icon: "fa-layer-group",
    active: false
  },
  {
    title: "Year in Review",
    desc: "Rangkuman statistik tahunan film yang telah ditonton beserta rekap data lengkap.",
    url: "https://sites.google.com/view/letterboxd-pro-tmdb-api-wrappe/yearinreview",
    icon: "fa-chart-pie",
    active: false
  }
];

// Script otomatis untuk merender tombol ke halaman Home
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  // Render HTML tombol ke dalam grid
  grid.innerHTML = menuList.map(item => {
    const statusClass = item.active ? "" : "disabled";
    const badgeText = item.active ? "Active" : "Soon";
    const targetUrl = item.active ? item.url : "#";

    return `
      <a href="${targetUrl}" class="menu-card ${statusClass}" ${item.active ? 'data-smooth-link' : ''}>
        <div class="card-badge">${badgeText}</div>
        <div class="card-icon">
          <i class="fa-solid ${item.icon}"></i>
        </div>
        <div class="card-title">${item.title}</div>
        <div class="card-desc">${item.desc}</div>
      </a>
    `;
  }).join("");

  // Menggunakan Event Delegation agar klik pada tombol aktif langsung memicu transisi halus
  grid.addEventListener("click", function(e) {
    const link = e.target.closest('a[data-smooth-link]');
    if (!link) return;

    e.preventDefault(); // Tahan sebentar pemuatan halaman
    const destination = link.href;

    // Pastikan transisi opacity aktif di body
    document.body.style.transition = "opacity 0.35s ease";
    document.body.style.opacity = "0";

    // Pindah ke halaman tujuan setelah animasi selesai
    setTimeout(() => {
      window.location.href = destination;
    }, 350);
  });
});
