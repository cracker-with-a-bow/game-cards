document.addEventListener('DOMContentLoaded', () => {


  let clicks = 0;
  selectValue = 4;
  firstCard = null;
  secondCard = null;
  function createCountCards() {
    const select = document.querySelector('.modal-window__select');
    const modalWindow = document.querySelector('.modal-window');
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
    let card;
    list.classList.add('list-group');
    list.classList.add('cards');
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

    function clickCard(e) {

      let activeCard = e.target;
      activeCard.classList.add('active-card');

      if (firstCard != null && secondCard != null) {
        if (firstCard.textContent != secondCard.textContent) {
          firstCard.classList.remove('active-card');
          secondCard.classList.remove('active-card');
          console.log('не совпадают');
          firstCard = null;
          secondCard = null;
        }
      }

      if (firstCard == null) {
        firstCard = activeCard
      } else {
        if (secondCard == null) {
          secondCard = activeCard
        }
      }

      if (firstCard != null && secondCard != null) {
        if (firstCard.textContent == secondCard.textContent) {
          console.log('одинаковые');
          clicks++;
          console.log(clicks);
          firstCard = null;
          secondCard = null;
        }
      }

      console.log('после цикла', clicks);
      if (countCards / 2 == clicks) {
        alert('Вы выиграли');
        location.reload();
      }
    }



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





  /*function createTodoApp(container, title, keyName) {


    container.append(list);
  }

   window.createTodoApp = createTodoApp;*/

});
