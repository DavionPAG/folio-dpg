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
    image: "./media/spacex_pic.png",
    desc: "SpaceX | Lead Technician | 2024-2025"
  },
  {
    image: "./media/ff_job.jpg",
    desc: "Fisherman's Finest | Deep Sea Fishing | 2023-2024"
  },
  {
    image: "./media/dg-jbb.jpeg",
    desc: "JB Built | Residential Carpenter | 2020-2022"
  },
  {
    image: "./media/af_pic.jpeg",
    desc: "USAF | Logistics Coordinator | 2012-2019"
  },
]

const hobbies = [
  {
    image: "./media/soccer_pic.png",
  },
  {
    image: "./media/sb_hobbie.jpg",
  },
  {
    image: "./media/hiking_pic.png",
  },
  {
    image: "./media/chess_pic.png",
  },
]

const images = [
    './media/af_pic.jpeg',
    './media/dg-jbb.jpeg',
    './media/ff_job.jpg',
    './media/spacex_pic.png',
];

const container = document.getElementById('recommended-container');
const hobbieContainer = document.getElementById('hobbies-container')

// Loop through the data and create a card for each item
certs.forEach(item => {


  const imgItem = document.createElement('img');
  imgItem.className = 'cert-image';
  imgItem.src = item.image;

  container.appendChild(imgItem);
});

document.addEventListener('DOMContentLoaded', (event) => {
  const backToTopButton = document.querySelector('.back-to-top');

  if (backToTopButton) {
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

// CAROUSEL ----------------------------------------------

// Get the image slot elements
const slots = document.querySelectorAll('.image-slot');
let currentImageIndexes = [0,1,2,3];

/**
 * Updates the background image of each slot based on the currentImageIndexes array.
 */
function updateCarouselDisplay() {
    slots.forEach((slot, i) => {
        const imageUrl = images[currentImageIndexes[i]];
        slot.style.backgroundImage = `url('${imageUrl}')`;
    });
}

/**
 * Rotates the images in the carousel.
 * @param {string} direction - 'left' to shift images left (next image becomes center), 'right' to shift images right (previous image becomes center).
 */
function rotateCarousel(direction) {
    if (direction === 'right') {
        // Shift right: [1, 2, 3] -> [3, 1, 2] (Last image moves to the front)
        const lastIndex = currentImageIndexes.pop();
        currentImageIndexes.unshift(lastIndex);
    } else if (direction === 'left') {
        // Shift left: [1, 2, 3] -> [2, 3, 1] (First image moves to the back)
        const firstIndex = currentImageIndexes.shift();
        currentImageIndexes.push(firstIndex);
    }

    updateCarouselDisplay();
}

/**
 * Adds event listeners to the side images for rotation on hover.
 */
function setupHoverListeners() {
    // Leftmost image slot (Index 0)
    slots[0].addEventListener('click', () => {
        // Click on left image rotates to the right
        rotateCarousel('right');
    });

    // Rightmost image slot (Index 2)
    slots[2].addEventListener('click', () => {
        // Click on right image rotates to the left
        rotateCarousel('left');
    });

    // Note: using 'click' instead of 'hover' for better UX on touch devices and to prevent rapid, confusing rotation.
    // If you strictly want hover, you would use 'mouseenter' and 'mouseleave' with a debounce/timeout.
}

// Initialize the carousel
updateCarouselDisplay();
setupHoverListeners();

// Hobbies section
hobbies.forEach(item => {
  const card = document.createElement('div');
  card.className = 'hobbie-card';

  const cardFooter = document.createElement('div');

  const imgItem = document.createElement('img');
  imgItem.className = 'hobbie-img';
  imgItem.src = item.image;
  card.appendChild(imgItem);

  hobbieContainer.appendChild(card);
});
