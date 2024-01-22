function laSo(giaTri) {
    return typeof giaTri === 'number' && !isNaN(giaTri);
}

// Sử dụng hàm kiểm tra số với một giá trị cụ thể
console.log(laSo(123)); // Kết quả: true
console.log(laSo("abc")); // Kết quả: false

function laEmail(chuoi) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(chuoi);
}

// Sử dụng hàm kiểm tra email với một chuỗi cụ thể
console.log(laEmail("abc@example.com")); // Kết quả: true
console.log(laEmail("invalidemail")); // Kết quả: false

function laRong(giaTri) {
    return giaTri === null || giaTri === undefined || giaTri === '';
}

// Sử dụng hàm kiểm tra rỗng với một giá trị cụ thể
console.log(laRong("")); // Kết quả: true
console.log(laRong("abc")); // Kết quả: false

function kiemTraMatKhau(matKhau) {
    return matKhau.length >= 8;
}

// Sử dụng hàm kiểm tra mật khẩu với một giá trị cụ thể
console.log(kiemTraMatKhau("password123")); // Kết quả: true
console.log(kiemTraMatKhau("pass")); // Kết quả: false
