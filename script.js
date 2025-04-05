document.addEventListener("DOMContentLoaded", function () {
    // Hide the loader when the content is fully loaded
    document.querySelector('.loader-wrapper').style.display = 'none';
});


function toggleMenu() {
   const menu = document.querySelector('.menu');
   const menuBtn = document.querySelector('.menu-btn');

   if (menu.style.display === 'block') {
       menu.style.display = 'none';
       menuBtn.innerHTML = '&#9776;'; // Change back to three-bar icon
   } else {
       menu.style.display = 'block';
       menuBtn.innerHTML = '✕'; // Change to "X" when menu is open
   }
}

function hideMenu() {
   const menu = document.querySelector('.menu');
   const menuBtn = document.querySelector('.menu-btn');
   menu.style.display = 'none';
   menuBtn.innerHTML = '&#9776;'; // Change back to three-bar icon
}

// ... Your existing code ...

// ... Your existing code ...

const carousel = document.getElementById('image-carousel');
const dotsContainer = document.getElementById('carousel-dots');
let currentIndex = 0;

function rotateImages() {
   currentIndex = (currentIndex + 1) % carousel.children.length;
   const transformValue = `translateX(-${currentIndex * 100}%)`;
   carousel.style.transition = 'transform 1s ease-in-out';
   carousel.style.transform = transformValue;

   // Update active dot
   const dots = document.querySelectorAll('.dot');
   dots.forEach((dot, index) => {
      dot.classList.toggle('active-dot', index === currentIndex);
   });
}

// Create dots dynamically based on the number of images
function createDots() {
   const totalImages = carousel.children.length;
   for (let i = 0; i < totalImages; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
         currentIndex = i;
         rotateImages();
      });
      dotsContainer.appendChild(dot);
   }
}

// Initialize dots
createDots();

// Rotate images every 3 seconds (adjust as needed)
setInterval(() => {
   rotateImages();
}, 3000);

// ... Your existing code ...

// ... Your existing code ...

const themeButton = document.getElementById('theme-button');
let currentTheme = 'default';

function changeTheme() {
   const body = document.body;
   const elementsToChangeColor = document.querySelectorAll('.themeable');

   if (currentTheme === 'default') {
      // New theme colors
      body.style.backgroundColor = '#eee';
      body.style.color = '#fff';
      

      

      currentTheme = 'light';
   } else {
      // Reset to default theme colors
      body.style.backgroundColor = '#282c35';
      body.style.color = '#fff';
      



      currentTheme = 'default';
   }
}

themeButton.addEventListener('click', changeTheme);

// ... Your existing code ...



// ... Your existing code ...

const profileImage = document.getElementById('profile-image');
const about = document.getElementById('about');


// Animate the profile image on page load
profileImage.style.transform = 'scale(0)';
profileImage.style.transition = 'transform 1s ease-in-out';

window.addEventListener('load', () => {
   profileImage.style.backgroundImage = 'url("profile-image.jpg")'; // Replace with your image path
   profileImage.style.transform = 'scale(1)';
});
// ... Your existing code ...



about.addEventListener('mouseover', () => {
   profileImage.style.transform = 'scale(1.2)';
});

// ... Your existing code ...

// Function to check if an element is in the viewport
function isElementInViewport(element) {
   const rect = element.getBoundingClientRect();
   return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
   );
}

// ... Your existing code ...

// Function to handle the scroll event
function handleScroll() {
   const skillsSection = document.querySelector('.skills-section');

   if (isElementInViewport(skillsSection) && !skillsSection.classList.contains('active')) {
      skillsSection.classList.add('active');
      startTypingAnimation();
   }
}

// ... Your existing code ...

// Function to start the typing animation
function startTypingAnimation() {
   const skillHeadings = document.querySelectorAll('.skills-container .skill h3');
   skillHeadings.forEach((heading) => {
      const text = heading.parentNode.getAttribute('data-text');
      const textArray = text.split('');
      let index = 0;

      function type() {
         if (index < textArray.length) {
            heading.innerHTML += textArray[index];
            index++;
            setTimeout(type, 50); // Adjust the typing speed here
         } else {
            // Clear content after typing and restart after a delay
            setTimeout(() => {
               heading.innerHTML = '';
               index = 0;
               type();
            }, 5000); // Adjust the delay before restarting here
         }
      }

      type();
   });
}

// Listen for the scroll event and trigger the handleScroll function
window.addEventListener('scroll', handleScroll);


async function setBackgroundImage() {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxDbg4sGHoyn7lsnrdJw1UMBH7R7S0GYg4OlRLnlHO5FjpIYtwu0CcE4J1jootWAVhG/exec'); // Replace with your Google Script URL
        const imageUrl = await response.text();

        const img = new Image();
        img.src = imageUrl;

        img.onload = function() {
            const backgroundDiv = document.getElementById('background');
            backgroundDiv.style.backgroundImage = `url(${imageUrl})`;
            backgroundDiv.style.opacity = 1; // Trigger the fade-in effect
        };
    } catch (error) {
        console.error('Error fetching the image:', error);
    }
}

setBackgroundImage();
