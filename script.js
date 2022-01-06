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
    swiper: testimonialContent
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});