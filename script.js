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

    // чистим поле input после ввода значения
    document.getElementById('example').value = ''
}










