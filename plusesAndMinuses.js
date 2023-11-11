// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

//access body tag and set syles
const body = document.querySelector('body')
body.style.fontFamily = 'Helvetica'
body.style.backgroundColor = "#333"

//create main Section for all content
const mainSection = document.createElement('main')
mainSection.style.color ='#333'
mainSection.style.width = '375px'
mainSection.style.backgroundColor = '#f2f2f2'
mainSection.style.margin = '50px auto'
mainSection.style.textAlign = 'center'
mainSection.style.padding = "20px"
mainSection.style.borderRadius = '10px'

//append main to body
body.appendChild(mainSection)

//create headline and and add styles
const headline = document.createElement('h1')
headline.textContent = 'Add or Subtract by 1'

//append headline to body
mainSection.appendChild(headline)

//create section for text
const display = document.createElement('div')
display.style.height = '200px'

//append display area
mainSection.appendChild(display)

//create value for display
const number = document.createElement('p')
number.textContent = 0
number.style.textAlign = 'center'
number.style.fontSize = '12rem'
number.style.padding = '0'
number.style.margin = '0 0 100px 0'

//append number to display
display.appendChild(number)

//create button container
const buttonContainer = document.createElement('div')
buttonContainer.classList.add('button-container')
buttonContainer.style.height = '50px'
buttonContainer.style.display ='flex'
buttonContainer.style.justifyContent = 'space-evenly'
buttonContainer.style.marginTop ='50px'
buttonContainer.style.marginBottom = '15px'

//append button container
mainSection.appendChild(buttonContainer)

//create add button 
const AddButton = document.createElement('button');
AddButton.style.backgroundColor = 'green'
AddButton.style.border = 'none'
AddButton.style.borderRadius = '5%'
AddButton.style.padding= '10px 20px'
AddButton.style.color = '#f2f2f2'
AddButton.textContent = 'Add One'

//append add button to button container
buttonContainer.appendChild(AddButton)


//create reset button 
const resetButton= document.createElement('button');
resetButton.style.backgroundColor = '#333'
resetButton.style.border = 'none'
resetButton.style.borderRadius = '5%'
resetButton.style.padding= '10px 20px'
resetButton.style.color = '#f2f2f2'
resetButton.textContent = 'Reset Counter'

//append add button to button container
buttonContainer.appendChild(resetButton)

//create subtract button 
const subtractButton = document.createElement('button');
subtractButton.style.backgroundColor = "red"
subtractButton.style.border = 'none'
subtractButton.style.borderRadius = '5%'
subtractButton.style.padding= '10px 20px'
subtractButton.style.color = '#f2f2f2'
subtractButton.textContent = 'subtract One'

//append subtract button container
buttonContainer.appendChild(subtractButton)


//make counter add one and minus one
let counter = 0

function addOrMisusOne() {
    if( this.innerText === 'Add One' ) {
        counter ++ 
        number.textContent = counter
    }
    else if (this.innerText === 'subtract One' ) {
        counter -- 
        number.textContent = counter  
    }
    else if(this.innerText === 'Reset Counter') {
        counter = 0
        number.textContent = counter
    }
    
    if( counter < 0 ) {
        number.style.color ='red'
        headline.style.color = 'red'
        body.style.backgroundColor = 'red'
    } 
    else if( counter > 0) {
        number.style.color ='green'
        headline.style.color = 'green'
        body.style.backgroundColor = 'green'
    }
    else {
        number.style.color ='#333'
        headline.style.color = '#333'
        body.style.backgroundColor = '#333'
    }
}


AddButton.addEventListener('click', addOrMisusOne)
resetButton.addEventListener('click', addOrMisusOne)
subtractButton.addEventListener('click', addOrMisusOne)