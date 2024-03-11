function addTask() {
    var taskInput = document.getElementById("taskInput");
    var deadlineInput = document.getElementById("deadlineInput");
    var priorityInput = document.getElementById("priorityInput");

    var taskText = taskInput.value.trim();
    var deadline = deadlineInput.value;
    var priority = priorityInput.value;

    if (taskText !== "" && deadline !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.innerHTML = `<span>${taskText}</span><span>Deadline: ${deadline}</span><span>Priority: ${priority}</span>`;
        taskList.appendChild(newTask);
        taskInput.value = "";
        deadlineInput.value = "";
        priorityInput.value = "low";
    } else {
        alert("Please enter a valid task and deadline!");
    }
}