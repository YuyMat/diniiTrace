const question1 = document.querySelector(".container__inner-1");
const question2 = document.querySelector(".container__inner-2");
const container = document.querySelector(".container");

question1.addEventListener("click", function () {
    container.classList.toggle("open1");
})

question2.addEventListener("click", function () {
    container.classList.toggle("open2");
})