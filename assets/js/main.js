/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/*=============== ADD BLUR TO HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== CONTACT EMAIL ===============*/
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Message from ${contactName.value}`);
    const body = encodeURIComponent(`Name: ${contactName.value}\nEmail: ${contactEmail.value}\n\nMessage:\n${contactMessage.value}`);
    
    window.location.href = `mailto:abinsuwal650@gmail.com?subject=${subject}&body=${body}`;
    
    // Clear the form after sending opens
    contactForm.reset();
  });
}

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 400) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const link = document.querySelector(".nav__link[href*=" + sectionId + "]");
    if (link && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else if (link) {
      link.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1000,
    delay: 200,
  });
  sr.reveal(".home__content, .home__img-wrapper");
  sr.reveal(".section__title", { interval: 100 });
  sr.reveal(".about__img-wrapper, .about__content");
  sr.reveal(".skills__content, .skills__list");
  sr.reveal(".services__card, .projects__card", { interval: 100 });
  sr.reveal(".contact__form");
}
