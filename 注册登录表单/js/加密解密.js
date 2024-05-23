// 加密：password="Aa1234"，遍历字符串每一个值转换成ascll数字，奇数加180，偶数加126，然后转换成ascll码对应的字母或字符等
// 解密： 先将获取到的ascll转换成数字形式，奇数减180，偶数减126得到password

function encryptPassword(password) {
    var encryptedPassword = "";

    for (var i = 0; i < password.length; i++) {
        var char = password.charAt(i);
        var ascii = char.charCodeAt(0);

        if (ascii % 2 === 0) {
            // 偶数
            ascii += 126;
        } else {
            // 奇数
            ascii += 180;
        }

        // 转换回字符并拼接到加密后的密码
        encryptedPassword += String.fromCharCode(ascii);
    }
    return encryptedPassword;
}

function decryptPassword(encryptedPassword) {
    var decryptedPassword = "";

    for (var i = 0; i < encryptedPassword.length; i++) {
        var char = encryptedPassword.charAt(i);
        var ascii = char.charCodeAt(0);

        if (ascii % 2 === 0) {
            // 偶数
            ascii -= 126;
        } else {
            // 奇数
            ascii -= 180;
        }
        // 转换回字符并拼接到解密后的密码
        decryptedPassword += String.fromCharCode(ascii);
    }
    return decryptedPassword;
}


