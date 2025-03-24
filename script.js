document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("header");
  const baristaCards = document.querySelectorAll(".barista-card");
  const menuCards = document.querySelectorAll(".menu-card");
  const sendButton = document.querySelector(".send-button");

  let lastScrollY = window.scrollY;
  let isScrolling;

  baristaCards.forEach((card) => {
    const info = card.querySelector(".barista-info");
    card.addEventListener("mouseenter", () => {
      info.style.opacity = "1";
      info.style.transform = "translateY(0)";
    });

    card.addEventListener("mouseleave", () => {
      info.style.opacity = "0";
      info.style.transform = "translateY(20px)";
    });
  });

  function checkScroll() {
    menuCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 100) {
        card.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", () => {
    clearTimeout(isScrolling);

    if (window.scrollY > lastScrollY) {
      navbar.style.top = "-80px";
    } else {
      navbar.style.top = "0";
    }

    lastScrollY = window.scrollY;

    isScrolling = setTimeout(() => {
      navbar.style.top = "-80px";
    }, 1000);

    requestAnimationFrame(checkScroll);
  });

  checkScroll();

  
  if (sendButton) {
    sendButton.addEventListener("click", function () {
      if (confirm("Apakah Anda yakin ingin mengirim pesan ini?")) {
        alert("Pesan Anda telah dikirim!");
      }
    });
  }
});
