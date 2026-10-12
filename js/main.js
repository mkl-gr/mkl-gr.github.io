// main.js

document.addEventListener("DOMContentLoaded", () => {
  /* Project containers click */
  const projectContainers = document.querySelectorAll(".project-container");
  projectContainers.forEach(container => {
    const target = container.dataset.target;
    if (!target) return;
    container.addEventListener("click", () => {
      window.location.href = target;
    });
  });

  /* Mobile nav dropdown */
  const navToggle = document.querySelector(".nav-toggle");
  const navLists = document.getElementById("nav-lists");

  if (navToggle && navLists) {
    navToggle.addEventListener("click", () => {
      navLists.classList.toggle("open");
    });
  }

  /* Active nav item based on body data-page */
  const pageId = document.body.dataset.page;
  if (pageId) {
    const activeLink = document.querySelector(`.nav-${pageId}`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  /* Read-more expansion */
  const readMoreButtons = document.querySelectorAll(".read-more-button");
  readMoreButtons.forEach(btn => {
    const targetId = btn.dataset.target;
    if (!targetId) return;
    const content = document.getElementById(targetId);
    if (!content) return;

    btn.addEventListener("click", () => {
      const isOpen = content.classList.toggle("open");
      btn.textContent = isOpen ? "Read less" : "Read more";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("back-to-top");

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      const supportsSmooth = "scrollBehavior" in document.documentElement.style;

      if (supportsSmooth) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
    });
  }
});