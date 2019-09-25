// Remove the 'mobile hidden' class from the ul

const hamburger = document.querySelector(".fa-hamburger");
const hiddenUL = document.querySelector("ul");

hamburger.addEventListener("click", function() {
  console.log(hiddenUL.classList);
});
