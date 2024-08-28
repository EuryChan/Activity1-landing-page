const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});



ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});


// ABOUT
ScrollReveal().reveal(".importance h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".info-access h2", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".info-access p", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".info-access img", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});


ScrollReveal().reveal(".custom-engage h2", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".custom-engage p", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".custom-engage img", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});


ScrollReveal().reveal(".e-commerce h2", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".e-commerce p", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".e-commerce img", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});


ScrollReveal().reveal(".analysis h2", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".analysis p", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".analysis img", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});