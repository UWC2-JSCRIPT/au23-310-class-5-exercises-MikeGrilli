// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

 const tableBody = document.querySelector('tbody')

tableBody.addEventListener('click', (e) => {
    const tr = Array.from(document.querySelectorAll('td'))

    tr.forEach(el => {
        el.style.color = "#333"
        el.style.fontSize = "26px"
        el.style.fontWeight = "100"
        el.style.textAlign = "center"
    })
    
    const x = e.x
    const y = e.y
    e.target.innerHTML = `x: ${x} 
                          y: ${y}
                         `
})
