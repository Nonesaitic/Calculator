const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const display = $('.display h3')
const numbers = $$('.number')
const operators = $$('.operator')
const equal = $('#equal')
const clear = $('#clear')
const erase = $('#delete')
let firstNumber = ''
let secondNumber = ''
let operator = ''
let justCalculated = false

// Nhập số
numbers.forEach(number => {
  number.addEventListener('click', () => {

    // Vừa tính xong → bấm số mới thì bắt đầu phép tính mới
    if (justCalculated) {
      firstNumber = number.textContent
      secondNumber = ''
      operator = ''
      justCalculated = false

      display.textContent = firstNumber
      return
    }

    if (operator === '') {
      firstNumber += number.textContent
      display.textContent = firstNumber
    } else {
      secondNumber += number.textContent

      display.textContent =
        `${firstNumber} ${operator} ${secondNumber}`
    }

  })
})

// Chọn phép tính
operators.forEach(button => {
  button.addEventListener('click', () => {

    // Nếu đã có phép tính và đã nhập số thứ hai
    if (firstNumber !== '' && secondNumber !== '') {

      const a = Number(firstNumber)
      const b = Number(secondNumber)

      let result

      if (operator === '+') result = a + b
      if (operator === '-') result = a - b
      if (operator === '×') result = a * b
      if (operator === '/') result = a / b

      firstNumber = String(result)
      secondNumber = ''
    }

    operator = button.textContent

    display.textContent =
      `${firstNumber} ${operator}`
  })
})
    

// C
clear.addEventListener('click', () => {
  firstNumber = ''
  secondNumber = ''
  operator = ''
  display.textContent = ''
})

// delete

erase.addEventListener('click', () => {

  if (operator !== '' && secondNumber === '') {
    operator = ''
    display.textContent = firstNumber
    return
  }

  if (operator === '') {
    firstNumber = firstNumber.slice(0, -1)
    display.textContent = firstNumber || ''
  } else {
    secondNumber = secondNumber.slice(0, -1)
    display.textContent =
      `${firstNumber} ${operator} ${secondNumber}`
  }

})
