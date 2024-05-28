function collected(snake) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/collected", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("收藏成功！");
        } else {
            alert("收藏失败！");
        }
    };
    xhr.send('snake=' + snake);
}

function getCollections() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5000/collected", true);

    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
            var snakeNames = document.querySelectorAll('body > div > div > span:nth-child(2)');
            var collected = document.getElementsByClassName('collected');
            for (var i = 0; i < snakeNames.length; i++) {
                for (var j = 0; j < response.data.length; j++) {
                    if(snakeNames[i].textContent == response.data[j][0]){
                        collected[i].textContent = "已收藏";
                    }
                }
            }
            
        }
    }
    xhr.send();
}

if (sessionStorage.getItem('isLoggedIn')) {
    getCollections();   // 登录之后调用该函数
}

function uncollected(snake) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/uncollected", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("取消收藏！");
        }
    };
    xhr.send('snake=' + snake);
}