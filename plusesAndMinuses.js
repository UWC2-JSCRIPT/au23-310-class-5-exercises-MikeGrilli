// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

//access body tag and set syles
const body = document.querySelector('body')
body.style.fontFamily = 'Helvetica'
body.style.backgroundColor = '#003b73'

//create main Section for all content
const mainSection = document.createElement('main')
mainSection.style.color ='#3d3d3d'
mainSection.style.width = '375px'
mainSection.style.backgroundColor = '#f2f2f2'
mainSection.style.margin = '50px auto'
mainSection.style.textAlign = 'center'
mainSection.style.padding = "20px"
mainSection.style.borderRadius = '10px'
mainSection.style.boxShadow = '0 8px 6px -6px #3d3d3d'

//append mainSection to body
body.appendChild(mainSection)

//create headline and add styles
const headline = document.createElement('h1')
headline.textContent = 'Add or Subtract by 1'

//append headline to body
mainSection.appendChild(headline)

//create section for text
const display = document.createElement('div')
display.style.height = '200px'

//append display to mainSection
mainSection.appendChild(display)

//create p for display
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
const addButton = document.createElement('button');
addButton.style.backgroundColor = '#228b22'
addButton.style.border = 'none'
addButton.style.borderRadius = '5%'
addButton.style.padding= '10px 20px'
addButton.style.color = '#f2f2f2'
addButton.style.boxShadow = 'inset 0 0 5px #3d3d3d'
addButton.textContent = 'Add One'

//append add button to button container
buttonContainer.appendChild(addButton)

//Add button hover effect
addButton.addEventListener('mouseover', () => {
    addButton.style.backgroundColor = '#2EFF2E'
})
addButton.addEventListener('mouseout', () => {
    addButton.style.backgroundColor = '#228b22'
})
//create reset button 
const resetButton= document.createElement('button');
resetButton.style.backgroundColor = '#003b73'
resetButton.style.border = 'none'
resetButton.style.borderRadius = '5%'
resetButton.style.padding= '10px 20px'
resetButton.style.color = '#f2f2f2'
resetButton.style.boxShadow = 'inset 0 0 5px #003b73'
resetButton.textContent = 'Reset Counter'

//append add button to button container
buttonContainer.appendChild(resetButton)

//Add button hover effect
resetButton.addEventListener('mouseover', () => {
    resetButton.style.backgroundColor = '#0000ff'
})
resetButton.addEventListener('mouseout', () => {
    resetButton.style.backgroundColor = '#003b73'
})
//create subtract button 
const subtractButton = document.createElement('button');

subtractButton.style.backgroundColor = "#ae0000"
subtractButton.style.border = 'none'
subtractButton.style.borderRadius = '5%'
subtractButton.style.padding= '10px 20px'
subtractButton.style.color = '#f2f2f2'
subtractButton.style.boxShadow = 'inset 0 0 5px #3d3d3d'
subtractButton.textContent = 'Subtract One'

//append subtract button container
buttonContainer.appendChild(subtractButton)

//Add button hover effect
subtractButton.addEventListener('mouseover', () => {
    subtractButton.style.backgroundColor = '#ff0000'
})
subtractButton.addEventListener('mouseout', () => {
    subtractButton.style.backgroundColor = '#ae0000'
})

const footer = document.createElement('p')
footer.style.color = '#f2f2f2'
footer.style.textAlign = 'center'
footer.style.marginTop = '-25px'
footer.textContent = 'By: Mike Grilli'

//append footer to body
body.appendChild(footer)

//make counter add one and minus one
let counter = 0

function addOrMisusOne() {
    if( this.innerText === 'Add One' ) {
        counter ++ 
        number.textContent = counter
    }
    else if (this.innerText === 'Subtract One' ) {
        counter -- 
        number.textContent = counter  
    }
    else if(this.innerText === 'Reset Counter') {
        counter = 0
        number.textContent = counter
    }
    
    if( counter < 0 ) {
        number.style.color ='#EE4B2B'
        headline.style.color = '#EE4B2B'
        body.style.backgroundColor = '#EE4B2B'
    } 
    else if( counter > 0) {
        number.style.color ='#228b22'
        headline.style.color = '#228b22'
        body.style.backgroundColor = '#228b22'
    }
    else {
        number.style.color ='#003b73'
        headline.style.color = '#003b73'
        body.style.backgroundColor = '#003b73'
    }
}


addButton.addEventListener('click', addOrMisusOne)
resetButton.addEventListener('click', addOrMisusOne)
subtractButton.addEventListener('click', addOrMisusOne)