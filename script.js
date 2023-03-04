// Hamburger script start
const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.nav-links')
hamMenu.addEventListener('click', () =>{
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active')
})
// Hamburger script end

// Nav Bar Scrolling Change
window.addEventListener("scroll", function() {
	let navbar = document.querySelector(".nav");
	navbar.classList.toggle("scrolled", window.scrollY > 0);
  });