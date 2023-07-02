const addItemForm = document.getElementById('add-item');
const itemList = document.getElementById('items-list');

addItemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newItemName = document.getElementById('new-item-name').value;
    const newItemPrice = document.getElementById('new-item-price').value;
    const newItemStock = document.getElementById('new-item-stock').value;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${newItemName} - Price: $${newItemPrice} - In Stock: ${newItemStock}`;

    itemList.appendChild(listItem);

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