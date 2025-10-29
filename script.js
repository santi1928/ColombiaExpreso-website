const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

/* Initializing Swiper */
let contentswiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

(function () {
    const el = document.getElementById('phone');
    if (!el) return;

    el.addEventListener('input', function (e) {
      // keep only digits and limit to 10
      const digits = e.target.value.replace(/\D/g, '').slice(0, 10);

      let out = digits;
      if (digits.length > 6) {
        out = `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
      } else if (digits.length > 3) {
        out = `(${digits.slice(0,3)}) ${digits.slice(3)}`;
      } else if (digits.length > 0) {
        out = `(${digits}`;
      }

      e.target.value = out;
    });
  })();

let heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let exchangeSwiper = new Swiper(".exchange-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".exchange-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".exchange-swiper .swiper-button-next",
    prevEl: ".exchange-swiper .swiper-button-prev",
  },
});


// ====== TRACKING MODAL FUNCTIONS ======

// Function to open tracking modal
function openTracking(provider) {
  const modal = document.getElementById(provider + 'Modal');
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

// Function to close tracking modal
function closeTracking(provider) {
  const modal = document.getElementById(provider + 'Modal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
  }

});
