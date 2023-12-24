function addTask() {
    // Get the task input value
    var taskInput = document.getElementById("Task");
    var taskValue = taskInput.value;

    // Clear the input field
    taskInput.value = "";

    // Create a new list item
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskValue));

    // Add the new list item to the task list
    document.getElementById("taskList").appendChild(li);
}