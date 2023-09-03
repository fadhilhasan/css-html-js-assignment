// MENGAKTIFKAN STATUS ACTIVE DAN PINDAH ANTAR PAGE
const navLinks = document.querySelectorAll(".mid-nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Menghapus kelas "active" dari semua tautan
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    // Menambahkan kelas "active" ke tautan yang sedang aktif
    this.classList.add("active");

    const page = this.getAttribute("href");
    console.log(`Pindah ke halaman: ${page}`);
    pindahKeHalaman(page);
  });
});

function pindahKeHalaman(url) {
  window.location.href = url;
}

// DOWNLOAD FILE PDF RESUME
function unduhResume(fileUrl) {
  var a = document.createElement("a");
  a.href = fileUrl;
  a.download = "Resume.pdf";
  a.click();
}

// DATE PADA RESUME CARD
const resumeCardTexts = document.querySelectorAll(".resume__card-text");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
resumeCardTexts.forEach((textElement) => {
  textElement.textContent += ` 2010-${currentYear}`;
});
