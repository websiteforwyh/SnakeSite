// 设置个人信息
function set_personal() {
    var username = document.getElementById("username").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;

    // 构建发送到服务器的数据
    var data = {
        table: 'personal',
        method: "set",
        username: username,
        address: address,
        phone: phone
    };

    // 通过 Ajax 发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/personal', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                sessionStorage.setItem('login_username', username); // 同步登录用户
                alert(response.message);
            } else {
                alert(response.message);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}

// 获取并显示个人信息
function get_personal() {
    var username = sessionStorage.getItem("login_username");
    // 构建发送到服务器的数据
    var data = {
        table: 'personal',
        method: "get",
        username: username
    };

    // 通过 Ajax 发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/personal', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            console.log(response.data);
            document.getElementById('username').value = response.data['username'];
            document.getElementById('address').value = response.data['address'];
            document.getElementById('phone').value = response.data['phone'];
        }
    };
    xhr.send(JSON.stringify(data));
}