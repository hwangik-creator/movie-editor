/* ==========================================================================
   PENGATURAN MENU & TOMBOL HWANG'S TOOLS
   - active: true  -> Tombol Aktif & Normal
   - active: false -> Tombol Mati / Segera Hadir (Soon)
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

  grid.innerHTML = menuList.map(item => {
    const statusClass = item.active ? "" : "disabled";
    const badgeText = item.active ? "Active" : "Soon";
    const targetUrl = item.active ? item.url : "#";
    
    // Membuka di tab baru (target="_blank") agar tidak ada kilatan putih di tab utama
    const targetAttr = item.active ? 'target="_blank" rel="noopener noreferrer"' : '';

    return `
      <a href="${targetUrl}" class="menu-card ${statusClass}" ${targetAttr}>
        <div class="card-badge">${badgeText}</div>
        <div class="card-icon">
          <i class="fa-solid ${item.icon}"></i>
        </div>
        <div class="card-title">${item.title}</div>
        <div class="card-desc">${item.desc}</div>
      </a>
    `;
  }).join("");
});
