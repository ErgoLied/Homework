// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
let formInp = document.forms.inputName;
const name = formInp.name;

name.oninput = function (ev){
    localStorage.setItem('name', ev.target.value);
}