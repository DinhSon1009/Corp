import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3";

import lgZoom from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3/plugins/zoom";

lightGallery(document.getElementById("gallery-container"), {
  speed: 500,
  plugins: [lgZoom],
});

var testimonialContent = new Swiper(".testimonial-comment", {
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  speed: 500,
  thumbs: {
    swiper: testimonialContent,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//  test
var count = 0;
document.querySelector(".moon").addEventListener("click", function () {
  count++;
  if (count % 2) {
    document.documentElement.style.setProperty("--bg-color", "#151421");
    document.documentElement.style.setProperty("--heading-color", "#eee");
    document.documentElement.style.setProperty("--font-color", "#c2c2c2");
    document.documentElement.style.setProperty("--bg-dark", "#100f19");
    document.documentElement.style.setProperty(
      "--border-color",
      "rgba(255, 255, 255, 0.2)"
    );
    document.documentElement.style.setProperty("--bg-lightgrey", "#100f19");
    document.documentElement.style.setProperty(
      "--border-color-light",
      "rgba(255,255,255,0.1)"
    );
    document.querySelector(".moon .fa-moon").style.display = "none";
    document.querySelector(".moon .fa-sun").style.display = "block";
  } else {
    document.documentElement.style.setProperty("--bg-color", "#fff");
    document.documentElement.style.setProperty("--heading-color", "#3f3a64");
    document.documentElement.style.setProperty("--font-color", "#666");
    document.documentElement.style.setProperty("--bg-dark", "#f7f7f7");
    document.documentElement.style.setProperty("--border-color", "transparent");
    document.documentElement.style.setProperty("--bg-lightgrey", "#f8f9fa");
    document.documentElement.style.setProperty("--border-color-light", "#eee");
    document.querySelector(".moon .fa-moon").style.display = "block";
    document.querySelector(".moon .fa-sun").style.display = "none";
  }
});
