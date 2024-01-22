$(document).ready(function(){
  $("#submitButton").click(function(){
    getFormValues();
  });
});

function getFormValues() {
  // Lấy giá trị Họ và Tên từ hai input form
  var firstName = $("#form1 input[name='fname']").val();
  var lastName = $("#form1 input[name='lname']").val();

  // Hiển thị giá trị trong console (hoặc thực hiện các công việc khác)
  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);
}
