let textoTodo = document.querySelector('#text');
let checkboxItem = document.querySelector('#check_item');
let todoList = document.querySelector('.todo_list');
let numberCounter = document.querySelector('.number_counter');
let todoButtons = document.querySelectorAll('.todo_buttons');
let iconTheme = document.querySelector('.todo_icon')
let themeSet = document.querySelectorAll('[data-theme]')

// Fuctions

const updateCounter = () =>  document.querySelectorAll('.todo_item').length;

const createNode = (textValue) => {
  const nuevoTodo = document.createElement('div');
  nuevoTodo.innerHTML = `<label>
            <input type="checkbox">
            <span class="circle"></span>
            <span>${textValue}</span>
          </label>
          <button class="close"></button>`
  nuevoTodo.classList.add('todo_item')
  todoList.appendChild(nuevoTodo)
}

// Event listeners

iconTheme.addEventListener('click', e => {
  Array.from(e.currentTarget.children).forEach(el => el.classList.toggle('visible'));

  if (document.body.dataset.theme === "") {
    themeSet.forEach(theme => {
      theme.setAttribute("data-theme", "dark")
    })
  } else {
    themeSet.forEach(theme => {
      theme.setAttribute("data-theme", "")
    })
  }
})

checkboxItem.addEventListener('click', () => {
  
  if (textoTodo.value !== "") {
    createNode(textoTodo.value);
    numberCounter.textContent = updateCounter();
    textoTodo.value = "";;
  }
})

textoTodo.addEventListener('keyup', e => {
  if (e.code === 'Enter' && textoTodo.value !== "") {
    createNode(textoTodo.value);
    numberCounter.textContent = updateCounter();
    textoTodo.value = "";;
  }
})

todoList.addEventListener('click', (e) => {
  if (e.target.matches('.close')) {
    e.target.parentElement.remove()
    numberCounter.textContent = updateCounter();
  }
})

todoButtons.forEach(btn => {
  
  btn.addEventListener('click', (e) => {

    let labels = document.querySelectorAll('label')
  
    labels.forEach(item => {

       item.parentElement.classList.remove('visible')

      if (e.target.matches('.button-active')) {
        if (item.firstElementChild.checked === true) {
           item.parentElement.classList.add('visible')
        }
      }
      if (e.target.matches('.button-completed')) {
        if (item.firstElementChild.checked !== true) {
          item.parentElement.classList.add('visible')
        }
      }
      if (e.target.matches('.button-all')) {
         item.parentElement.classList.remove('visible')
      }
      if (e.target.matches('.button-clear')) {
        if (item.firstElementChild.checked === true) {
           item.parentElement.remove()
          numberCounter.textContent = updateCounter();
        }
      }
    })
  })
})

  
