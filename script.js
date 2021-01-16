let todo = document.querySelector('ul');

todo.addEventListener('click', function (el) {
    el.classList.toggle('li')
});

function newElement() {
    var li = document.createElement('li');
    let inputValue = document.getElementById("example").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById('todo').appendChild(li);

    document.getElementById('example').value = ''
}










