const form = document.getElementById('enter-task');
const list = document.getElementById('to-do-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = document.getElementById('task');
  const listElement = document.createElement('li');

  listElement.textContent = task.value;

  list.appendChild(listElement);


  form.reset();
});