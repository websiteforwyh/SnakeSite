function getHTMLPage(url) {
    // window.history.back();
    console.log("1");
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // 在这里处理接收到的HTML内容
            console.log(html);
            document.body.innerHTML = html;
        })
        // .catch(error => {
        //     console.error('Error:', error);
        //     // 这里添加对fetch错误的处理
        //     if (error instanceof TypeError || error instanceof RequestError) {
        //         alert('Failed to load data. Please try again later.');
        //     } else {
        //         // 如果是自定义错误，可以在这里处理
        //         if (error.message.includes('Server responded')) {
        //             alert(error.message);
        //         } else {
        //             // 其他类型的错误，如网络错误
        //             alert('An unexpected error occurred. Please try again later.');
        //         }
        //     }
        // });
}

getHTMLPage('http://127.0.0.1:5000/get');

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
        alert("已退出登录！");
        $(".userbox").css("display", 'none');
    }
}