// External trackers we should open in a new tab
const EXTERNAL_TRACKERS = {
  westernunion: "https://www.westernunion.com/us/en/track-transfer.html",
  vigo: "https://www.westernunion.com/us/en/track-transfer.html"
};

// Override/extend your existing openTracking
function openTracking(name) {
  // If this provider should open externally, do that and return
  if (EXTERNAL_TRACKERS[name]) {
    window.open(EXTERNAL_TRACKERS[name], "_blank", "noopener");
    return;
  }

  // Otherwise use your modal (Ria, JV Cargo, etc.)
  const modal = document.getElementById(`${name}Modal`);
  if (modal) {
    modal.removeAttribute("hidden");
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

function closeTracking(name) {
  const modal = document.getElementById(`${name}Modal`);
  if (modal) {
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("hidden", "");
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}



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
    delay: 20000,
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

let servicesSwiper = new Swiper(".services-swiper", {
  slidesPerView: 4,       // show 4 services at once
  slidesPerGroup: 4,      // move 4 at a time
  spaceBetween: 30,       // spacing between slides
  loop: true,             // infinite loop
  loopFillGroupWithBlank: true, // fill last slide if not multiple of 4

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

