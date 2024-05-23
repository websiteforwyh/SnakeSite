// 设置个人信息
function set_personal() {
    var username = document.getElementById("username");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");

    // 构建发送到服务器的数据
    var data = {
        table: 'personal',
        method: "set",
        username: username.value,
        address: address.value,
        phone:phone.value
    };

    // 通过 Ajax 发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/personal', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                alert(response.message);
            } else {
                alert(response.message);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}

// 获取并显示个人信息
function get_personal(){
    var username = document.getElementById("username").value;

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

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            
            console.log(response);
            document.getElementById('username').value = response.username;
        }
    };
    xhr.send(JSON.stringify(data)); 
}