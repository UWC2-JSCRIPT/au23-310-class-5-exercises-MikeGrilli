// If an li element is clicked, toggle the class "done" on the <li>
const todo = document.querySelector('.today-list')
const listItem = document.querySelector('li')
todo.addEventListener('click', (e) => {
 
  if(e.target.tagName === 'SPAN') {
    listItem.classList.toggle('done')
  }
    // If a delete link is clicked, delete the li element / remove from the DOM
  else if(e.target.textContent === 'Delete') {
    listItem.remove()
  }
})
// If an 'Add' link   is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  const li = document.createElement('li')
  li.textContent = text
  todo.appendChild(li)
};

const add = document.querySelector('.add-item')
add.addEventListener('click', addListItem)


