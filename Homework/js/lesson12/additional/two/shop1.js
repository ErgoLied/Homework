const form = document.forms.itemsForm;
const name = form.item;
const count = form.count;
const price = form.price;
const img = form.img;
const btn = form.btnAdd;


btn.onclick = function (ev){
    ev.preventDefault();
    let storage = [];
    const item = {
        name: name.value,
        count: count.value,
        price: price.value,
        img: img.value
    };
    const storageJSON = localStorage.getItem('storage');

    if (storageJSON){
        storage = JSON.parse(storageJSON);
    }
    storage.push(item);
    localStorage.setItem('storage', JSON.stringify(storage));
}
