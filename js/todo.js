
// Get HTML elements
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

// Load saved tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        // Create a list item
        let li = document.createElement("li");

        // Create a checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        // Update completed status
        checkbox.addEventListener("change", function() {

            tasks[index].completed = checkbox.checked;

            saveTasks();
            displayTasks();

        });

        // Create task text
        let span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.style.textDecoration = "line-through";
        }

        // Create delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {

            tasks.splice(index, 1);

            saveTasks();
            displayTasks();

        });

        // Add elements to the list
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });
}

// Save tasks
function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Add a new task
addButton.addEventListener("click", function() {

    let taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");
        return;

    }

    let newTask = {
        text: taskText,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    displayTasks();

});

// Show saved tasks when the page loads
displayTasks();
