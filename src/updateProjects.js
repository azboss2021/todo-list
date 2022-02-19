const updateProjectList = (projects) => {
    const projList = document.querySelector("#project_list");
    projList.innerHTML = "";
    projects.forEach(project => {
        const projDiv = document.createElement("div");
        projDiv.classList.add("project");

        const projSettings = document.createElement("button");
        projSettings.textContent = "⚙️";
        projSettings.classList.add("settings");

        const projTitle = document.createElement("div");
        projTitle.textContent = project.description;
        projTitle.classList.add("project_title");

        projDiv.appendChild(projSettings);
        projDiv.appendChild(projTitle);

        projList.appendChild(projDiv);
    });
}

const setCurrentProject = (project) => {
    const projects = document.querySelectorAll(".project");
    const todoList = document.querySelector("#list");
    todoList.innerHTML = "";
    Array.from(projects).forEach(proj => {
        proj.classList.remove("active");
    })
    project.list.forEach(todoItem => {      
        const listDiv = document.createElement("div");
        listDiv.classList.add("list_item");

        const settings = document.createElement("button");
        settings.textContent = "⚙️";
        settings.classList.add("settings");

        const listDescription = document.createElement("div");
        listDescription.classList("list_description");
        listDescription.textContent = todoItem.description;

        const listDate = document.createElement("input");
        listDate.type = "date";
        listDate.classList.add("list_date");

        listDiv.appendChild(settings);
        listDiv.appendChild(listDescription);
        listDiv.appendChild(listDate);
    })
}

export {updateProjectList, setCurrentProject};