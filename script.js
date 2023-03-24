// Hamburger script start
const hamMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".nav-links");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
// Hamburger script end

// Nav Bar Scrolling Change
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".nav");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});

//   Scroll Reveal Animation
ScrollReveal().reveal(".img-sec", { easing: "ease-in" });
ScrollReveal().reveal(".about-text", { easing: "ease-in" });

ScrollReveal().reveal(".title", { duration: 2000 });
ScrollReveal().reveal(".card", { interval: 200 });

ScrollReveal().reveal(".project-heading", { duration: 2000 });
ScrollReveal().reveal(".project-subheading", { duration: 2000 });
ScrollReveal().reveal(".project-col", { interval: 200 });

ScrollReveal().reveal(".skills-heading", { duration: 2000 });
ScrollReveal().reveal(".skills-subheading", { duration: 2000 });
ScrollReveal().reveal(".langbox", { interval: 200 });

ScrollReveal().reveal(".says-heading", { duration: 2000 });
ScrollReveal().reveal(".says-subheading", { duration: 2000 });
ScrollReveal().reveal(".testimonial-col", { interval: 200 });
ScrollReveal().reveal(".hire", { duration: 5000 });
ScrollReveal().reveal(".arrow-up", { duration: 2000 });
ScrollReveal().reveal(".foot-enquires", { duration: 2000 });
ScrollReveal().reveal(".socials", { interval: 200 });