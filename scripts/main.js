const imgWarning = document.querySelector('.warning-img');
const txtWarning = document.querySelector('.warning');
const button = document.querySelector('.mainBtn');

button.addEventListener("click", (e) => {
    e.preventDefault();
    imgWarning.classList.remove("none");
    txtWarning.classList.remove("none");
})
