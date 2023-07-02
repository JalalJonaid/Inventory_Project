const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('items-list');

itemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('name').value;
    const itemPrice = document.getElementById('price').value;
    const itemStock = document.getElementById('stock').value;

const listItem = document.createElement('li');
listItem.innerHTML = `<strong>${itemName}</strong> - Price: $${itemPrice} - In Stock: ${itemStock}`;

itemList.appendChild(listItem);
});