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

const container = document.getElementById('recommended-container');
const hobbieContainer = document.getElementById('hobbies-container')

// Loop through the data and create a card for each item
certs.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';

  const cardFooter = document.createElement('div');
  cardFooter.className = 'card-footer';

  const imgItem = document.createElement('img');
  imgItem.className = 'cert-image';
  imgItem.src = item.image;
  card.appendChild(imgItem);

  card.appendChild(cardFooter);

  container.appendChild(card);
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
    const cardChildren = card.children;
    console.log(cardChildren)
    if (index === currentIndex) {
      for (const child of cardChildren) {
        child.classList.add('active');
      }
    } else {
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

  createCarouselItems();
  updateCarousel();
  timer()
});

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
