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
// Name input
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
        cardNameInput.parentElement.classList.add("error-number")
        cardNameInput.classList.add("error")
    }
})

// Number input

cardNumberInput.addEventListener('keyup', (e) => {
    let key= e.key
    let keyNumbers = key.match(/^[0-9 ]*$/)
    if(cardNumberInput.value.length === 0) {
        cardNumberInput.parentElement.classList.add("error-message")
        cardNumberInput.classList.add('error')
        cardNumberInput.parentElement.classList.remove("error-minimum")
    } else if (cardNumberInput.value.length != 16) {
        cardNumberInput.parentElement.classList.add("error-minimum")
        cardNumberInput.parentElement.classList.remove('correct')
        cardNumberInput.classList.remove('correct')
        cardNumberInput.classList.remove("error")  
    }else if (cardNumberInput.value.length === 16) {
        cardNumberInput.parentElement.classList.remove("error-minimum")
        cardNumberInput.classList.remove('error')
        cardNumberInput.parentElement.classList.remove("error-minimum")
        cardNumberInput.parentElement.classList.add('correct')
        cardNumberInput.classList.add('correct')    
    } else if (keyNumbers) {
        cardNumberOutput.innerHTML= cardNumberInput.value
        // cardNumberInput.parentElement.classList.remove("error-message")
        // cardNumberInput.classList.remove("error")
        // cardNumberInput.parentElement.classList.remove("error-letter")
        cardNumberInput.classList.remove("error")
    } else {
        // cardNumberInput.parentElement.classList.add("error-letter")
        // cardNumberInput.parentElement.classList.add("error")
    }
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

form.addEventListener('submit', (event) => {
    e.preventDefault(event);
})


