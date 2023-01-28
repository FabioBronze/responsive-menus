"use strict";

const menuShow = document
  .querySelector(".btn1")
  .addEventListener("click", () => {
    const menuMobile = document.querySelector(".mobile-menu");

    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
      document.querySelector(".icon").src = "img/menu_white_36dp.svg";
    } else {
      menuMobile.classList.add("open");
      document.querySelector(".icon").src = "img/close_white_36dp.svg";
    }
  });
