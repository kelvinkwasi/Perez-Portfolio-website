const buttons = document.querySelector(".button");

buttons.addEventListener("click", () => {
document.body.classList.toggle("dark-theme");
buttons.classList.toggle("active");
});