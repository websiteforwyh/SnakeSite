function AutoInsert(){
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

// document.getElementById('username').addEventListener('input', function () {
//     var storedCredentialsJSON = localStorage.getItem('snakeCredentials');
//     var storedCredentials = JSON.parse(storedCredentialsJSON);

//     for (var key in storedCredentials) {
//         if (storedCredentials.hasOwnProperty(key)) {
//             var user = storedCredentials[key];

//             if (user.remember_pwd && user.login_status) { // 最近登录用户（勾选记住密码）
//                 $('username').val(user.username);
//                 pwd = decryptPassword(user.password);
//                 $('password').val(pwd);
//             } else {   // 登录过的用户（勾选记住密码）

//                 var username = $('username').val();
//                 if (user.username === username && user.remember_pwd) {
//                     pwd = decryptPassword(user.password);
//                     $('password').val(pwd);
//                 }

//             }
//         }
//     }
// });

