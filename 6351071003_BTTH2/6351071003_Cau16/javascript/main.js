var HinhTru = {
    radius: 10,
    height: 15
}

var theTich =  Math.PI * HinhTru.radius**2 * HinhTru.height

console.log("Thể tích hình trụ là: " + theTich)

HinhTru.height = 30

var dtXQ = 2 * Math.PI * HinhTru.radius * HinhTru.height

var dtD = Math.PI * HinhTru.radius ** 2 

var sTP =dtXQ + dtD 

console.log("diện tích toàn phần sao khi câp nhập chiều cao = " + HinhTru.height + " la: " + sTP)