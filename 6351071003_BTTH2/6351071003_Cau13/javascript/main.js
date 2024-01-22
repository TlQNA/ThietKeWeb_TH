function kiemTraSoNguyenTo(n) {
    if (n < 2) return false;

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }

    return true;
}

function cacSoNguyenNhoHon(n) {
    console.log('Các số nguyên nhỏ hơn ' + n + ' là: ');

    for (var i = 0; i <= n; i++) {
        if (kiemTraSoNguyenTo(i)) {
            console.log(i);
        }
    }
}

var n = parseInt(prompt("Nhập n: "));

cacSoNguyenNhoHon(n);
