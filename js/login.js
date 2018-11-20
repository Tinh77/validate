var error_login = $('#login-form').validate({
    rules: {
        email: {
            required: true,
        },
        password: {
            required: true,
            maxlength: 50,
            minlength: 2
        }
    },
    messages: {
        email: {
            required: "Trường email không đc để trống"
        },
        password: {
            required: "Trường password không đc để trống",
            minlength: "Trường password không đc ít hơn {0}",
            maxlength: "Trường password không đc quá {0}"
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderObject = {
            email: $(form["email"]).val(),
            password: $(form["password"]).val()
        };
        $.ajax({
            url: 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication',
            type: 'POST',
            data: JSON.stringify(senderObject),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                alert(`Đăng nhập thành công.`);
                localStorage.setItem('token-key', data.token);
            },
            error: function (jqXHR) {
                if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                    $('#summary').text(`Please fix ${Object.keys(jqXHR.responseJSON.error).length} below!`);
                    error_login.showErrors(jqXHR.responseJSON.error);
                }
            }
        });
        return false;
    }
});



