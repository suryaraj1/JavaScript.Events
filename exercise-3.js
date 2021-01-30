const url = document.querySelector(".input-url");
const encoder = document.querySelector(".encode");
const decoder = document.querySelector(".decode");
const result = document.querySelector(".output");

const urlEncode = url => encodeURIComponent(url);
const urlDecode = url => decodeURIComponent(url);

encoder.addEventListener('click', () => {
    result.value = urlEncode(url.value);
})

decoder.addEventListener('click', () => {
    result.value = urlDecode(url.value);
})