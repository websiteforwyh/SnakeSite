// 注册
function RegisterRequest() {
    var username = document.getElementById("register_username").value;
    var password = document.getElementById("register_password").value;
    var email = document.getElementById("email").value;

    // 构建发送到服务器的数据
    var data = {
        table: 'users',
        username: username,
        password: password,
        email: email
    };

    // 通过 Ajax 发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 处理服务器返回的数据
            var response = JSON.parse(xhr.responseText);
            if (response.success) {     // 注册成功
                alert(response.message);
                //  注册成功后保存登录状态到LocalStorage
                sessionStorage.setItem('isLoggedIn', 'true');
                window.location.href = '../index.html';
            } else {    // 注册失败
                alert(response.message);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}

// 登录
function LoginRequest() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    // 构建发送到服务器的数据
    var data = {
        table: 'users',
        username: username.value,
        password: password.value
    };

    // 通过 Ajax 发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 处理服务器返回的数据
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                // 登录成功
                alert("登录成功！");
                // 登录成功后保存登录状态到LocalStorage
                sessionStorage.setItem('isLoggedIn', 'true');
                window.location.href = '../index.html';
            } else {
                // 登录失败
                alert(response.message);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}