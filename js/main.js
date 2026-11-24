const menuToggle = document.querySelector(".boton-menu");
const menu = document.querySelector("#menu-principal");
const menuLinks = document.querySelectorAll(".menu-navegacion a");

function closeMenu() {
  menu.classList.remove("abierto");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
}

menuToggle.addEventListener("click", function () {
  const isOpen = menu.classList.toggle("abierto");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", closeMenu);
}

const inicioLinks = document.querySelectorAll('a[href="#inicio"]');

for (let i = 0; i < inicioLinks.length; i++) {
  inicioLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    closeMenu();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const carousels = document.querySelectorAll(".carrusel");

function initializeCarousel(carousel) {
  const slides = carousel.querySelectorAll(".imagen-carrusel");
  const dots = carousel.querySelectorAll(".punto-carrusel");
  const previousButton = carousel.querySelector(".anterior-carrusel");
  const nextButton = carousel.querySelector(".siguiente-carrusel");
  let currentSlide = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("activa");
      dots[i].classList.remove("activa");
      dots[i].removeAttribute("aria-current");
    }

    slides[currentSlide].classList.add("activa");
    dots[currentSlide].classList.add("activa");
    dots[currentSlide].setAttribute("aria-current", "true");
  }

  previousButton.addEventListener("click", function () {
    showSlide(currentSlide - 1);
  });

  nextButton.addEventListener("click", function () {
    showSlide(currentSlide + 1);
  });

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
      showSlide(i);
    });
  }
}

for (let i = 0; i < carousels.length; i++) {
  initializeCarousel(carousels[i]);
}

const footerYear = document.getElementById("anio-pie");
footerYear.textContent = new Date().getFullYear();
