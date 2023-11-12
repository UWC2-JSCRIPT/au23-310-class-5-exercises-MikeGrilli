// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const header = document.getElementById("weather-head")
header.textContent = "February 10 Weather Forecast, Seattle"


// Change the styling of every element with class "sun" to set the color to "orange"

const sun = Array.from(document.querySelectorAll(".sun"))
sun.forEach(el => {
    el.style.color = 'orange'
})

// Change the class of the second <li> from to "sun" to "cloudy"
const listItem = document.querySelectorAll("li")

listItem[1].classList.replace("sun", "cloudy")
listItem[1].removeAttribute("style")

// console.log(list)
