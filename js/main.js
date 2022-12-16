import ToDoItem from "./todoitem.js";
import ToDoList from "./todolist.js";

const toDoList = new ToDoList();

// Launch app
document.getElementById('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
        initApp();
    }
});

const initApp = () => {
    //Add listeners

    //Proccedural
    //load list object
    refreshThePage();
}

const refreshThePage = () => {
    clearListDisplay();
    //renderList();
    //clearItemEntryField();
    //setFocusOnItemEntry();
}

const clearListDisplay = () => {
    const parentElement = document.getElementById('listItems');
    deleteContent(parentElement);
}


