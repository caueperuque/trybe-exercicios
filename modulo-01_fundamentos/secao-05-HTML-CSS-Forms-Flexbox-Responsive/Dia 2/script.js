// const test = () => {
let checkbox = document.getElementById('agreement');
const getFullName = document.getElementById('fullName');
checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
        document.getElementById('submit-btn').removeAttribute("disabled");
    } else {
        document.getElementById('submit-btn').setAttribute("disabled", 'true');
    }
});


