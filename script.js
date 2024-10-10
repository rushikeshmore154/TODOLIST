const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        const taskElement = document.createElement('li');
        taskElement.textContent = task;
        taskList.appendChild(taskElement);
        taskInput.value = '';
    }
}