const decrementButton = document.querySelector(".minus");
const incrementButton = document.querySelector(".plus");
const display = document.querySelector(".display")
let globalCounter = 0;

decrementButton.addEventListener('click', () => {
    globalCounter--;
    display.value = globalCounter;
})

incrementButton.addEventListener('click', () => {
    globalCounter++;
    display.value = globalCounter;
})