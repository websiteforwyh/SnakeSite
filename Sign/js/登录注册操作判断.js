function login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username.value === "" || password.value === ""){
        alert("用户名或密码不能为空！");
    }else{
        LoginRequest();
    }
}

function register() {
    var register_username = document.getElementById("register_username");
    var register_password = document.getElementById("register_password");
    var email = document.getElementById("email");
    var confirm_password = document.getElementById("comfirm_password");

    // 检测用户名或密码是否为空
    if (register_username.value === "" || register_password.value === "") {
        alert("用户名或密码不能为空！");
    } else if (register_password.value != confirm_password.value) {
        alert("两次输入密码不对！");
    } else {
        RegisterRequest();
    }
}