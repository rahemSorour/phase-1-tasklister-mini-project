document.addEventListener("DOMContentLoaded", () => {
  const getForm = document.querySelector('form');
  const tasksList = document.getElementById('tasks');

  getForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        ${taskDescription}
        <button class="delete-button">Delete</button>
      `;
      tasksList.appendChild(taskItem);
      console.log(tasksList)
      taskInput.value = '';
      const deleteButton = taskItem.querySelector('.delete-button');
      deleteButton.addEventListener('click', function () {
        taskItem.remove();
      });
    }
  })

  const restBtn=document.getElementById('restbuttom')
  restBtn.addEventListener('click',()=>tasksList.innerHTML = '')
});

