const showModal = (type) => {
    const modal = document.querySelector("#new_modal");
    const modalDescription = document.querySelector("#new_modal_description");
    if(type == "todo"){
        modalDescription.textContent = "New Todo Name";
    }
    else {
        modalDescription.textContent = "New Project Name";
    }
    modal.classList.remove("hidden");
}

const hideModal = () => {
    const modal = document.querySelector("#new_modal");
    modal.classList.add("hidden");
}

export {showModal, hideModal};