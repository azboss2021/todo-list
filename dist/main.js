(()=>{"use strict";const e=e=>{const t=document.querySelector("#new_modal");document.querySelector("#new_modal_description").textContent="todo"==e?"New Todo Name":"New Project Name",t.classList.remove("hidden")},t=e=>{const t=document.querySelector("#project_list");t.innerHTML="",e.forEach((e=>{const n=document.createElement("div");n.classList.add("project");const o=document.createElement("button");o.textContent="⚙️",o.classList.add("settings");const c=document.createElement("div");c.textContent=e.description,c.classList.add("project_title"),n.appendChild(o),n.appendChild(c),t.appendChild(n)}))},n=e=>{const t=document.querySelectorAll(".project");document.querySelector("#list").innerHTML="",Array.from(t).forEach((e=>{e.classList.remove("active")})),e.list.forEach((e=>{const t=document.createElement("div");t.classList.add("list_item");const n=document.createElement("button");n.textContent="⚙️",n.classList.add("settings");const o=document.createElement("div");o.classList("list_description"),o.textContent=e.description;const c=document.createElement("input");c.type="date",c.classList.add("list_date"),t.appendChild(n),t.appendChild(o),t.appendChild(c)}))},o=document.querySelector("#add_todo"),c=document.querySelector("#add_project"),d=document.querySelector("#new_modal_submit");function s(e){return{description:e,list:[]}}let r=[],i=new s("Default Project");r.push(i),t(r),n(i),o.addEventListener("click",(()=>{e("todo")})),c.addEventListener("click",(()=>{e("project")})),d.addEventListener("click",(()=>{document.querySelector("#new_modal").classList.add("hidden");let e=document.querySelector("#new_modal_input").value;"project"==(document.querySelector("#new_modal_description").textContent.includes("Todo")?"todo":"project")&&(i=new s(e),r.push(i),t(r),n(i))}))})();