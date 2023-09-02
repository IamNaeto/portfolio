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
const toggleButton = document.querySelector('#toggle');

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  toggleButton.classList.toggle('fa-toggle-on');
});

function updateModeBasedOnTime() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 6 && hour < 18) {
    document.body.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
  }
}

function setManualMode(mode) {
  if (mode === 'light') {
    document.body.classList.remove('dark-mode');
    toggleButton.classList.remove('fa-toggle-off');
    toggleButton.classList.add('fa-toggle-on');
  } else if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.classList.remove('fa-toggle-on');
    toggleButton.classList.add('fa-toggle-off');
  }
}
// Calling the function to set the mode based on the current time
updateModeBasedOnTime();


// Footer Date Update
const currentYearContainer = document.querySelector(".currentYearContainer")
const date = new Date()
const currentYear = date.getFullYear()
currentYearContainer.innerText = currentYear