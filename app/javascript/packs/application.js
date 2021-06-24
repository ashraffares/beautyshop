// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

console.log("working fine!");

Rails.start()
Turbolinks.start()
ActiveStorage.start()

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

if (left) {
left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
})

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
})
}
if (right) {
right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
})
  
right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
})
}
