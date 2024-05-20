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