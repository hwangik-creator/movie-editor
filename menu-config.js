/* ==========================================================================
   PENGATURAN MENU & TOMBOL HWANG'S TOOLS
   ========================================================================== */

const menuList = [
  {
    title: "Monthly Calendar",
    desc: "Buat kalender bulanan estetik dari file CSV Diary Letterboxd kamu.",
    url: "calendar.html",
    icon: "fa-calendar-days",
    active: true
  },
  {
    title: "Custom Posters",
    desc: "Generator template poster ulasan film siap post untuk media sosial.",
    url: "posters.html", // Mengarah ke file lokal di GitHub
    icon: "fa-film",
    active: true
  },
  {
    title: "Movie Collage",
    desc: "Buat kolase poster film bertema bebas dengan kustomisasi judul sesukamu.",
    url: "https://sites.google.com/view/custom-favorite-thematic-colla/collage",
    icon: "fa-layer-group",
    active: true
  },
  {
    title: "Year in Review",
    desc: "Rangkuman statistik tahunan film yang telah ditonton beserta rekap data lengkap.",
    url: "https://sites.google.com/view/letterboxd-pro-tmdb-api-wrappe/yearinreview",
    icon: "fa-chart-pie",
    active: true
  }
];

// Script otomatis untuk merender tombol dengan efek transisi halus di tab yang sama
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  grid.innerHTML = menuList.map(item => {
    const statusClass = item.active ? "" : "disabled";
    const badgeText = item.active ? "Active" : "Soon";
    const targetUrl = item.active ? item.url : "#";
    
    const isExternal = targetUrl.startsWith("http");
    const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';

    return `
      <a href="${targetUrl}" class="menu-card ${statusClass}" ${targetAttr} ${!isExternal && item.active ? 'data-smooth-link' : ''}>
        <div class="card-badge">${badgeText}</div>
        <div class="card-icon">
          <i class="fa-solid ${item.icon}"></i>
        </div>
        <div class="card-title">${item.title}</div>
        <div class="card-desc">${item.desc}</div>
      </a>
    `;
  }).join("");

  // Transisi halus (Fade Out) khusus untuk navigasi antar-file lokal di GitHub
  grid.addEventListener("click", function(e) {
    const link = e.target.closest('a[data-smooth-link]');
    if (!link) return;

    e.preventDefault();
    const destination = link.href;

    document.body.style.transition = "opacity 0.3s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = destination;
    }, 300);
  });
});
