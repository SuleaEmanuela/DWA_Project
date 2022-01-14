function SubmitAlert() {
    let order = {
        id: Date.now(),
        name: document.getElementById('inputName').value,
        address: document.getElementById('inputAddress').value,
        city: document.getElementById('inputCity').value,
        phone: document.getElementById('inputPhone').value,
        capricciosa: document.getElementById('inputCapricciosaQuantity').value,
        hawaiian: document.getElementById('inputHawaiianQuantity').value,
        margerita: document.getElementById('inputMargeritaQuantity').value,
        mexicana: document.getElementById('inputMexicanaQuantity').value,
        pepperoni: document.getElementById('inputPepperoniQuantity').value,
        mushroom: document.getElementById('inputMushroomQuantity').value,
        comments: document.getElementById('CommentsSection').value
    }

    var keys = Object.keys(localStorage);
    localStorage.setItem(keys.length, JSON.stringify(order));

    alert("Thank you! Your order was sent!");
};
