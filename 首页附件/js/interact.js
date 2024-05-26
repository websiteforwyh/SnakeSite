function getRequest(){
    // 通过 Ajax 发送数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:5000/get_signOff', true);

    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
            alert(response.message);
        } else {
            alert(response.message);
        }
    };
    xhr.send();
}

function check() {
    // 检查登录状态
    if (!sessionStorage.getItem('isLoggedIn')) {
        // 用户未登录，显示提示信息并重定向到登录页面
        let c = confirm("请先登录！");
        if (c) {
            window.location.href = '注册登录表单/logon.html';
        }
    } else {
        window.location.href = '个人中心/personal.html';
    }
}

$(".active").click(function () {
    var display = document.getElementsByClassName("userbox")[0].style.display;

    if (!sessionStorage.getItem('isLoggedIn')) {
        // 用户未登录，显示提示信息并重定向到登录页面
        let c = confirm("请先登录！");
        if (c) {
            window.location.href = '注册登录表单/logon.html';
        }
    } else {
        if (display == "block") {
            $(".userbox").css("display", 'none');
        } else {
            $(".userbox").css("display", 'block');
        }
    }
});

function signOff() {
    let a = confirm("是否要退出登录？");
    if (a) {
        sessionStorage.removeItem('isLoggedIn');
        getRequest();
        $(".userbox").css("display", 'none');
    }
}