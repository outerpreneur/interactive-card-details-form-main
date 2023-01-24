// card name tags
const cardNameInput = document.getElementById('card_name')
const cardNameOutput = document.getElementById('name')


// cardnumber
const cardNumberInput = document.getElementById('card_number')
const cardNumberOutput = document.getElementById('number')

// expiration date
// month
const cardMonthInput = document.getElementById('card_month')
const cardMonthOutput = document.getElementById('month')

// year
const cardYearInput = document.getElementById('card_year')
const cardYearOutput = document.getElementById('year')

// CVC
const cardCvcInput = document.getElementById('card_cvc')
const cardCvcOutput = document.getElementById('cvc')

// button

const submitBtn = document.getElementById('submit-btn')
const thankYou = document.querySelector('.thank-you')
const form = document.querySelector("form")

// Live update in real time

cardNameInput.addEventListener('keyup', () => {
    cardNameOutput.innerHTML= cardNameInput.value
})

cardNumberInput.addEventListener( 'keyup', () => {
    cardNumberOutput.innerHTML= cardNumberInput.value
})

cardMonthInput.addEventListener( 'keyup', () => {
    cardMonthOutput.innerHTML= cardMonthInput.value
})

cardYearInput.addEventListener( 'keyup', () => {
    cardYearOutput.innerHTML= cardYearInput.value
})

cardCvcInput.addEventListener( 'keyup', () => {
    cardCvcOutput.innerHTML= cardCvcInput.value
})


// form

form,addEventListener('submit', (event) => {
    e.preventDefault(event);
})
