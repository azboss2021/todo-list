import {showModal, hideModal} from '../src/modal.js'
import {getModalInput, getModalType} from '../src/createItem.js'
import {updateProjectList, setCurrentProject} from '../src/updateProjects.js';
import updateTodoList from '../src/updateTodoList.js';

const addTodoButton = document.querySelector("#add_todo");
const addProjectButton = document.querySelector("#add_project");
const newModalSubmit = document.querySelector("#new_modal_submit");
//const modalDelete = document.querySelector("#delete");

function Project(description) {
    return {
        description: description,
        list: []
    }
}
let projects = [];

function Todo(description, date) {
    return {
        description: description,
        date: date
    }
}

let defaultProject = new Project("Default Project");
let currentProject = defaultProject;
projects.push(currentProject);

updateProjectList(projects);
setCurrentProject(currentProject);

addTodoButton.addEventListener('click', ()=>{showModal("todo")});
addProjectButton.addEventListener('click', ()=>{showModal("project")});
newModalSubmit.addEventListener('click', ()=>{
    hideModal();
    let newItemName = getModalInput();
    let itemType = getModalType();
    if(itemType === "project") {
        currentProject = new Project(newItemName);
        projects.push(currentProject);
        updateProjectList(projects);
        setCurrentProject(currentProject);
        // let newTodo = new Todo(newItemName, (today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()));
        // currentProject.list.push(newTodo);
    }
});

// const setProject = (project) => {
//     currentProject = project;
// }
// modalDelete.addEventListener('click', submitModal);


// function Project(list) {
//     this.list = list;
// }

//currentProject = new Project(list);