// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuBtn.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// =========================
// CLOSE MENU ON LINK CLICK
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// =========================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =========================

document.addEventListener("click", (e) => {
  const clickedInsideNav =
    navLinks.contains(e.target) ||
    menuBtn.contains(e.target);

  if (!clickedInsideNav && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// =========================
// SCROLLED HEADER
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// =========================
// DARK MODE
// =========================

const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.setAttribute(
    "data-theme",
    "dark"
  );

  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

// Toggle theme

themeBtn.addEventListener("click", () => {

  const currentTheme =
    document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {

    document.documentElement.removeAttribute(
      "data-theme"
    );

    localStorage.setItem("theme", "light");

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");

  } else {

    document.documentElement.setAttribute(
      "data-theme",
      "dark"
    );

    localStorage.setItem("theme", "dark");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});

// =========================
// SCROLL REVEAL
// =========================

const reveals =
  document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach((element) => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      element.getBoundingClientRect().top;

    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


// =========================
// BACK TO TOP
// =========================

const backToTop =
  document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});