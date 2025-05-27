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
