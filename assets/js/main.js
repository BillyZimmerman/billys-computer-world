document.addEventListener("DOMContentLoaded", function () {
  // Flip cards on click
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });

  // UNUSED CODE - COMMENTED OUT FOR PERFORMANCE
  // ============================================
  // FLIP CARDS SLIDER JS - This was looking for DOM elements that don't exist in your HTML
  /*
  class FlipCardSlider {
    constructor() {
      this.container = document.getElementById("cardsContainer");
      this.prevBtn = document.getElementById("prevBtn");
      this.nextBtn = document.getElementById("nextBtn");
      this.sliderNav = document.getElementById("sliderNav");
      this.sliderDots = document.getElementById("sliderDots");
      this.cards = document.querySelectorAll(".about-me-container");
      this.currentIndex = 0;
      this.isSliderMode = false;

      this.init();
    }

    init() {
      this.checkScreenSize();
      this.createDots();
      this.bindEvents();
      window.addEventListener("resize", () => this.checkScreenSize());
    }

    checkScreenSize() {
      const wasSliderMode = this.isSliderMode;
      this.isSliderMode = window.innerWidth <= 1024;

      if (this.isSliderMode !== wasSliderMode) {
        if (this.isSliderMode) {
          this.enableSlider();
        } else {
          this.disableSlider();
        }
      }

      if (this.isSliderMode) {
        this.updateSlider();
      }
    }

    enableSlider() {
      this.sliderNav.style.display = "flex";
      this.sliderDots.style.display = "flex";
      this.currentIndex = 0;
      this.updateSlider();
    }

    disableSlider() {
      this.sliderNav.style.display = "none";
      this.sliderDots.style.display = "none";
      this.container.style.transform = "translateX(0)";
    }

    createDots() {
      this.sliderDots.innerHTML = "";
      this.cards.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.className = "dot";
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => this.goToSlide(index));
        this.sliderDots.appendChild(dot);
      });
    }

    bindEvents() {
      this.prevBtn.addEventListener("click", () => this.prevSlide());
      this.nextBtn.addEventListener("click", () => this.nextSlide());

      // Touch events for mobile swiping
      let startX, startY, distX, distY;

      this.container.addEventListener("touchstart", (e) => {
        if (!this.isSliderMode) return;
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
      });

      this.container.addEventListener("touchmove", (e) => {
        if (!this.isSliderMode) return;
        e.preventDefault();
      });

      this.container.addEventListener("touchend", (e) => {
        if (!this.isSliderMode) return;
        distX = e.changedTouches[0].pageX - startX;
        distY = e.changedTouches[0].pageY - startY;

        // Check if horizontal swipe is more significant than vertical
        if (Math.abs(distX) > Math.abs(distY) && Math.abs(distX) > 50) {
          if (distX > 0) {
            this.prevSlide();
          } else {
            this.nextSlide();
          }
        }
      });
    }

    updateSlider() {
      if (!this.isSliderMode) return;

      const isMobile = window.innerWidth <= 768;
      let cardWidth, offset;

      if (isMobile) {
        // On mobile, show one card with peek of next
        cardWidth = this.cards[0].offsetWidth + 15; // card width + gap
        offset = -this.currentIndex * cardWidth;
      } else {
        // On tablet, show 2-3 cards
        cardWidth = this.cards[0].offsetWidth + 20; // card width + gap
        offset = -this.currentIndex * cardWidth;
      }

      this.container.style.transform = `translateX(${offset}px)`;
      this.updateDots();
      this.updateNavButtons();
    }

    updateDots() {
      document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === this.currentIndex);
      });
    }

    updateNavButtons() {
      this.prevBtn.disabled = this.currentIndex === 0;
      this.nextBtn.disabled = this.currentIndex >= this.cards.length - 1;
    }

    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateSlider();
      }
    }

    nextSlide() {
      if (this.currentIndex < this.cards.length - 1) {
        this.currentIndex++;
        this.updateSlider();
      }
    }

    goToSlide(index) {
      this.currentIndex = index;
      this.updateSlider();
    }
  }

  // Initialize the slider when DOM is loaded - COMMENTED OUT BECAUSE NOT NEEDED
  // document.addEventListener("DOMContentLoaded", () => {
  //   new FlipCardSlider();
  // });
  */

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add animation for the process steps on scroll
  const processSteps = document.querySelectorAll(".process-step");

  // Simple function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add animation class when element is in viewport
  function handleScroll() {
    processSteps.forEach((step) => {
      if (isInViewport(step)) {
        step.classList.add("animated");
      }
    });
  }

  // Add CSS class for animation
  processSteps.forEach((step) => {
    step.style.opacity = "0";
    step.style.transform = "translateY(20px)";
    step.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Check on scroll and initial load
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check on page load
});

// RECENT PROJECT - POP UP FUNCTIONALITY
// Sample project data
const projects = [
  {
    name: "Merch Mountain",
    url: "https://www.merchmountain.com/",
    image: "assets/img/MM.webp",
  },
  {
    name: "Michael Franti",
    url: "https://soulrockerfam.com/",
    image: "assets/img/MF.jpg",
  },
  {
    name: "Megadeth",
    url: "https://www.megadeth.com/",
    image: "assets/img/MD.jpg",
  },
  {
    name: "Willie Nelson",
    url: "https://willienelson.com/",
    image: "assets/img/WN.jpg",
  },
  {
    name: "Jelly Roll",
    url: "https://example.com/mountain-view",
    image: "assets/img/jelly.webp",
  },
  {
    name: "311",
    url: "https://311.com/",
    image: "assets/img/311.webp",
  },
  {
    name: "Sleeping With Sirens",
    url: "https://sirensmusic.co/",
    image: "assets/img/sirens.jpg",
  },
  {
    name: "The Moody Blues",
    url: "https://www.moodybluestoday.com/",
    image: "assets/img/MB.webp",
  },
  {
    name: "RunGum",
    url: "https://rungum.com/",
    image: "assets/img/RG.webp",
  },
  {
    name: "Black Sabbath UK shop",
    url: "https://uk.blacksabbathapparelshop.com/",
    image: "assets/img/BS.png",
  },
  {
    name: "CMA Fest",
    url: "https://shop.cmaworld.com",
    image: "assets/img/cma.webp",
  },
  {
    name: "Fail Army",
    url: "https://www.failarmy.com/",
    image: "assets/img/FA.png",
  },
];

// DOM elements
const viewAllBtn = document.getElementById("viewAllBtn");
const popupOverlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closeBtn");
const projectGrid = document.getElementById("projectGrid");

// Generate project grid with lazy loading
function generateProjectGrid() {
  projectGrid.innerHTML = "";
  projects.forEach((project) => {
    // Removed unused index parameter for performance
    const projectItem = document.createElement("a");
    projectItem.className = "project-item";
    projectItem.href = project.url;
    projectItem.target = "_blank";
    projectItem.rel = "noopener noreferrer";

    // Using img element with lazy loading instead of background image
    projectItem.innerHTML = `
      <div class="project-item-image">
        <img 
          src="${project.image}" 
          alt="${project.name} website screenshot"
          loading="lazy"
          decoding="async"
          onload="this.style.opacity='1'"
          style="opacity: 0; transition: opacity 0.3s ease;"
        >
      </div>
      <div class="project-item-content">
        <h3>${project.name}</h3>
      </div>
    `;

    projectGrid.appendChild(projectItem);
  });
}

// Open popup
function openPopup() {
  generateProjectGrid();
  popupOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close popup
function closePopup() {
  popupOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Event listeners
viewAllBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);

// Close popup when clicking outside content
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    closePopup();
  }
});

// Close popup with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popupOverlay.classList.contains("active")) {
    closePopup();
  }
});

// UNUSED CODE - COMMENTED OUT FOR PERFORMANCE
// ============================================
// Prevent body scroll when popup is open - This was redundant
/*
window.addEventListener("resize", () => {
  if (popupOverlay.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  }
});
*/

// TEXT TICKER FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  const tickerContainer = document.querySelector(".pricing-ticker-container");
  const tickerWrapper = document.querySelector(".ticker-wrapper");
  const textTicker = document.querySelector(".text-ticker");

  // Function to adjust animation speed based on text length and screen size
  function adjustTickerSpeed() {
    const containerWidth = tickerContainer.offsetWidth;
    const textWidth = textTicker.offsetWidth;
    const screenWidth = window.innerWidth;

    // Calculate duration based on text length and screen size
    let baseDuration = 60; // seconds

    if (screenWidth <= 480) {
      baseDuration = 35;
    } else if (screenWidth <= 768) {
      baseDuration = 45;
    }

    // Adjust duration based on text length
    const ratio = textWidth / containerWidth;
    const adjustedDuration = Math.max(baseDuration * Math.min(ratio, 2), 20);

    tickerWrapper.style.animationDuration = adjustedDuration + "s";
  }

  // Hover pause functionality
  function pauseTicker() {
    tickerWrapper.style.animationPlayState = "paused";
  }

  function resumeTicker() {
    tickerWrapper.style.animationPlayState = "running";
  }

  // Add hover event listeners
  tickerContainer.addEventListener("mouseenter", pauseTicker);
  tickerContainer.addEventListener("mouseleave", resumeTicker);

  // Add touch events for mobile devices
  tickerContainer.addEventListener("touchstart", pauseTicker);
  tickerContainer.addEventListener("touchend", resumeTicker);

  // Initial adjustment
  adjustTickerSpeed();

  // Adjust on window resize
  window.addEventListener("resize", adjustTickerSpeed);

  // Optional: Add smooth start after page load
  setTimeout(() => {
    tickerWrapper.style.animationPlayState = "running";
  }, 100);
});
