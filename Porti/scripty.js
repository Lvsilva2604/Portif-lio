document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
});
