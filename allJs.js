let textoTodo = document.querySelector('#text');
let checkboxItem = document.querySelector('#check_item');
let todoList = document.querySelector('.todo_list');
let numberCounter = document.querySelector('.number_counter');
let todoButtons = document.querySelectorAll('.todo_buttons');
let iconTheme = document.querySelector('.todo_icon')




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


iconTheme.addEventListener('click', e => {
  Array.from(e.currentTarget.children).forEach(el => {
    el.classList.toggle('visible')
    
  });
  if (document.body.dataset.theme === "") {
    document.body.dataset.theme = "dark";
    document.querySelector('.todo_form').dataset.theme = "dark";
    document.querySelector('.todo_body').dataset.theme = "dark";
    document.querySelector('.todo_buttons_mobile').dataset.theme = "dark";
  } else {
    document.body.dataset.theme = "";
    document.querySelector('.todo_form').dataset.theme = "";
    document.querySelector('.todo_body').dataset.theme = "";
    document.querySelector('.todo_buttons_mobile').dataset.theme = "";
  }
})

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

todoList.addEventListener('click', (e) => {
  if (e.target.matches('.close')) {
    e.target.parentElement.remove()
    let todoItems = document.querySelectorAll('.todo_item');
    numberCounter.textContent = todoItems.length;
  }
})

todoButtons.forEach(btn => {
  
  btn.addEventListener('click', (e) => {

    let todoItems = document.querySelectorAll('.todo_item');
  
    todoItems.forEach(item => {

      item.classList.remove('visible')

      if (e.target.matches('.button-active')) {
        if (item.firstElementChild.checked === true) {
          item.classList.add('visible')
        }
      }
      if (e.target.matches('.button-completed')) {
        if (item.firstElementChild.checked !== true) {
          item.classList.add('visible')
        }
      }
      if (e.target.matches('.button-all')) {
        item.classList.remove('visible')
      }
      if (e.target.matches('.button-clear')) {
        if (item.firstElementChild.checked === true) {
          item.remove()
          let todoItems = document.querySelectorAll('.todo_item');
          numberCounter.textContent = todoItems.length;
        }
      }
    })
  })
})

  
