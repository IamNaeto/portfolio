// Hamburger script start
const hamMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".nav-links");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
// Hamburger script end


/*********
 *  Light and Dark Mood Toggle
 * *******/
// Get the toggle button element
const toggleButton = document.querySelector('#theme-btn');

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  updateToggleButton();
});

function updateToggleButton() {
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.innerText = "light_mode";
  } else {
    toggleButton.innerText = "dark_mode";
  }
}

function updateModeBasedOnTime() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 6 && hour < 18) {
    document.body.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
  }

  updateToggleButton();
}

function setManualMode(mode) {
  if (mode === 'light') {
    document.body.classList.remove('dark-mode');
  } else if (mode === 'dark') {
    document.body.classList.add('dark-mode');
  }

  updateToggleButton();
}

// Calling the function to set the mode based on the current time
updateModeBasedOnTime();



  // Scroll Reveal Animation
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
