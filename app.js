const header = document.querySelector("#header");
const btnNav = document.querySelector(".btn-mobile-nav");
const heroSection = document.querySelector("#hero");
const form = document.querySelector("#signup-form");

function setMenu(open) {
  header.classList.toggle("nav-open", open);
  btnNav.setAttribute("aria-expanded", open);
  btnNav.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

btnNav.addEventListener("click", function () {
  setMenu(!header.classList.contains("nav-open"));
});

document.querySelectorAll(".main-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    setMenu(false);
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") setMenu(false);
});

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    document.body.classList.toggle("is-sticky", !ent.isIntersecting);
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = form.querySelector("button");
  const oldText = btn.textContent;

  btn.textContent = "Thank you!";
  btn.disabled = true;
  form.reset();

  setTimeout(function () {
    btn.textContent = oldText;
    btn.disabled = false;
  }, 3000);
});
