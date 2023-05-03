const taskInput = document.getElementById('task__input');
const taskForm = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');

function addTask(event) {
  event.preventDefault(); 
  
  let title = taskInput.value.trim(); 

  if (title) {
    let taskItem = document.createElement('div');
    taskItem.className = 'task';
    
    let taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.innerText = title;
    
    let taskRemove = document.createElement('a');
    taskRemove.className = 'task__remove';
    taskRemove.innerHTML = "&times;";

    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskRemove);
    
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
  }
}

function removeTask(event) {
  var taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}

taskForm.addEventListener('submit', addTask);

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('task__remove')) {
    removeTask(event);
  }
});
