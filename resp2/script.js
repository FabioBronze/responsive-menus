"use strict";

const btnMobile = document.querySelector("#btn-mobile");

function toggleMenu(e) {
  if (e.type === "touchstart") e.preventDefault();
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  e.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    e.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    e.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
