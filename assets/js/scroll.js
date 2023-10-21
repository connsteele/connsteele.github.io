// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling animation
  });
}

// Function to show or hide the button based on scroll position
function toggleScrollButton() {
  const button = document.getElementById('scrollToTopButton');
  if (window.scrollY > 300) { // Adjust the scroll threshold as needed
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

// Attach the toggleScrollButton function to the scroll event
window.addEventListener('scroll', toggleScrollButton);
