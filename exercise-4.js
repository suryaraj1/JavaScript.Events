const input = document.querySelector(".input-text");
const count = document.querySelector("span");

input.addEventListener('input', () => {
    count.innerText = input.value.length;
})