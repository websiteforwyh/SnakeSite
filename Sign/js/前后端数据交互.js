// 注册
function RegisterRequest() {
    var username = document.getElementById("register_username").value;
    var password = document.getElementById("register_password").value;
    var email = document.getElementById("email").value;

    // 构建发送到服务器的数据
    var data = {
        username: username,
        password: password,
        email: email
    };

    // 通过 Ajax 发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 处理服务器返回的数据
            var response = JSON.parse(xhr.responseText);
            if (response.success) { // 注册成功
                alert(response.message);
                SetLocalStorageData(); // 储存信息到localStorage
                sessionStorage.setItem('isLoggedIn', 'true'); // 临时保存登录状态
                sessionStorage.setItem('login_username', username); // 临时保存用户名
                window.location.href = '../index.html';
            } else { // 注册失败
                alert(response.message);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}

// 登录
function LoginRequest() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 通过 Ajax 发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/login', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
            UpdateLocalStorageData(username, password);
            sessionStorage.setItem('isLoggedIn', 'true'); // 临时登录状态
            sessionStorage.setItem('login_username', username); // 临时保存用户名
            window.location.href = '../index.html'; // 加载新页面
        } else {
            alert(response.message);
        }
    };

    var str = 'username=' + username + '&password=' + password;
    //   xhr.send('username=admin&password=123');
    xhr.send(str);
}


function forget_pwd(username, email) {
    // 验证数据是否匹配
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;

    // 构建发送到服务器的数据
    var data = {
        table: 'users',
        method: 'get',
        username: username,
        email: email
    };

    // 通过 Ajax 发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/reset', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 处理服务器返回的数据
            var response = JSON.parse(xhr.responseText);
            if (response.success) { // 如果匹配
                alert(response.message);
                sessionStorage.setItem('forget_user', username)
                window.location.href = 'reset.html';
            } else { // 失败
                alert(response.message);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}

function reset_pwd(username, password) {
    username = sessionStorage.getItem('forget_user');
    password = document.getElementById('password').value;
    confirm_password = document.getElementById('confirm_password').value;

    if (!sessionStorage.getItem('forget_user')) { // 找不到username
        alert("none");
    }
    if (password != confirm_password) {
        alert("两次密码不一致！");
    } else {
        // 构建发送到服务器的数据
        var data = {
            table: 'users',
            method: 'set',
            username: username,
            new_password: password
        };

        // 通过 Ajax 发送数据到服务器
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:5000/reset', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 处理服务器返回的数据
                var response = JSON.parse(xhr.responseText);
                if (response.success) { // 如果匹配
                    alert(response.message);
                    window.location.href = '../index.html';
                } else { // 失败
                    alert(response.message);
                }
            }
        };
        xhr.send(JSON.stringify(data));
    }
}

// 进入新界面时发送get请求
function getRequest(route) {
    // 通过 Ajax 发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://127.0.0.1:5000/${route}`, true);
    xhr.send();
}