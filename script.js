const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

const stateCarousel = document.querySelector(".state-carousel");
const previousButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

if (stateCarousel && previousButton && nextButton) {
  const scrollByCards = (direction) => {
    const firstCard = stateCarousel.querySelector(".state-card");
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 220;
    stateCarousel.scrollBy({
      left: direction * (cardWidth + 16) * 3,
      behavior: "smooth"
    });
  };

  previousButton.addEventListener("click", () => scrollByCards(-1));
  nextButton.addEventListener("click", () => scrollByCards(1));
}

// Future insertion points:
// - Load state destination metadata from JSON or a CMS.
// - Hydrate blog cards from a travel blog feed.
// - Attach booking widgets or travel agent partner integrations.
