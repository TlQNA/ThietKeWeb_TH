function displayDay() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value - 1; // JavaScript months are zero-based
    const year = document.getElementById('year').value;

    const inputDate = new Date(year, month, day);
    const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayOfWeek = daysOfWeek[inputDate.getDay()];

    document.getElementById('result').innerHTML = `Ngày ${day}/${month + 1}/${year} là ${dayOfWeek}`;
}
