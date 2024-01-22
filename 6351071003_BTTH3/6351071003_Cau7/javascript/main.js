$(document).ready(function() {
    $("#linkForm").submit(function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        var link = $("#linkInput").val();

        // Hiển thị hộp thoại xác nhận
        var isConfirmed = confirm("Bạn có chắc chắn muốn chuyển đến đường link này?");
        
        // Nếu người dùng nhấn OK, chuyển hướng đến đường link
        if (isConfirmed) {
            window.location.href = link;
        } else {
            // Nếu người dùng nhấn Cancel, không làm gì cả
            console.log("Chuyển hướng đã bị hủy bởi người dùng.");
        }
    });
});
