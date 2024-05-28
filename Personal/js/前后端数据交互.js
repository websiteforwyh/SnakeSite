// 设置个人信息
function set_personal() {
    var username = document.getElementById("username").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/personal', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
            sessionStorage.setItem('login_username', username); // 同步登录用户
            alert(response.message);
        } else {
            alert(response.message);
        }
    };

    var str = 'username=' + username + '&address=' + address + '&phone=' + phone;
    xhr.send(str);
}

// 获取并显示个人信息
function get_personal() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:5000/personal', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
            document.getElementById('username').value = response.data['username'];
            document.getElementById('address').value = response.data['address'];
            document.getElementById('phone').value = response.data['phone'];
        } else {
            alert(response.message);
        }
    };
    xhr.send();
}

function snakes(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5000/collected", true);

    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        if(xhr.status === 200){
            console.log(response.data);
        }
    }
}