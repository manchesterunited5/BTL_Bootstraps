var loginForm = document.forms['loginForm'];
// chọn input username và password trên form
var uemail = loginForm.uemail;
var psw = loginForm.psw;


// sự kiện nhấn nút submit
loginForm.onsubmit = function () {
    // Kiểm tra nếu giá trị trên input rỗng (chưa nhập)
    if (uemail.value == '') {
        // alert('Tài khoản không được để trống!');
        document.getElementById('username_error').innerHTML = 'Tài khoản không được để trống!';
        document.getElementById('username_error').style.display = 'block';
        return false;
    } else {
        document.getElementById('username_error').innerHTML = '';
        document.getElementById('username_error').style.display = 'none';
    }
    if (psw.value == '') {
        // alert('Mật khẩu không được để trống!');
        document.getElementById('password_error').innerHTML = 'Mật khẩu  không được để trống!';
        document.getElementById('password_error').style.display = 'block';
        return false;
    } else {
        document.getElementById('password_error').innerHTML = '';
        document.getElementById('password_error').style.display = 'none';
    }
    alert('Bạn đã nhập đầy đủ thông tin');
    return false;
}
