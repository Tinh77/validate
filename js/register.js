var validate = $('#register-form').validate({
    rules: {
        firstName: {
            required: true,
            maxlength: 30,
            minlength: 7
        },
        lastName: {
            required: true,
            minlength: 30,
            minlength: 7
        },
        password: {
            required: true,
            maxlength: 50,
            minlength: 8
        },
        'confirm-Password': {
            equalTo: '[name="password"]'
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderObject = {
            firstName: $(form["firstName"]).val(),
            lastName: $(form["lastName"]).val(),
            password: $(form["password"]).val(),
            address: $(form["address"]).val(),
            phone: $(form["phone"]).val(),
            gender: $(form["gender"]).val(),
            email: $(form["email"]).val(),
            avatar: $(form["avatar"]).val(),
            birthday: formatDate($(form["birthday"]).val()),
        };
        $.ajax({
            url: REGISTER_API,
            type: 'POST',
            data: JSON.stringify(senderObject),
            contentType: "application/json; charset=utf-8",
            success: function (data, textStatus, jqXHR) {
                alert("success");
            },
            error: function (jqXHR) {
                if(Object.keys(jqXHR.responseJSON.error).length >0){
                    validate.showErrors(jqXHR.responseJSON.error);
                }
            }
        });
        return false;
    }
});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}

