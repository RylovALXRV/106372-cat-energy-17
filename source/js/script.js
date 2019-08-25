"use strict";
var navigationElement = document.querySelector(".navigation");
var navigationBtnElement = navigationElement.querySelector(".navigation__btn");

navigationElement.classList.remove("navigation--nojs");

navigationBtnElement.addEventListener("click", function () {
  if (navigationElement.classList.contains("navigation--closed")) {
    navigationElement.classList.remove("navigation--closed");
    navigationElement.classList.add("navigation--open");
  } else {
    navigationElement.classList.remove("navigation--open");
    navigationElement.classList.add("navigation--closed");
  }
});
