const form = document.querySelector('.main-form');
// var email = document.getElementById('email');

function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    return reg.test(emailField);
 }

form.addEventListener("submit", (e) => {
    const field = form.querySelector('input');
    const txtWarning = form.querySelector('.warning');
    const imgWarning = form.querySelector('.warning-img');

    if (field.value.trim() == '' || !validateEmail(field.value)) {
        e.preventDefault();
        imgWarning.classList.remove("none");
        txtWarning.classList.remove("none");
    } 
})
