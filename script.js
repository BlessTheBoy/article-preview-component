const shareBtn = document.querySelector("#shareBtn");
const tooltip = document.querySelector(".tooltip");

shareBtn.addEventListener("click", () => {
  console.log("button clicked");
  tooltip.classList.toggle("active");
  shareBtn.classList.toggle("active");
});
