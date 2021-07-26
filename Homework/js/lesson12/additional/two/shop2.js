let container = document.getElementById('items');
const allProducts = localStorage.getItem('storage');

if (allProducts){

    const items = JSON.parse(allProducts);
    for (const item of items) {
        const newitem = document.createElement('tr');
        const delBtn = document.createElement('button');
        delBtn.innerText='Delete';
        delBtn.onclick = function (ev){
            const delitem = ev.path[1];
            delitem.remove();
        }

        newitem.innerHTML=(`<td>${item.name}</td><td>${item.count}</td><td>${item.price}</td><td><img src="${item.img}" alt="${item.name}"></td>`);
        newitem.appendChild(delBtn);
        container.appendChild(newitem);
    }

}
const clearBtn = document.createElement('button');
clearBtn.innerText = 'CLEAR ALL';
document.body.appendChild(clearBtn);
clearBtn.onclick = function (ev){
    localStorage.clear();
    container.remove();
    document.write(`Корзина пуста!\n<a href="index.html">Вернуться к покупкам</a>`);
}