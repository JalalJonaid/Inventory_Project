const addItemForm = document.getElementById('add-item-form');
const itemList = document.getElementById('items-list');

addItemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newItemName = document.getElementById('new-item-name').value;
    const newItemPrice = document.getElementById('new-item-price').value;
    const newItemStock = document.getElementById('new-item-stock').value;

    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
    <h2>${newItemName}</h2>
    <p>Price: <span>$${newItemPrice}</span></p>
    <p>Stock: <span>${newItemStock}</span></p>
    <button class="stock-btn" onclick="changeStock('${newItemName}', 'add')">+</button>
    <button class="stock-btn" onclick="changeStock('${newItemName}', 'subtract')">-</button>
    <button class="delete-btn" onclock="deleteItem(this)">Delete</button>`;

    itemList.appendChild(newItem);

    addItemForm.reset();
});

function changeStock(item, action) {
    const stockElement = document.getElementById(`${item}-stock`);
    let stock = parseInt(stockElement.textContent);

    if (action === 'add') {
        stock++;
    }
    else if (action === 'subtract'){
        if (stock > 0) {
            stock--;
        }
    }

    stockElement.textContent = stock;
}

function deleteItem(button) {
    const itemElement = button.parentElement;
    itemElement.remove();
}