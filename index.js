const certs = [
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
    image: "./media/js_cert.png",
  },
  {
    image: "./media/dg-aas.png",
  },
];

const jobs = [
  {
    image: "./media/ph_img.png",
    desc: "SpaceX | Lead Technician | 2024-2025"
  },
  {
    image: "./media/ff_job.jpg",
    desc: "Fisherman's Finest | Deep Sea Fishing | 2023-2024"
  },
  {
    image: "./media/dg-jbb.JPG",
    desc: "JB Built | Residential Carpenter | 2020-2022"
  },
  {
    image: "./media/af_pic.jpg",
    desc: "USAF | Logistics Coordinator | 2012-2019"
  },
]

const hobbies = [
  {
    image: "./media/soccer_pic.jpg",
  },
  {
    image: "./media/sb_hobbie.jpg",
  },
  {
    image: "./media/hiking_pic.png",
  },
  {
    image: "./media/chess_pic.jpg",
  },
  
]

// Get the container element from the HTML
const container = document.getElementById('recommended-container');
const hobbieContainer = document.getElementById('hobbies-container')

// Loop through the data and create a card for each item
certs.forEach(item => {
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

  let currentIndex = 0;
  let carouselTimer

  // Function to create and append image elements to the carousel
  function createCarouselItems() {
    jobs.forEach(imgData => {
      const card = document.createElement('div')
      const imgElement = document.createElement('img');
      imgElement.src = imgData.image; 
      imgElement.alt = 'Carousel image';
      imgElement.className = 'carousel-img';

      const desc = document.createElement('pre');
      desc.textContent = imgData.desc
      desc.className = 'desc'

      card.className = 'carousel-card'
      card.appendChild(imgElement);
      card.appendChild(desc)
      carouselInner.appendChild(card)
    });
  }

  // Function to update which image is active
function updateCarousel() {
  const allImages = document.querySelectorAll('.carousel-card');

  allImages.forEach((card, index) => {
    // Select all direct children of the current card
    const cardChildren = card.children;
    console.log(cardChildren)
    if (index === currentIndex) {
      // If this is the active card, add the 'active' class to its children
      for (const child of cardChildren) {
        child.classList.add('active');
      }
    } else {
      // If it's not the active card, remove the 'active' class from its children
      for (const child of cardChildren) {
        child.classList.remove('active');
      }
    }
  });
}

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    clearInterval(carouselTimer)
    timer()
    if (currentIndex >= jobs.length) {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    clearInterval(carouselTimer)
    timer()
    if (currentIndex < 0) {
      currentIndex = jobs.length - 1;
    }
    updateCarousel();
  });
  function timer() {

    carouselTimer = setInterval(function () {
      currentIndex++;
      if (currentIndex >= jobs.length) {
        currentIndex = 0;
      }
      updateCarousel()
    }, 3500);
  }

  // --- Initial setup ---
  createCarouselItems();
  updateCarousel();
  timer()
});

// Hobbies section
hobbies.forEach(item => {
  // Create the main card div
  const card = document.createElement('div');
  card.className = 'hobbie-card';

  // Create the card footer to hold the other details
  const cardFooter = document.createElement('div');

  const imgItem = document.createElement('img');
  imgItem.className = 'hobbie-img';
  imgItem.src = item.image;
  card.appendChild(imgItem);

  // Append the card footer to the main card

  // Append the complete card to the container
  hobbieContainer.appendChild(card);
});
