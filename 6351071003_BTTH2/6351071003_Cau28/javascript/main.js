// main.js
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function updateTotal(input) {
    var row = input.parentNode.parentNode;
    var quantity = row.querySelector(".quantity").value;
    var unitPrice = row.querySelector(".unitPrice").value;

    var total = quantity * unitPrice;

    row.querySelector('p').innerHTML = total;
}
