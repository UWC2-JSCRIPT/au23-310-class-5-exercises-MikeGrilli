// If an li element is clicked, toggle the class "done" on the <li>
const listItem = document.querySelector('li')

// If a delete link is clicked, delete the li element / remove from the DOM
listItem.addEventListener('click', () => {
  listItem.classList.toggle('done')
})

// If a delete link is clicked, delete the li element / remove from the DOM
const deleteButton = document.querySelector('a') 
deleteButton.addEventListener('click', () => {
  listItem.remove()
})
// If an 'Add' link   is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  
  //Grab todos list
  const todos = document.querySelector('.today-list')

  //Create elements
  const li = document.createElement('li')
  const span = document.createElement('span')
  
  //Set text content to the value of text
  span.textContent = `${text} `

  //Append span to list item
  li.append(span)
  
  //Append li to todos list
  todos.appendChild(li)
  
  //Create event listener to wait to click toggle 'done'
  li.addEventListener('click', () => {
    li.classList.toggle('done')
  })

  //Create anchor for delete
  const deleteButton = document.createElement('a')
  
  //Create anchor for delete
  deleteButton.textContent = `delete`

  //Add class 'delete' to deleteButton
  deleteButton.classList.add('delete')

  //Add class 'delete' to deleteButton
  li.appendChild(deleteButton)
  
  //Create event listener to wait delete 
  deleteButton.addEventListener('click', () => {
    li.remove()
  })

};

const add = document.querySelector('.add-item')
add.addEventListener('click', addListItem)


