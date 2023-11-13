// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

//access body tag and set syles
const body = document.querySelector('body')

//Add styles
body.style.cssText = `
    font-family: Roboto;
    background-color: #003b73
`

//create main Section for all content
const mainSection = document.createElement('main')

//Add stles
mainSection.style.cssText = `
    color: #003b73;
    width: 375px;
    background-color: #f2f2f2;
    margin: 50px auto;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 8px 6px -6px #3d3d3d;
`

//append mainSection to body
body.appendChild(mainSection)

//create headline and add styles
const headline = document.createElement('h1')
headline.textContent = 'Counter App'

//Add styles
headline.style.cssText = `
    font-weight: 100;
    font-size: 4.25rem;
    font-family: 'Lobster';
    margin: 0 0 25px 0;
`

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

//Add styles
number.style.cssText = `
    text-align: center;
    font-size: 12rem;
    padding: 0;
    margin: -25px 0 100px 0;
`

//append number to display
display.appendChild(number)

//create button container
const buttonContainer = document.createElement('div')
buttonContainer.classList.add('button-container')

//Add styles
buttonContainer.style.cssText = `
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    margin-bottom: 15px;
`

//append button container
mainSection.appendChild(buttonContainer)

//create add button 
const addButton = document.createElement('button');
addButton.textContent = 'Add One'

//add styles
addButton.style.cssText = `
   background-color: #228b22;
   border: none;
   border-radius: 5%;
   padding: 10px 20px;
   color: #f2f2f2;
   box-shadow: inset 0 0 5px #3d3d3d;
`

//append add button to button container
buttonContainer.appendChild(addButton)

//Add button hover effect
addButton.addEventListener('mouseover', () => {
    addButton.style.backgroundColor = '#00D100'
})
addButton.addEventListener('mouseout', () => {
    addButton.style.backgroundColor = '#228b22'
})
//create reset button 
const resetButton= document.createElement('button');
resetButton.textContent = 'Reset Counter'

//add styles
resetButton.style.cssText = `
  background-color: #003b73;
  border: none;
  border-radius: 5%;
  padding: 10px 20px;
  color: #f2f2f2;
  box-shadow: inset 0 0 5px #3d3d3d;
`

//append add button to button container
buttonContainer.appendChild(resetButton)

//Add button hover effect
resetButton.addEventListener('mouseover', () => {
    resetButton.style.backgroundColor = '#004EFF'
})
resetButton.addEventListener('mouseout', () => {
    resetButton.style.backgroundColor = '#003b73'
})
//create subtract button 
const subtractButton = document.createElement('button');
subtractButton.textContent = 'Subtract One'

//add styles
subtractButton.style.cssText = `
  background-color: #ae0000;
  border: none;
  border-radius: 5%;
  padding: 10px 20px;
  color: #f2f2f2;
  box-shadow: inset 0 0 5px #3d3d3d;
`

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
footer.textContent = 'By: Mike Grilli'

//Add styles
footer.style.cssText = `
    color: #f2f2f2;
    text-align: center;
    margin-top: -25px;
`

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
        number.style.color ='#ae0000'
        headline.style.color = '#ae0000'
        body.style.backgroundColor = '#ae0000'
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