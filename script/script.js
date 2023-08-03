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

// Hero Section
let heroText = document.querySelector('.content');
// let heroImg = document.querySelector('.hero-img');

ScrollReveal().reveal((heroText), {
scale: 0.85,
interval: 500,
delay: 300,
reset: true,
viewFactor: 0.3
});


// About section
let aboutHeading = document.querySelector('.about-heading');
let aboutImg = document.querySelector('.img-sec');
let aboutText = document.querySelector('.aboutText');
let aboutIntro = document.querySelector('.about-intro');
let aboutTextBtn = document.querySelector('.about-text-btn');
ScrollReveal().reveal((aboutHeading), {
scale: 0.85,
delay: 300,
reset: true,
easing: 'ease-in',
});

ScrollReveal().reveal((aboutText), 
{
scale: 0.5,
delay: 300,
reset: true,
origin: 'bottom',
viewFactor: 0.4

});

ScrollReveal().reveal((aboutImg), {
scale: -0.4,
delay: 400,
reset: true,
rotate: {
x: 9,
z: 9
},
viewFactor: 0.5
});

ScrollReveal().reveal((aboutIntro), {
  delay: 400,
  reset: true,
  easing: 'ease-in',
  });

ScrollReveal().reveal((aboutTextBtn), {
scale: 0.85,
easing: 'steps(5)',
delay: 600,
reset: true,
viewFactor: 0.2
});


// Service Section 
let serviceHeading = document.querySelector('.serviceHeading');
let serviceCard = document.querySelectorAll('.card');
ScrollReveal().reveal((serviceHeading), {
scale: 0.85,
delay: 300,
reset: true,
easing: 'ease-in',
});

ScrollReveal().reveal((serviceCard), {
origin: 'bottom',
scale: 0.45,
interval: 300,
delay: 500,
reset: true,
easing: 'ease-out',
viewFactor: 0.3
});


// Project Section
let projectHeading = document.querySelector('.project-heading');
let projectCol = document.querySelectorAll('.project-col');

ScrollReveal().reveal((projectHeading), {
scale: 0.85,
delay: 400,
reset: true,
easing: 'ease-in',
viewFactor: 0.3
});

ScrollReveal().reveal((projectCol), {
scale: 0.85,
delay: 500,
interval: 500,
reset: true,
rotate: {
x: 70,
z: 70
},
viewFactor: 0.3
});


// Skills Section
let skillsHeading = document.querySelector('.skills-heading');
let skillsSub = document.querySelector('.skills-subheading');
let langBox = document.querySelectorAll('.langbox');

ScrollReveal().reveal((skillsHeading), {
  scale: 0.85,
  delay: 400,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.3
  });

ScrollReveal().reveal((skillsSub), {
  delay: 300,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.3
  });

ScrollReveal().reveal((langBox), {
    rotate: {
    x: -7,
    z: -7
  },
  delay: 500,
  reset: true,
  viewFactor: 0.3
  });

  // Testimonial sections
  let saysHeading = document.querySelector('.says-heading');
let saysSub = document.querySelector('.says-subheading');
let saysCol = document.querySelectorAll('.testimonial-col');
let hire = document.querySelector('.hire');
let arrowUp = document.querySelector('.arrow-up');

ScrollReveal().reveal((saysHeading), {
  scale: 0.85,
  delay: 300,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.3
  });

ScrollReveal().reveal((saysSub), {
  delay: 400,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.3
  });
  
  ScrollReveal().reveal((hire), {
    scale: 0.9,
    easing: 'ease-in',
    delay: 600,
    reset: true,
    viewFactor: 0.4
    });

    ScrollReveal().reveal((saysCol), {
  scale: -0.5,
  interval: 500,
  delay: 600,
  reset: true,
  easing: 'ease-in',
  viewFactor: 0.4
});

ScrollReveal().reveal((arrowUp), {
  scale: 0.85,
  easing: 'ease-in',
  delay: 400,
  reset: true,
  viewFactor: 0.3
  });

// contact section
let socials = document.querySelector('.socials');
let contactFoot = document.querySelector('.contact-foot');
let contactCol = document.querySelectorAll('.col-box');
let input = document.querySelectorAll('input');
let sendBtn = document.querySelectorAll('.btn_one');
let textarea = document.querySelectorAll('textarea');

ScrollReveal().reveal((socials), {
scale: 0.9,
delay: 400,
reset: true,
easing: 'ease-in',
viewFactor: 0.3
});

ScrollReveal().reveal((contactFoot), {
delay: 300,
reset: true,
easing: 'ease-in',
viewFactor: 0.3
});

ScrollReveal().reveal((contactCol), {
scale: 0.9,
easing: 'ease-in',
delay: 500,
reset: true,
viewFactor: 0.4
});

ScrollReveal().reveal((input), 
{
rotate: {
  x: 10,
  z: 9
},
delay: 300,
reset: true,
origin: 'bottom',
viewFactor: 0.4
});
ScrollReveal().reveal((sendBtn), 
{
rotate: {
  x: 10,
  z: 9
},
delay: 400,
reset: true,
origin: 'bottom',
viewFactor: 0.4
});

ScrollReveal().reveal((textarea), 
{
rotate: {
  x: 10,
  z: 9
},
delay: 300,
reset: true,
viewFactor: 0.4

});

// Footer section
// let footLogo = document.querySelector('.footLogo');
let footEnquires = document.querySelector('.foot-enquires');
let end = document.querySelectorAll('end');

ScrollReveal().reveal((footEnquires), {
scale: 0.85,
easing: 'ease-in',
delay: 400,
reset: true,
viewFactor: 0.3
});

// ScrollReveal().reveal((footLogo), 
// {
// rotate: {
//   x: 10,
//   z: 9
// },
// delay: 300,
// reset: true,
// origin: 'bottom',
// viewFactor: 0.3
// });

ScrollReveal().reveal((end), {
origin: 'bottom',
scale: 0.85,
delay: 500,
reset: true,
easing: 'ease-in',
viewFactor: 0.3
});