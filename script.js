document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan elemen hamburger
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  // Apply saved theme preference immediately
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
  }

  // Fungsi untuk menyembunyikan hamburger di desktop
  function handleScreenSize() {
    if (window.innerWidth > 768) {
      // Sembunyikan hamburger di desktop
      if (hamburger) {
        hamburger.style.display = "none";
        hamburger.style.visibility = "hidden";
        hamburger.style.opacity = "0";
      }

      // Reset menu mobile jika terbuka saat resize ke desktop
      if (navLinks && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        body.classList.remove("menu-open");
      }
    } else {
      // Tampilkan hamburger di mobile
      if (hamburger) {
        hamburger.style.display = "flex";
        hamburger.style.visibility = "visible";
        hamburger.style.opacity = "1";
      }
    }
  }

  // Jalankan sekali saat halaman dimuat
  handleScreenSize();

  // Jalankan setiap kali ukuran layar berubah
  window.addEventListener("resize", handleScreenSize);

  // Theme toggle functionality
  const themeToggle = document.querySelector('.theme-toggle input');
  const currentTheme = localStorage.getItem('theme') || 'dark'; // Set default to 'dark'

  // Apply the saved theme
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Set the toggle state based on the saved theme
  if (currentTheme === 'dark') {
    themeToggle.checked = true;
  }

  // Listen for toggle changes
  themeToggle.addEventListener('change', () => {
    const theme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });

  // ENHANCED Mobile menu toggle
  if (hamburger) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation(); // Hindari event bubbling

      // Toggle active class for hamburger animation
      this.classList.toggle("active");

      // Toggle menu visibility
      navLinks.classList.toggle("active");

      // Prevent body scrolling when menu is open
      body.classList.toggle("menu-open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideMenu = navLinks.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);

      if (
        navLinks.classList.contains("active") &&
        !isClickInsideMenu &&
        !isClickOnHamburger
      ) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });

    // Close menu when window is resized to desktop size
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });

    // Close menu when a nav link is clicked
    const menuLinks = navLinks.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        body.classList.remove("menu-open");
      });
    });
  }

  // Portfolio filter functionality (if on portfolio page)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));

        // Add active class to clicked button
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        // Filter portfolio items
        portfolioItems.forEach((item) => {
          if (
            filterValue === "all" ||
            item.getAttribute("data-category") === filterValue
          ) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  // Contact form validation (if on contact page)
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple form validation
      let isValid = true;
      const requiredFields = contactForm.querySelectorAll("[required]");

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = "red";
        } else {
          field.style.borderColor = "";
        }
      });

      // Email validation
      const emailField = contactForm.querySelector('[type="email"]');
      if (emailField && emailField.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          isValid = false;
          emailField.style.borderColor = "red";
        }
      }

      if (isValid) {
        // In a real implementation, you would send the form data to a server
        alert(
          "Thank you for your message! This is a demo form, so no actual message was sent."
        );
        contactForm.reset();
      } else {
        alert("Please fill out all required fields correctly.");
      }
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        }
      }
    });
  });

  // Animation for scroll indicator
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollIndicator.style.opacity = "0";
      } else {
        scrollIndicator.style.opacity = "1";
      }
    });
  }

  // Add animation classes when elements come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".service-card, .about-image, .skill, .stat-item"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.classList.add("animated");
      }
    });
  };

  // Run animation check on load and scroll
  window.addEventListener("load", animateOnScroll);
  window.addEventListener("scroll", animateOnScroll);

  // ===== GRADIENT ANIMATION ENHANCEMENTS =====

  // Create and position floating gradient dots
  function createGradientDots() {
    const gradientDotsContainer = document.querySelector(".gradient-dots");
    if (!gradientDotsContainer) return;

    for (let i = 0; i < 50; i++) {
      const dot = document.createElement("div");
      dot.className = "gradient-dot";

      // Random position
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;

      // Random size
      const size = Math.random() * 5 + 2;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;

      // Random animation duration and delay
      const duration = Math.random() * 5 + 3;
      const delay = Math.random() * 5;
      dot.style.animation = `pulseAndMove ${duration}s infinite ${delay}s`;

      gradientDotsContainer.appendChild(dot);
    }
  }

  // Create gradient particles for sections
  function createParticles() {
    const containers = document.querySelectorAll(".particles-container");

    containers.forEach((container) => {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        // Random size
        const size = Math.random() * 20 + 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random background - use the primary or secondary color
        const isOdd = i % 2;
        if (isOdd) {
          particle.style.background = "var(--primary-color)";
        } else {
          particle.style.background = "var(--secondary-color)";
        }

        // Random opacity
        particle.style.opacity = `${Math.random() * 0.2 + 0.05}`;

        // Random animation delay
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
      }
    });
  }

  // Add interactive gradient movement based on mouse position
  function addGradientInteractivity() {
    const gradientSections = document.querySelectorAll(
      ".hero, .about, .cta-section, .page-header"
    );

    gradientSections.forEach((section) => {
      section.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate position as percentage
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        // Move the gradient slightly
        this.style.backgroundImage = `
                    radial-gradient(
                        circle at ${xPercent}% ${yPercent}%,
                        rgba(var(--primary-color-rgb), 0.2),
                        transparent 50%
                    ),
                    var(--gradient-background)
                `;

        // Move the shapes slightly for parallax effect
        const shapes = this.querySelectorAll(".shape");
        shapes.forEach((shape, index) => {
          const speed = index + 1 * 2;
          const xMove = (xPercent - 50) / speed;
          const yMove = (yPercent - 50) / speed;

          shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
      });

      section.addEventListener("mouseleave", function () {
        this.style.backgroundImage = "";

        const shapes = this.querySelectorAll(".shape");
        shapes.forEach((shape) => {
          shape.style.transform = "";
        });
      });
    });
  }

  // Enhanced hover effects for gradient elements
  function enhanceGradientHoverEffects() {
    // Service cards
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const icon = this.querySelector(".service-icon");
        if (icon) {
          icon.style.animationDuration = "2s"; // Speed up the animation
        }
      });

      card.addEventListener("mouseleave", function () {
        const icon = this.querySelector(".service-icon");
        if (icon) {
          icon.style.animationDuration = "5s"; // Restore normal animation speed
        }
      });
    });

    // Portfolio items
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px) scale(1.02)";
        this.style.boxShadow = "0 15px 30px var(--shadow-color)";
      });

      item.addEventListener("mouseleave", function () {
        this.style.transform = "";
        this.style.boxShadow = "";
      });
    });
  }

  // Initialize all gradient features
  function initializeGradientFeatures() {
    createGradientDots();
    createParticles();
    addGradientInteractivity();
    enhanceGradientHoverEffects();
  }

  // Run all gradient initializations
  initializeGradientFeatures();
});
