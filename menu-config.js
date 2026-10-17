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

// Script otomatis untuk merender tombol dengan efek transisi klik halus
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

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

  // Efek transisi halus (fade out) saat tombol diklik
  document.querySelectorAll('a[data-smooth-link]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Tahan sebentar pindahnya
      const destination = this.href;

      // Buat efek layar perlahan menggelap secara halus (fade out)
      document.body.style.transition = "opacity 0.3s ease";
      document.body.style.opacity = "0";

      // Pindah halaman setelah animasi selesai (300 milidetik)
      setTimeout(() => {
        window.location.href = destination;
      }, 300);
    });
  });
});
