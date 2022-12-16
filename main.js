(function () {
  let selectValue = 4;
  function createCountCards() {
    let select = document.querySelector('.modal-window__select');
let modalWindow = document.querySelector('.modal-window');
    select.addEventListener('change', function e() {
      selectValue = parseInt(select.value);
      modalWindow.classList.add('display-none');
      createGameField(selectValue);
    })
    return selectValue;

  }

  createCountCards();

  function createGameField(countCards) {
    countCards = selectValue;
    let list = document.createElement('ul');
    list.classList.add('list-group');
    list.classList.add('cards');
    let item;
    for (let i = 0; i < countCards; ++i) {
      item = document.createElement('li');
      item.classList.add('card');
      list.append(item);
    };
    console.log(list);
    let cardsContainer = document.getElementById('cards-container');
    cardsContainer.append(list);
  }



  /*function createTodoApp(container, title, keyName) {


    container.append(list);
  }

   window.createTodoApp = createTodoApp;*/

})();
