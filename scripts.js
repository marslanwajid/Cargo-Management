document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  // Select all feature and gallery images
  const images = document.querySelectorAll('.feature-card img, .gallery-img');

  // Open lightbox on image click
  images.forEach(image => {
    image.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = image.src;
    });
  });

  // Close lightbox on close button click
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close lightbox when clicking outside of the image
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });
});

// Get the button
const goTopBtn = document.getElementById("goTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
goTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Resume Download JS

document.getElementById('resume-btn').addEventListener('click', function() {
  // The path to your CV file
  const cvPath = 'sample_invoice.pdf';
  
  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = 'Sample Invoice.pdf'; // The filename to use for the downloaded file

  // Append the anchor to the body
  document.body.appendChild(link);
  
  // Trigger the download by programmatically clicking the anchor
  link.click();
  
  // Remove the anchor from the document
  document.body.removeChild(link);
});
