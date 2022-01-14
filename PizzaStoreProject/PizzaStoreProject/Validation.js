$(document).ready(function () {
    $("#orderForm").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            address: {
                required: true,
                minlength: 15,
            },
            city: {
                required: true,
                minlength: 5
            },
            phone: {
                required: true,
                minlength: 7,
                maxlength: 15
            },
            email: {
                required: false,
                email: true
            }
        }
    });
    $("#orderForm").change(function () {
        if ($("#orderForm").valid()) {
            document.getElementById('submitButton').disabled = false;
        }
        else {
            document.getElementById('submitButton').disabled = true;
        }
    });
});