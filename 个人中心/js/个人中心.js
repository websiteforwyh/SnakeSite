function buttonSwitch(argument1, argument2) {
    // 显示按钮切换
    document.getElementById('editBtn').style.display = argument1;
    document.getElementById('saveBtn').style.display = argument2;
    document.getElementById('cancelBtn').style.display = argument2;
}

function toggleEdit() {
    // 编辑
    document.getElementById('username').removeAttribute('readonly');
    document.getElementById('address').removeAttribute('readonly');
    document.getElementById('phone').removeAttribute('readonly');
    // 切换显示按钮
    buttonSwitch('none', 'inline-block');
}

function saveEdit() {
    // 保存
    document.getElementById('username').readOnly = true;
    document.getElementById('address').readOnly = true;
    document.getElementById('phone').readOnly = true;
    // 切换显示按钮
    buttonSwitch('inline-block', 'none');
}

function cancelEdit() {
    // 取消
    document.getElementById('username').readOnly = true;
    document.getElementById('address').readOnly = true;
    document.getElementById('phone').readOnly = true;
    // 切换显示按钮
    buttonSwitch('inline-block', 'none');
}

// 设置个人信息
function set_personal() {
    var username = document.getElementById("username");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");

    // 构建发送到服务器的数据
    var data = {
        table: 'personal',
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
                alert("成功！");
            } else {
                alert("失败！");
            }
        }
    };
    xhr.send(JSON.stringify(data));
}

// 获取数据进行匹配，替换页面数据（待实现-------------）
function get_personal(){
    document.getElementById('username').value = '李四';
}

// 更换元素数据/禁止非法访问
document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.history.back(); // 回退到原来的页面
        alert("访问拒绝，请先登录！");
    }else{
        get_personal(); // 调用
    }
});