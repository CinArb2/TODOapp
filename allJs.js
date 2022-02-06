let textoTodo = document.querySelector('#text');
let checkboxItem = document.querySelector('#check_item');
let todoList = document.querySelector('.todo_list')
let numberCounter = document.querySelector('.number_counter')


const createNode = (textValue, contador) => {
  const nuevoTodo = document.createElement('div');
  const nuevoinput = document.createElement('input');
  const nuevolabel = document.createElement('label');
  const nuevoBoton = document.createElement('button');

  nuevoTodo.classList.add('todo_item')
  nuevoBoton.classList.add('close')
  nuevoinput.setAttribute("type", "checkbox")
  
  nuevoinput.setAttribute("id", `task${contador}`)
  nuevolabel.setAttribute("for", `task${contador}`)
  nuevoTodo.appendChild(nuevoinput)
  nuevoTodo.appendChild(nuevolabel)
  nuevoTodo.appendChild(nuevoBoton)
  todoList.appendChild(nuevoTodo)
  nuevolabel.textContent = textValue;
}

const clearForm = () => {
  checkboxItem.checked = false;
  textoTodo.value = "";
}


checkboxItem.addEventListener('click', () => {
  if (textoTodo.value !== "") {
    let numeroItems = document.querySelectorAll('.todo_item').length + 1;
    createNode(textoTodo.value, numeroItems);
    numberCounter.textContent = numeroItems;
    clearForm();
  }

})

textoTodo.addEventListener('keyup', e => {
  if (e.code === 'Enter' && textoTodo.value !== "") {
    let numeroItems = document.querySelectorAll('.todo_item').length + 1;

    createNode(textoTodo.value, numeroItems);
    numberCounter.textContent = numeroItems;
    clearForm();
  }
})

