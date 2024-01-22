function daoChuoiSo(input) {
  var chuoiSo = input.toString();

  var tachChuoi = chuoiSo.split('');

  var daoChuoi = tachChuoi.reverse();

  var gopChuoi = daoChuoi.join('');

  var ketQua = parseInt(gopChuoi);

  return ketQua;
}

var input = 987654322;
var output = daoChuoiSo(input);

console.log("input: ", input);
console.log("output: ", output);