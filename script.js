const section = document.querySelector(".main"),
overlay = document.querySelector(".overlay"),
 button = document.querySelector(".names"),
 buttons = document.querySelector(".buon");

button.addEventListener("click", () => section.classList.add("active"));


overlay.addEventListener("click", () => section.classList.remove("active"));
buttons.addEventListener("click", () => {
    section.classList.remove("active")
});

console.log(buttons)