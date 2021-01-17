let list = document.querySelector('ul');
let todos;

function toLocal(){
    todos = list.innerHTML;
    localStorage.setItem('todos',todos);
}

if(localStorage.getItem('todos')){
    list.innerHTML = localStorage.getItem('todos');
}

function newElement() {
    //создаем li
    let li = document.createElement('li');
    // получаем значение из input
    let inputValue = document.getElementById("example").value;
    console.log(inputValue);
    // в текстовый узел t засовываем строку с данными из inputValue
    let t = document.createTextNode(inputValue);
    // засовываем текстовый узел t в конец списка li
    li.appendChild(t);
    // кладем наше li со значением в конец нашего списка
    document.getElementById('todo').appendChild(li);
    toLocal();
    // чистим поле input после ввода значения
    document.getElementById('example').value = ''
}









