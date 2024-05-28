var collected = document.querySelectorAll(".collected");

collected.forEach(function (item) {
    item.addEventListener('click', function () {
        if (!sessionStorage.getItem('isLoggedIn')) {
            let c = confirm("请先登录！");
            if (c) {
                window.location.href = '../Sign/login.html';
            }
        }else if (this) {
            var snack = this.getAttribute('snack');
            if (this.textContent == "收藏") {
                this.textContent = "已收藏";
                collected(snack);
            } else {
                this.textContent = "收藏";
                uncollected(snack);
            }
        }
    });
})

function calculateTotal() {
    var products = document.getElementsByClassName("product");
    var totalPrice = 0;

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var price = parseFloat(product.lastElementChild.textContent.slice(1));
        var quantity = parseInt(product.querySelector("input[type='number']").value);
        totalPrice += price * quantity;
    }

    document.getElementById("totalPrice").textContent = "总价：" + totalPrice + "元";
}