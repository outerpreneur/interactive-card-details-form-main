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
});

// Number input

cardNumberInput.addEventListener('keyup', (e) => {
    let key= e.key
    let keyNumbers = key.match(/^[0-9]*$/)
    if(cardNumberInput.value.length === 0) {
        cardNumberInput.parentElement.classList.add("error-message")
        cardNumberInput.classList.add('error')
        cardNumberInput.parentElement.classList.remove("error-minimum")
        cardNumberOutput.innerHTML= cardNumberInput.value 
    } else if (cardNumberInput.value.length !=16 ) {
        cardNumberInput.parentElement.classList.add("error-minimum")
        cardNumberInput.parentElement.classList.remove('correct')
        cardNumberInput.classList.remove('correct')
        cardNumberInput.classList.remove("error") 
        cardNumberOutput.innerHTML= cardNumberInput.value 
    } else if (cardNumberInput.value.length === 16) {
        cardNumberInput.parentElement.classList.remove("error-minimum")
        cardNumberInput.classList.remove('error')
        cardNumberInput.parentElement.classList.remove("error-minimum")
        cardNumberInput.parentElement.classList.add('correct')
        cardNumberInput.classList.add('correct')    
    } else if (keyNumbers) {
        cardNumberOutput.innerHTML= cardNumberInput.value
        cardNumberInput.classList.remove("error")
        cardNumberOutput.innerHTML= cardNumberInput.value 
    } else {
        cardNumberInput.parentElement.classList.add("error-letter")
        cardNumberInput.parentElement.classList.add("error")
    }
});
// Card number formatter

// cardNumberInput.addEventListener("input", (e) => {
//     e.target.value = e.target.value = e.target.value
//       .replace(/[^\dA-Z]/g, "")
//       .replace(/(.{4})/g, "$1 ")
//       .trim();
//   });

// card month input

cardMonthInput.addEventListener( 'keyup', (e) => {
    // let value = e.target.value
    if( cardMonthInput.value > 12) {
        cardMonthInput.parentElement.classList.add('month-over')
        cardMonthInput.classList.add("error")
        cardMonthInput.parentElement.classList.remove('correct')
        cardMonthInput.classList.remove('correct')
        cardMonthOutput.innerHTML= cardMonthInput.value
    } else if (cardMonthInput.value <= 12 && cardMonthInput.value.length === 2) {
        cardMonthInput.parentElement.classList.remove("error-message")
        cardMonthInput.classList.remove("error")
        cardMonthInput.parentElement.classList.remove('month-over')
        cardMonthInput.parentElement.classList.add('correct')
        cardMonthInput.classList.add('correct')
        cardMonthOutput.innerHTML= cardMonthInput.value
    } else if (cardMonthInput.value.length <= 1  ) {
        cardMonthInput.parentElement.classList.add("error-message")
        cardMonthInput.classList.add("error")
        cardMonthInput.parentElement.classList.remove('correct')
        cardMonthInput.classList.remove('correct')
        cardMonthOutput.innerHTML= cardMonthInput.value
    }
    else {
        cardMonthInput.parentElement.classList.remove("error-message")
        cardMonthInput.classList.remove("error")
        cardMonthInput.parentElement.classList.remove('month-over')  
        cardMonthOutput.innerHTML= cardMonthInput.value
    }
})

cardYearInput.addEventListener( 'keyup', (e) => {
    // let value = e.target.value
    if(cardYearInput.value < 23 || cardYearInput.value > 27) {
        cardYearInput.parentElement.classList.add('valid-year')
        cardYearInput.classList.add('error')
        cardYearInput.parentElement.classList.remove('correct')
        cardYearInput.classList.remove('correct')
    } else if(cardYearInput.value > 23 || cardYearInput.value < 27) {
        cardYearInput.parentElement.classList.add('correct')
        cardYearInput.classList.add('correct')
        cardYearInput.parentElement.classList.remove('valid-year')
        cardYearOutput.innerHTML= cardYearInput.value
        cardYearInput.classList.remove('error')
    } else if (cardYearInput.value.length === 0) {
        cardYearInput.parentElement.classList.remove('valid-year')
        cardYearInput.parentElement.classList.add("error-message")
    } else {
        cardYearInput.parentElement.classList.remove("error-message")
        cardYearInput.parentElement.classList.remove('valid-year')
        cardYearInput.classList.remove('error')
        cardYearOutput.innerHTML= cardYearInput.value
    }
})

cardCvcInput.addEventListener( 'keyup', (e) => {
    let value = e.target.value
    let valueNumbers = value.match(/^[0-9 ]*$/)
    if (value === "") {
        cardCvcInput.parentElement.classList.add("error-message")
        cardCvcInput.classList.add("error")
        cardCvcOutput.innerHTML= cardCvcInput.value
    } else if ( value.length === 3) {
        cardCvcOutput.innerHTML= cardCvcInput.value
        cardCvcInput.classList.remove("error")
        cardCvcInput.parentElement.classList.add('correct')
        cardCvcInput.classList.add('correct')
    } else {
        cardCvcInput.parentElement.classList.remove("error-message")
        cardCvcInput.parentElement.classList.remove('correct')
        cardCvcInput.classList.remove('correct')
        cardCvcInput.classList.remove("error")
        cardCvcOutput.innerHTML= cardCvcInput.value
    }  
})

// Submit form

submitBtn.addEventListener('click', (e) => {
    if (cardNameInput.value.length === 0) {
        cardNameInput.classList.add('error')
        cardNameInput.parentElement.classList.add('error-message')
    } else {
        e.preventDefault();
        form.style.display = 'none'
        thankYou.classList.remove("hidden")
    }
    if (cardNumberInput.value.length !== 16) {
        cardNumberInput.classList.add('error')
        cardNumberInput.parentElement.classList.add('error-message')
    } else {
        e.preventDefault();
        form.style.display = 'none'
        thankYou.classList.remove("hidden")
    }
    if (cardMonthInput.value.length === 0) {
        cardMonthInput.classList.add('error')
        cardMonthInput.parentElement.classList.add('error-message')
    } else {
        e.preventDefault();
        form.style.display = 'none'
        thankYou.classList.remove("hidden")
    } 
    if (cardYearInput.value.length === 0) {
        cardYearInput.classList.add('error')
        cardYearInput.parentElement.classList.add('error-message')
    } else {
        e.preventDefault();
        form.style.display = 'none'
        thankYou.classList.remove("hidden")
    } 
    if (cardCvcInput.value.length !== 3 ) {
        cardCvcInput.classList.add('error')
        cardCvcInput.parentElement.classList.add('error-message')
    } else {
        e.preventDefault();
        form.style.display = 'none'
        thankYou.classList.remove("hidden")
    }
})



