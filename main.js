let firstNumber = document.getElementById('first_number')
let secondNumber = document.getElementById('second_number')
let btnPlus = document.querySelector('#btn_plus')
let btnMinus = document.querySelector('#btn_minus')
let btnMultiply = document.querySelector('#btn_multiply')
let btnDevedet = document.querySelector('#btn_divedet')
let btnExp1 = document.querySelector('#btn_exp1')
let btnExp2 = document.querySelector('#btn_exp2')
let btnRoot1 = document.querySelector('#btn_root1')
let btnRoot2 = document.querySelector('#btn_root2')
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

btnExp1.onclick = function () {
    let exp = Math.pow(firstNumber.value*1, 2)
    result.textContent = exp
}

btnExp2.onclick = function () {
    let exp = Math.pow(secondNumber.value*1, 2)
    result.textContent = exp
}

btnRoot1.onclick = function () {
    let root = Math.sqrt(firstNumber.value*1)
    result.textContent = root
}

btnRoot2.onclick = function () {
    let root = Math.sqrt(secondNumber.value*1)
    result.textContent = root
}