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
    set_personal(); // 发送请求修改数据
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

// 初始化零食列表
let snackList = ['巧克力', '薯片', '饼干'];

function addSnack() {
    const newSnackInput = prompt("请输入要添加的零食名称", "");

    // 检查输入是否为空
    if (newSnackInput.trim()) {
        snackList.push(newSnackInput.trim());
        displaySnackList();
    } else {
        alert("零食名称不能为空，请重新输入。");
    }
}

function removeSnack() {
    const snackToRemove = prompt("请输入要删除的零食名称", "");
    if (snackToRemove) {
        const index = snackList.indexOf(snackToRemove);
        if (index !== -1) {
            snackList.splice(index, 1);
            displaySnackList();
        } else {
            alert("零食不存在，请重新输入！");
        }
    }
}

function displaySnackList() {
    const snackListElement = document.getElementById('snackList');
    snackListElement.innerHTML = ""; // 清空列表
    snackList.forEach(snack => {
        const li = document.createElement('li');
        li.textContent = snack;
        snackListElement.appendChild(li);
    });
}

// 初始加载零食列表
displaySnackList();

// 更换元素数据/禁止非法访问
document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.history.back(); // 回退到原来的页面
        alert("访问拒绝，请先登录！");
    }else{
        get_personal(); // 调用
    }
});