// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const header = document.getElementById("weather-head")
header.innerText = "February 10 Weather Forecast, Seattle"
// Change the styling of every element with class "sun" to set the color to "orange"

const sun = document.querySelectorAll(".sun")
for (let i= 0; i < sun.length; i++) {
    sun[i].style.color = "orange"
}

// Change the class of the second <li> from to "sun" to "cloudy"
const list = document.querySelectorAll("li")

list[1].classList.replace("sun", "cloudy")
 console.log(list)

 const removeBullets = document.getElementsByTagName("li")
 
 console.log(removeBullets)
 for (let i = 0; i < removeBullets.length; i++) {
    removeBullets[i].style.listStyle="none"
    
 }