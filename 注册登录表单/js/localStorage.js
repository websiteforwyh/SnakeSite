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