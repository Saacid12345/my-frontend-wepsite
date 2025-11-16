document.addEventListener("DOMContentLoaded", () => {
  let currentPage = 0;
  const pages = document.querySelectorAll('.page');

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.remove('active');
      if (i === index) {
        page.classList.add('active');
        // Dib u bilaabid animation-ka
        page.style.animation = 'none';
        void page.offsetWidth; // restart animation
        page.style.animation = null;
      }
    });
  }

  function nextPage() {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
  }

  function prevPage() {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(currentPage);
  }

  // Event listeners fallaadhaha
  document.querySelector('.right').addEventListener('click', nextPage);
  document.querySelector('.left').addEventListener('click', prevPage);

  // Page-ka ugu horeeya
  showPage(currentPage);
});
// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // ka hortag page reload
  alert('Fariintaada waa la soo diray, mahadsanid!');
  contactForm.reset(); // nadiifi fields-ka
});
