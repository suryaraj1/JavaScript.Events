const input = document.querySelector(".input-code");
const colorOutput = document.querySelector(".output");

input.addEventListener('input', () => {
    colorOutput.style.backgroundColor = input.value;
})