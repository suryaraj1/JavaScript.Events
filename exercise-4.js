const input = document.querySelector(".input-text");
const count = document.querySelector("span");
let characterCount = 0;

input.addEventListener('keydown', () => {
    characterCount++;
    count.innerHTML = characterCount;
})