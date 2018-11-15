$('form[name="form-login"][name="btn-login"]').click(function () {
    alert(2);
});
$(document).ready(function () {
    $('#register-form').validate({
        rules: {
            firstName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            lastName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            email: {
                required: true,
                email: true
            },
            confirmPassword: {
                required: true,
                minlength: 2,
                maxlength: 15,
                equalTo: '[name="password"]'
            },
            address: {
                required: true
            },
            phone: {
                required: true
            },
            avatar: {
                required: true
            },
            password: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            'confirm-password': {
                equalTo: '[name="password"]'
            }
        },
        messages: {
            firstName: {
                required: 'Vui lòng nhập tên của bạn.',
                minlength: 'Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
                maxlength: 'Tên quá dài, vui lòng nhập nhiều nhất {0} ký tự',
            },
            lastName: {
                required: 'Vui lòng nhập họ của bạn.',
                minlength: 'Họ quá ngắn, vui lòng nhập ít nhất {0} ký tự',
                maxlength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} ký tự',
            },
            email: {
                required: 'Vui lòng email của bạn.',
                email: 'Vui lòng nhập email đúng định dạng'
            },
            password: {
                required: 'Vui lòng nhập password.',
                minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
                maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
            },
            confirmpassword: {
                required: 'Vui lòng nhập password.',
                minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
                maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
                equalTo: 'Password và confirm không giống nhao.'
            },
            address: {
                required: 'Vui long nhap dia chi'
            },
            phone: {
                required: 'Vui long nhap sdt'
            },
            avatar: {
                required: 'Vui long nhap url anh'
            }
        }
    });
});
