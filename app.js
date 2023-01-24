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

cardNameInput.addEventListener('keyup', (e) => {
    let key = e.key;
    let keyLetters = key.match(/^[A-za-z ]*$/);
    if (cardNameInput.value.length === 0) {
        cardNameOutput.innerHTML = "Put that baby again"
        cardNameInput.parentElement.classList.add("error-message")
        cardNameInput.classList.add("error")
    } else if (keyLetters) {
        cardNameOutput.innerHTML= cardNameInput.value
        cardNameInput.parentElement.classList.remove("error-message")
        cardNameInput.classList.remove("error")
        cardNameInput.parentElement.classList.remove("error-number")
        cardNameInput.classList.remove("error")
    } else {
        // cardNameInput.setAttribute("disabled", "")
        cardNameInput.parentElement.classList.add("error-number")
        cardNameInput.classList.add("error")
    }
})

cardNumberInput.addEventListener( 'keyup', (e) => {
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
