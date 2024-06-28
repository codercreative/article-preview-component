const shareBtn = document.getElementById("share-btn");
const backBtn = document.getElementById("back-btn");
const overlay = document.getElementById("overlay");

// Toggling the overlay of social icons over the author's name and date
shareBtn.addEventListener("click", displayOverlay);
backBtn.addEventListener("click", displayAuthor);

function displayOverlay() {
  overlay.classList.toggle("active");
}

function displayAuthor() {
  overlay.classList.toggle("active");
}
