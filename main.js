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
    createArrayNumbersCards(selectValue);
    let list = document.createElement('ul');
    list.classList.add('list-group');
    list.classList.add('cards');
    let card;
    for (let i = 0; i < countCards; ++i) {
      card = document.createElement('li');
      card.classList.add('card');
      card.classList.add('col-2');
      cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = arrayNumbersCards[i];
      card.append(cardText);
      list.append(card);
      card.addEventListener('click', clickCard)
    };

    let cardsContainer = document.getElementById('cards-container');
    cardsContainer.append(list);
    return cardText;
  }


  function createArrayNumbersCards(numbersCard) {
    arrayNumbersCards = [];
    for (let i = 0; i < (numbersCard / 2); ++i) {
      arrayNumbersCards.push(i);
    };
    arrayNumbersCards = arrayNumbersCards.concat(arrayNumbersCards);
    shuffleArray(arrayNumbersCards);
    return arrayNumbersCards;
  }



  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
  }

  function clickCard(e) {
     let activeCard = e.target;
     console.log(activeCard.textContent);
  }



  /*function createTodoApp(container, title, keyName) {


    container.append(list);
  }

   window.createTodoApp = createTodoApp;*/

})();
