fetch('tasks.json')
  .then(response => response.json())
  .then(tasks => {
    const list = document.getElementById('task-list');
    const display = document.getElementById('task-display');

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;

      li.onclick = () => {
        fetch(task.file)
          .then(response => response.text())
          .then(html => {
            document.getElementById('task-frame').src = task.file;

          });
      };

      list.appendChild(li);
    });
  });
