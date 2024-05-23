function SetLocalStorageData() {
    // 获取之前存储的凭据数据
    var storedCredentialsJSON = localStorage.getItem('snakeCredentials');

    // 如果存在存储的凭据数据，则将其解析为对象赋值给 credentials，否则初始化为空对象
    var credentials = storedCredentialsJSON ? JSON.parse(storedCredentialsJSON) : {};
    // 要储存的内容
    var localstorage_username = document.getElementById('register_username').value;
    var localstorage_password = document.getElementById('register_password').value;

    // 对密码进行加密
    var encrypted = encryptPassword(localstorage_password);

    // 构建用户凭据对象
    var user = {
        username: localstorage_username,
        password: encrypted,
        remember_pwd: false,    // 初始化状态
        login_status: false
    };

    // 将用户凭据对象添加到凭据对象中
    credentials['user' + (Object.keys(credentials).length + 1)] = user;

    // 将凭据对象转换为 JSON 字符串
    var credentialsJSON = JSON.stringify(credentials);

    // 将 JSON 字符串存储到 localStorage 中
    localStorage.setItem('snakeCredentials', credentialsJSON);
}

function UpdateLocalStorageData(username, password) {
    var storedCredentialsJSON = localStorage.getItem('snakeCredentials');

    var encrypted = encryptPassword(password); // 对密码进行加密

    if (!storedCredentialsJSON) {
        // 如果存在存储的凭据数据，则将其解析为对象赋值给 credentials，否则初始化为空对象
        var credentials = storedCredentialsJSON ? JSON.parse(storedCredentialsJSON) : {};

        var user = {    // 构建用户凭据对象
            username: username,
            password: encrypted,
            remember_pwd: true,    // 初始化状态
            login_status: true
        };

        // 将用户凭据对象添加到凭据对象中
        credentials['user' + (Object.keys(credentials).length + 1)] = user;
        localStorage.setItem('snakeCredentials', JSON.stringify(credentials));  // 转成JSON并储存到localStorage
    } else {
        var storedCredentials = JSON.parse(storedCredentialsJSON);

        var remember = document.getElementById("remember_pwd").checked;

        for (var key in storedCredentials) {
            if (storedCredentials.hasOwnProperty(key)) {
                var user = storedCredentials[key];
                // 重置登录状态为false
                user.login_status = false;

                if (user.username === username) {   // 找到需要操作的用户
                    user.login_status = true;   // 标记最新登录用户
                    if (remember) {   // 如果用户选择记住密码
                        user.remember_pwd = true;
                    } else {
                        user.remember_pwd = false;
                    }
                    // 保存更新后的凭据数据到 localStorage
                    localStorage.setItem('snakeCredentials', JSON.stringify(storedCredentials));
                    break
                } else if (user.login_status == false) {   // 没有找到该用户
                    var storedCredentialsJSON = localStorage.getItem('snakeCredentials');
                    // 将获取到的 JSON 字符串解析为对象
                    var credentials = JSON.parse(storedCredentialsJSON);
                    var user = {    // 构建用户凭据对象
                        username: username,
                        password: encrypted,
                        remember_pwd: true,    // 初始化状态
                        login_status: true
                    };
                    // 将用户凭据对象添加到凭据数组中
                    credentials['user' + (Object.keys(credentials).length + 1)] = user;
                    localStorage.setItem('snakeCredentials', JSON.stringify(credentials));  // 转成JSON并储存到localStorage
                }
            }
        }
    }
}