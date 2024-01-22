function ngayTrongTuan(date) {
    var daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    return daysOfWeek[date.getDay()];
}

function main() {
    var dateString = "12/25/2023";
    var specificDate = new Date(dateString);

    var dayOfWeek = ngayTrongTuan(specificDate);

    console.log(`Ngày ${dateString} là ${dayOfWeek}`);
}

main()
