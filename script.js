let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="actions">
                <button onclick="completeTask(this)">Done</button>
                <button class="update" onclick="updateTask(this)">Update</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            </span>
            <input type="text" class="edit-input" style="display: none;">
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function completeTask(button) {
    let taskItem = button.closest('li');
    taskItem.classList.toggle('completed');

    // Toggle visibility of update and delete buttons
    let updateButton = taskItem.querySelector('.update');
    let deleteButton = taskItem.querySelector('.delete');
    updateButton.style.display = taskItem.classList.contains('completed') ? 'none' : 'inline-block';
    deleteButton.style.display = taskItem.classList.contains('completed') ? 'none' : 'inline-block';
}

function updateTask(button) {
    let taskItem = button.closest('li');
    let taskTextSpan = taskItem.querySelector('.task-text');
    let editInput = taskItem.querySelector('.edit-input');

    if (editInput.style.display === 'none') {
        taskTextSpan.style.display = 'none';
        editInput.style.display = 'inline-block';
        editInput.value = taskTextSpan.textContent;
        editInput.focus();
    } else {
        taskTextSpan.textContent = editInput.value;
        taskTextSpan.style.display = 'inline-block';
        editInput.style.display = 'none';
    }
}

function deleteTask(button) {
    let taskItem = button.closest('li');
    taskItem.remove();
}
