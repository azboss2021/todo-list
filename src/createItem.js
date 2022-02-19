const getModalInput = () => {
    const modalInput = document.querySelector("#new_modal_input");
    return modalInput.value;
}

const getModalType = () => {
    const modalType= document.querySelector("#new_modal_description");
    if(modalType.textContent.includes("Todo")) return "todo";
    else return "project";
}

export {getModalInput, getModalType};