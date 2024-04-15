function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        var taskItem = document.createElement("div");
        taskItem.className = "taskItem";
        taskItem.textContent = taskText;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        taskItem.appendChild(deleteButton);
        listItem.appendChild(taskItem);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}