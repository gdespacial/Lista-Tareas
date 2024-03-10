//Variables
let root = document.querySelector(":root");
let container = document.querySelector(".container");
let nuevaTareaInput = document.getElementById("nueva_tarea_input");
let tareaForm = document.getElementById("nueva_tarea_form");
let tareaList = document.getElementById("listaTareas");
let tareaBtns = document.querySelectorAll(".task_check_btn");
let themeBtn = document.querySelector(".theme_toogle_btn");

//Hacer esto cuando hacemos submit en el form

tareaForm.addEventListener("submit", function(e){
    e.preventDefault();
    let nuevaTareaInputValue = tareaForm.elements.nueva_tarea_input;
addTask(nuevaTareaInputValue.value);

//Resetear el valor de input 
nuevaTareaInputValue.value = "";
container.classList.remove("lista_tareas_vacia");
});

//Agregar tarea a la lista

function addTask(newTask){
    //Crear un elemento li y darle una clase
const newTaskItem = document.createElement("li")
newTaskItem.setAttribute("class", "task_item");
//Crear elemento Checkbox y darle tipo y clase
const newCheckBtn = document.createElement("div");
newCheckBtn.setAttribute("class","task_check_btn");
//Crear elemento span, darle clase y adherir nueva tarea en un input
const newTaskBio = document.createElement("span");
newTaskBio.setAttribute("class","task_bio");
//Darle Value de Input
newTaskBio.innerText = newTask; // poner Value de Input en li
//append (insertar) tag li en Ul
tareaList.appendChild(newTaskItem);
//append (insertar) checkbox en li
newTaskItem.appendChild(newCheckBtn);
//append (insertar) nuevatarea en li
newTaskItem.appendChild(newTaskBio);
// Correr esta función cuando la tarea está completada o el checkbox está chekeado
onTaskComplete(newCheckBtn);
};

//Para remover La tarea completada

function onTaskComplete(btns){
    btns.addEventListener("click", function (element) {
        let parents = element.target.parentElement;
        parents.classList.add("task-completed"); // Para girar la tarea a la derecha
        // Ahora borramos esa tarea que hemos movido
        setTimeout(() => {
            // Remover Parent Element de checkobx que es Li en 0.5 s
            parents.remove();
        }, 400);

        if (tareaList.childNodes.length === 1) {
            setTimeout(() => {
                container.classList.add("task_list_empty");
            }, 200);
        }
    });
}

//Validación de formulario


const $nuevaTarea = nuevaTareaInput.value;

function validarForm($nuevaTarea){
    if ($nuevaTarea.length === 0){
        return 'Este campo debe tener al menos un caracter'
    }
    if ($nuevaTarea.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }
    return '';
}



//Modo oscuro

themeBtn.addEventListener('click', function() {
    let darkTheme = themeBtn.classList.toggle("dark");

    if (darkTheme) {
        root.style.setProperty("--theme-transition", "1s");
        root.style.setProperty("--primary-color", "#1E1E1E");
        root.style.setProperty("--secondary-color", "#3B3B3B");
        root.style.setProperty("--text-color", "#EAEAEA");
        root.style.setProperty("--task-color", "#3B3B3B");
        root.style.setProperty("--footer-color", "#1E1E1E");
        root.style.setProperty(
            "--theme-btn",
            `url('assets/Light-theme-btn.svg')`
        );
        root.style.setProperty(
            "--container-bg",
            `url('./assets/Dark-empty.svg')`
        );
        root.style.setProperty("--filter", "invert()");
    } else {
        root.style.setProperty("transition", "1s");
        root.style.setProperty("--primary-color", "rgb(30, 172, 157)");
        root.style.setProperty("--secondary-color", "#1E1E1E");
        root.style.setProperty("--text-color", "black");
        root.style.setProperty("--task-color", "white");
        root.style.setProperty("--footer-color", "#1E1E1E");
        root.style.setProperty(
            "--theme-btn",
            `url('assets/Dark-theme-btn.svg')`
        );
        root.style.setProperty(
            "--container-bg",
            `url('./assets/Light-empty.svg')`
        );
    }
});