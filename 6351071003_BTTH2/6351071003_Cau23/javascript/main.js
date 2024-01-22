function multiply(){
    var number1 = document.getElementById('number1').value
    var number2 = document.getElementById('number2').value
    var result = number1 * number2
    document.getElementById('result').innerText = result
    
}

function divide(){
    var number1 = document.getElementById('number1').value
    var number2 = document.getElementById('number2').value

    if(number2 == 0){
        alert('Không tồn tại')
    }
    
    var result = number1 / number2
    document.getElementById('result').innerText = result
    
}