const shareBtn = document.getElementById("share-btn");
const backBtn = document.getElementById("back-btn");
const overlay = document.getElementById("overlay");

if (shareBtn && backBtn && overlay) {
  shareBtn.addEventListener("click", toggleOverlay);
  backBtn.addEventListener("click", toggleOverlay);
}

// Toggling the overlay of social icons
function toggleOverlay() {
  overlay.classList.toggle("active");
}
