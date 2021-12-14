// ScrollReveal

console.log("yes");
const sr = ScrollReveal({
  distance: "80px",
  duration: 3000,
  delay: 400,
  // reset: true,
});

sr.reveal(`.navlinks, .section__title`);
sr.reveal(` .footer-copyright`, { origin: "top", distance: "30px" });
sr.reveal(`.home-img, .home-footer`, {
  origin: "top",
  delay: 1500,
  interval: 500,
  distance: "30px",
});
sr.reveal(` .products-card`, {
  origin: "top",
  delay: 100,
  interval: 500,
  distance: "30px",
});
sr.reveal(` .sponsor-img, .footer-container`, {
  origin: "bottom",
  distance: "30px",
  interval: 1000,
});
sr.reveal(`.header-left, .case-img,.discount-animate`, {
  origin: "left",
});
sr.reveal(`.header-right, .case-content, .discount-img`, {
  origin: "right",
});
