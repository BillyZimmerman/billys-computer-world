// main.js - JavaScript for Billy Zimmerman's portfolio website

document.addEventListener("DOMContentLoaded", function () {
  // Flip cards on click
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form submission with basic validation and feedback
  const auditForm = document.getElementById("audit-form");
  if (auditForm) {
    auditForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const business = document.getElementById("business").value;

      if (!name || !email || !business) {
        alert("Please fill out all required fields.");
        return;
      }

      // Normally, you would send this data to your server
      // For demo purposes, we'll just show a success message
      auditForm.innerHTML = `
              <div class="success-message">
                  <i class="fas fa-check-circle" style="font-size: 3rem; color: #72b1a8; margin-bottom: 1rem;"></i>
                  <h3>Thank You, ${name}!</h3>
                  <p>Your website audit request has been submitted. I'll analyze your website and get back to you within 1-2 business days with insights and recommendations.</p>
                  <p style="margin-top: 1rem;">Meanwhile, feel free to check out my <a href="#projects" style="color: #e05e54;">recent projects</a>.</p>
              </div>
          `;

      // Scroll to the success message
      window.scrollTo({
        top: auditForm.offsetTop - 100,
        behavior: "smooth",
      });
    });
  }

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

// Recent Project - pop up functionality
// Sample project data - replace with your actual projects
const projects = [
  {
    name: "Perry's Steakhouse Online Market",
    description: "E-commerce platform for gourmet food and gifts",
    url: "",
    image: "assets/img/perrys.webp",
  },
  {
    name: "Michael Franti",
    description: "Artist website with music and merchandise store",
    url: "https://soulrockerfam.com/",
    image: "assets/img/MF.jpg",
  },
  {
    name: "Dermafladge",
    description: "Ethical jewelry e-commerce platform",
    url: "https://www.dermaflage.com/",
    image: "assets/img/ND.jpeg",
  },
  {
    name: "Willie Nelson",
    description: "Nostalgic event website with ticket sales",
    url: "https://willienelson.com/",
    image: "assets/img/WN.jpg",
  },
  {
    name: "Jelly Roll",
    description: "Local dining establishment with online reservations",
    url: "https://example.com/mountain-view",
    image: "assets/img/jelly.webp",
  },
  {
    name: "311",
    description: "Auto service shop with appointment booking",
    url: "https://example.com/auto-repair",
    image: "assets/img/311.webp",
  },
  {
    name: "Sleeping With Sirens",
    description: "Dental practice with patient portal integration",
    url: "https://sirensmusic.co/",
    image: "assets/img/sirens.jpg",
  },
  {
    name: "The Moody Blues",
    description: "Tourism company with booking system",
    url: "https://www.moodybluestoday.com/",
    image: "assets/img/MB.webp",
  },
  {
    name: "RunGum",
    description: "Local brewery with event calendar",
    url: "https://rungum.com/",
    image: "assets/img/RG.webp",
  },
  {
    name: "Black Sabbath UK shop",
    description: "Gym membership and class scheduling platform",
    url: "https://uk.blacksabbathapparelshop.com/",
    image: "assets/img/BS.png",
  },
  {
    name: "CMA Fest",
    description: "Law firm website with consultation forms",
    url: "https://shop.cmaworld.com",
    image: "assets/img/cma.webp",
  },
  {
    name: "Fail Army",
    description: "Property listings with virtual tour integration",
    url: "https://www.failarmy.com/",
    image: "assets/img/FA.png",
  },
];

// DOM elements
const viewAllBtn = document.getElementById("viewAllBtn");
const popupOverlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closeBtn");
const projectGrid = document.getElementById("projectGrid");

// Generate project grid
function generateProjectGrid() {
  projectGrid.innerHTML = "";
  projects.forEach((project, index) => {
    const projectItem = document.createElement("a");
    projectItem.className = "project-item";
    projectItem.href = project.url;
    projectItem.target = "_blank";
    projectItem.rel = "noopener noreferrer";

    projectItem.innerHTML = `
            <div class="project-item-image" style="background-image: url('${project.image}')">
            </div>
            <div class="project-item-content">
              <h3>${project.name}</h3>
              <p>${project.description}</p>
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

// Prevent body scroll when popup is open
window.addEventListener("resize", () => {
  if (popupOverlay.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  }
});
