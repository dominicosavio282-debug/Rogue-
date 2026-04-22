const revealItems = document.querySelectorAll(".reveal");
const form = document.querySelector(".contact-form");
const formNote = document.getElementById("form-note");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 320)}ms`;
  observer.observe(item);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  formNote.textContent = "Demo request received. Rogue will reach out soon.";
});
