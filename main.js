let firstNumber = document.getElementById('first_number')
let secondNumber = document.getElementById('second_number')
let btnPlus = document.querySelector('#btn_plus')
let btnMinus = document.querySelector('#btn_minus')
let btnMultiply = document.querySelector('#btn_multiply')
let btnDevedet = document.querySelector('#btn_divedet')
let result = document.querySelector('.result')

btnPlus.onclick = function () {
    let sum = firstNumber.value*1 + secondNumber.value*1
    result.textContent = sum
}

btnMinus.onclick = function () {
    let sum = firstNumber.value*1 - secondNumber.value*1
    result.textContent = sum
}

btnMultiply.onclick = function () {
    let sum = firstNumber.value*1 * secondNumber.value*1
    result.textContent = sum
}

btnDevedet.onclick = function () {
    if(secondNumber == 0) {
        result.textContent = "Деление на 0 невозможно!"
    }else {
        let sum = firstNumber.value*1 / secondNumber.value*1
    result.textContent = sum
    }
}