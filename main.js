(function () {

  function createCountCards () {
    let select = document.querySelector('.modal-window__select');

select.addEventListener('change', function e(){
  let selectValue = select.value;
  console.log(selectValue);
})
console.log(select);

  }

  createCountCards();

  function createGameField(countCards) {
    parseInt(countCards);
    console.log(countCards);
    let list = document.createElement('ul');
    list.classList.add('list-group');
    let item;
    for (let i = 0; i <= countCards; ++i) {
      item = document.createElement('li');
      console.log(li);
      list.append(item);
    };
    console.log(list);
    let container = document.getElementById('game');
    container.append(list);
  }

  /*function createTodoApp(container, title, keyName) {


    container.append(list);
  }

   window.createTodoApp = createTodoApp;*/

})();
