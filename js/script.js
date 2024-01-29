const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');


myButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li');
    // element.classList - добавляет или удаляет классы для элемента
    newItem.classList.add('item');
    newItem.textContent = nameInput.value;


    // Добавить кнопку для удаления элемента списка
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('nav__img')
    deleteButton.textContent = '+';


    // Удаление элемента списка
    deleteButton.addEventListener('click', () => {
        // parent.removeChild(element) - удаляет указанный элемент (element) из родителя (parent)
        list.removeChild(newItem);
    })

    // Добавить кнопку в элемент списка
    // Метод parent.appendChild(element) позволяет вставить в конец элемента (parent) 
    // какой-либо другой элемент (element).
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

    // Очистка поля ввода
    nameInput.value = '';
})

