function buttonSwitch(argument1, argument2) {
    // 显示按钮切换
    document.getElementById('editBtn').style.display = argument1;
    document.getElementById('saveBtn').style.display = argument2;
    document.getElementById('cancelBtn').style.display = argument2;
}

function EditStatusTrue() {
    // 启动编辑
    document.getElementById('username').removeAttribute('readonly');
    document.getElementById('address').removeAttribute('readonly');
    document.getElementById('phone').removeAttribute('readonly');
}

function EditStatusFalse() {
    // 取消编辑
    document.getElementById('username').readOnly = true;
    document.getElementById('address').readOnly = true;
    document.getElementById('phone').readOnly = true;
}

function toggleEdit() {
    EditStatusTrue();
    buttonSwitch('none', 'inline-block');
}

function saveEdit() {
    set_personal(); // 发送请求修改数据
}

function cancelEdit() {
    get_personal(); // 获取原来的信息插入
    EditStatusFalse();
    buttonSwitch('inline-block', 'none'); // 切换显示按钮
}

function addSnack() {
    setSnackList(); // 向服务器发送添加请求
    window.location.reload();
}

function removeSnack() {
    deleteSnackList();
    window.location.reload();
}

// 更换元素数据/禁止非法访问
document.addEventListener("DOMContentLoaded", function() {
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.history.back(); // 回退到原来的页面
        alert("访问拒绝，请先登录！");
    } else {
        get_personal(); // 调用
    }
});