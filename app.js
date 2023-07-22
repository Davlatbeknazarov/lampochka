let on = document.querySelector(".on");
let off = document.querySelector(".off");
let img = document.querySelector("img");

on.addEventListener("click", () => {
  img.src = "bulb-on.png";
  img.classList.add("shadow");
});
off.addEventListener("click", () => {
  img.src = "bulb-off.png";
  img.classList.remove("shadow");
});
