function Switch() {

    if (document.getElementById("orderCheckCapricciosa").checked == true) {
        document.getElementById("capricciosaInputQuantity").style.display = "block";
    } else {
        document.getElementById("capricciosaInputQuantity").style.display = "none";
        document.getElementById("inputCapricciosaQuantity").value = 0;
    }

    if (document.getElementById("orderCheckHawaiian").checked == true) {
        document.getElementById("hawaiianInputQuantity").style.display = "block";
    } else {
        document.getElementById("hawaiianInputQuantity").style.display = "none";
        document.getElementById("inputHawaiianQuantity").value = 0;
    }

    if (document.getElementById("orderCheckMargerita").checked == true) {
        document.getElementById("margeritaInputQuantity").style.display = "block";
    } else {
        document.getElementById("margeritaInputQuantity").style.display = "none";
        document.getElementById("inputMargeritaQuantity").value = 0;
    }

    if (document.getElementById("orderCheckMexicana").checked == true) {
        document.getElementById("mexicanaInputQuantity").style.display = "block";
    } else {
        document.getElementById("mexicanaInputQuantity").style.display = "none";
        document.getElementById("inputMexicanaQuantity").value = 0;

    }

    if (document.getElementById("orderCheckPepperoni").checked == true) {
        document.getElementById("pepperoniInputQuantity").style.display = "block";
    } else {
        document.getElementById("pepperoniInputQuantity").style.display = "none";
        document.getElementById("inputPepperoniQuantity").value = 0;
    }

    if (document.getElementById("orderCheckMushroom").checked == true) {
        document.getElementById("mushroomInputQuantity").style.display = "block";
    } else {
        document.getElementById("mushroomInputQuantity").style.display = "none";
        document.getElementById("inputMushroomQuantity").value = 0;
    }
}