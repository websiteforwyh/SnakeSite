
function addSnack() {
    var snackName = prompt('请输入要添加的零食名称：');
    if (snackName) {
        var snackList = document.getElementById('snackList');
        var newSnack = document.createElement('li');
        newSnack.textContent = snackName;
        snackList.appendChild(newSnack);
    }
}

function removeSnack() {
    var snackList = document.getElementById('snackList');
    var lastSnack = snackList.lastElementChild;
    if (lastSnack) {
        snackList.removeChild(lastSnack);
    } else {
        alert('没有可删除的零食！');
    }
}

alert("欢迎来到零食网页个人中心！");