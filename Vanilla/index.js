const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", () => {
  console.log("clicked");
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
