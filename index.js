const recommendedContent = [
    {
        image: "./media/netplus_cert.png",
    },
    {
        image: "./media/aws_tech_cert.png"
    },
    {
        image: "./media/aws_cloud_cert.png",
    },
    {
        image: "./media/data_analytics.png",
    },
    {
        image: "./media/python_cert.png",
    },
    {
        image: "./media/js_cert.png",
    },
];

// Get the container element from the HTML
const container = document.getElementById('recommended-container');

// Loop through the data and create a card for each item
recommendedContent.forEach(item => {
    // Create the main card div
    const card = document.createElement('div');
    card.className = 'card';

    // Create the card footer to hold the other details
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    const imgItem = document.createElement('img');
    imgItem.className = 'cert-image';
    imgItem.src = item.image;
    card.appendChild(imgItem);

    // Append the card footer to the main card
    card.appendChild(cardFooter);

    // Append the complete card to the container
    container.appendChild(card);
});

document.addEventListener('DOMContentLoaded', (event) => {
  // Get the "Back to Top" button element
  const backToTopButton = document.querySelector('.back-to-top');

  // Add a click event listener to the button
  if (backToTopButton) {
    backToTopButton.addEventListener('click', (e) => {
      // Prevent the default anchor link behavior
      e.preventDefault();

      // Smoothly scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

// CAROUSEL ----------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carouselInner = document.querySelector('.carousel-inner'); 
  const images = recommendedContent; 

  let currentIndex = 0;

  // Function to create and append image elements to the carousel
  function createCarouselItems() {
    images.forEach(imgData => {
      const imgElement = document.createElement('img');
      imgElement.src = imgData.image; // Assuming your data has an 'image' property
      imgElement.alt = imgData.alt || 'Carousel image'; // Use a descriptive alt text
      imgElement.className = 'carousel-img';
      carouselInner.appendChild(imgElement);
    });
  }

  // Function to update which image is active
  function updateCarousel() {
    const allImages = document.querySelectorAll('.carousel-img');
    allImages.forEach((img, index) => {
      if (index === currentIndex) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    updateCarousel();
  });

  setInterval(function() {
          currentIndex++;
          if (currentIndex >= images.length) {
      currentIndex = 0;
    }
          updateCarousel()
        }, 3500);

  // --- Initial setup ---
  createCarouselItems();
  updateCarousel();
});