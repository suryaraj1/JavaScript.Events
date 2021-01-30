const counter = document.querySelector(".counter");
let globalCount = 0;

counter.addEventListener('click', () => {
    globalCount++;
    counter.innerHTML = globalCount;
})