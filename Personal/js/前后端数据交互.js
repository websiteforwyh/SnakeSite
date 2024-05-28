// 设置个人信息
function set_personal() {
    var username = document.getElementById("username").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/personal', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
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

    xhr.onload = function() {
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

function setSnackList() {
    const snack = prompt("请输入要添加的零食名称", "");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/collected", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("已添加");
        }
    }

    if (snack.trim()) { // 检查输入是否为空
        xhr.send("snack=" + snack);
    } else {
        alert("零食名称不能为空，请重新输入。");
    }
}

function deleteSnackList() {
    var snack = prompt("请输入要删除的零食名称", "");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/uncollected", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("已删除");
        }
    }
    xhr.send("snack=" + snack);
}

function getSnackList() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5000/collected", true);

    xhr.onload = function() {
        var response = JSON.parse(xhr.responseText);

        if (xhr.status === 200) {
            var snackList = [];
            for (var i = 0; i < response.data.length; i++) {
                snackList.push(response.data[i][0]);
            }

            snackList.forEach(snack => {
                var snackListElement = document.getElementById('snackList');
                var li = document.createElement('li');
                li.textContent = snack;
                snackListElement.appendChild(li);
            });
        }
    };
    xhr.send();
}