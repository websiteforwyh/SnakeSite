function AutoInsert() {
    var storedCredentialsJSON = localStorage.getItem('snakeCredentials');
    var storedCredentials = JSON.parse(storedCredentialsJSON);

    for (var key in storedCredentials) {
        if (storedCredentials.hasOwnProperty(key)) {
            var user = storedCredentials[key];

            if (user.remember_pwd && user.login_status) { // 最近登录用户（勾选记住密码）
                document.getElementById('username').value = user.username;
                pwd = decryptPassword(user.password);
                document.getElementById('password').value = pwd;
            }
        }
    }
}

AutoInsert();

document.getElementById('username').addEventListener('input', function () {
    var storedCredentialsJSON = localStorage.getItem('snakeCredentials');
    var storedCredentials = JSON.parse(storedCredentialsJSON);

    for (var key in storedCredentials) {
        if (storedCredentials.hasOwnProperty(key)) {
            var user = storedCredentials[key];

            var username = document.getElementById('username').value;

            if(username == ""){
                document.getElementById('password').value = "";
            }
            
            console.log(username);
            if (user.username === username && user.remember_pwd == true) {
                pwd = decryptPassword(user.password);
                document.getElementById('password').value = pwd;
            }else{
                console.log(user.remember_pwd, user.username);
            }
        }
    }
});

