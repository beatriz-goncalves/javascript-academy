const todo =
    [
        { project: "Task 1", dueDate: "30/06/2023", status: "Not started" },
        { project: "Task 2", dueDate: "01/06/2023", status: "Completed" },
        { project: "Task 3", dueDate: "23/06/2023/06/2023", status: "In progress" },
        { project: "Task 4", dueDate: "31/07/2023", status: "Not started" },
        { project: "Task 5", dueDate: "05/06/2023", status: "Completed" },
        { project: "Task 6", dueDate: "28/06/2023", status: "In progress" },
    ];


const initPage = () => {
    buildTodoInformation();
}

const completedStatus = () => {
    let todoCompleted = document.getElementById("todoCompleted").value;
    const todoFiltered = filterTodoByStatus(todo, todoCompleted);
    buildTodoInformation(todoFiltered);
}

const seeAllStatus = () => {
    return buildTodoInformation(todo);
}

const buildTodoInformation = (infoTodo) => {
    let todoArray;
    const result = document.getElementById("result");
    result.innerHTML = "";

    infoTodo === undefined ? todoArray = todo : todoArray = infoTodo;

    todoArray.forEach(todo => {
        const todoProjectDiv = document.createElement("div");
        const todoDueDateDiv = document.createElement("div");
        const todoStatusDiv = document.createElement("div");
        const paragraf = document.createElement("div");
        todoProjectDiv.innerHTML = `<b>Project:</b> ${todo.project}`;
        todoDueDateDiv.innerHTML = `<b>Due Date:</b> ${todo.dueDate}`;
        todoStatusDiv.innerHTML = `<b>Status:</b> ${todo.status}`;
        paragraf.innerHTML = `<p></p>`;
        result.appendChild(todoProjectDiv);
        result.appendChild(todoDueDateDiv);
        result.appendChild(todoStatusDiv);
        result.appendChild(paragraf);
    })
}

const getAllStatus = () => {
    let statusArray = [firstOption];
    todo.forEach(item => {
        statusArray.push(item.status)
    });

    // Using SET allows you to create an array of unique values
    return [...new Set(statusArray)];
}

const filterTodoByStatus = (todo, status) => {
    return todo.filter((todoItem) => todoItem.status === status);
}

window.addEventListener("load", initPage);