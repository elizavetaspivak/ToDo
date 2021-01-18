let list = document.querySelector('ul');
let todo = document.getElementById('todo');
let input = document.querySelector('#example');

// let addBtn = document.querySelector('.addBtn').addEventListener('click', newElement);
// // let todos;


// function newElement(){
//     let template = `<li>${input.value}</li>`;
//     todo.insertAdjacentHTML('beforeend', template);
//     input.value = ''
// }

let addBtn = document.querySelector('.addBtn').addEventListener('click', function () {
    todos.push(input.value)
    renderTodos()
})

let todos = []

function renderTodos() {
    input.value = ''
    todo.innerHTML = ''
    todos.forEach(function (item, index) {
        todo.insertAdjacentHTML('afterbegin', `<li id="todoItem" data-index=${index}>${item}</li>`)
    })
    document.querySelectorAll('#todoItem').forEach(function (el) {
        el.addEventListener('click', function (){
            deleteTodo(el)
        })
    })
}
function deleteTodo(el){
    const index = el.dataset.index;
    todos.splice(index, 1);
    renderTodos()
}


// function toLocal(){
//     todos = list.innerHTML;
//     localStorage.setItem('todos',todos);
// }

// if(localStorage.getItem('todos')){
//     list.innerHTML = localStorage.getItem('todos');
// }

// function newElement() {
//     //создаем li
//     let li = document.createElement('li');
//     // получаем значение из input
//     let inputValue = document.getElementById("example").value;
//     console.log(inputValue);
//     // в t засовываем строку с данными из inputValue
//     let t = document.createTextNode(inputValue);
//     // засовываем li c текстом в наш блок todo
//     li.append(t);
//     // кладем наше li со значением в наш список в html
//     document.getElementById('todo').append(li);

//     //или 
//     // todo.insertAdjacentHTML("beforeend", <li>${inputValue}</li>);
//     toLocal();
//     // чистим поле input после ввода значения
//     document.getElementById('example').value = ''
// }










