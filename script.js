// Gör en arr med cort obeject
// skapa en funktion som random tar ett obejkt(kort)
// och lägger den i en tom variabel
// skapa en fuktion som gämför kortet med det nästkomande random kort
// högt lågt eller ===
// skapa 3 tomma variabler där försök och poäng sparas samt
// hur många kort som finns kvar i kortleken(arr)
// gör en funktion som håller koll på hur många försök man har kvar och om man gissar fel

// skappar kortleks objekt
let kortlek = [];
let showcard
let comapared
let score = 0;
let tries = 5;

function cardCreat() {
  for (let suit = 1; suit <= 4; suit++) {
  for (let value = 1; value <= 13; value++) {
    kortlek.push({
      value: value,
      suit: suit,
    });
  }
}
}

function showValue() {
  const cardContainer = document.querySelector(`#card-container`);
  cardContainer.innerHTML = '';

 
  const cardElement = document.createElement('div');
  cardElement.className = `card ${getSuitClass(showcard.suit)}`;

 
  const cardNumberElement = document.createElement('div');
  cardNumberElement.className = 'card-number';
  cardNumberElement.innerText = changenumber(showcard.value);

 
  cardElement.appendChild(cardNumberElement);
  
cardContainer.appendChild(cardElement);
document.getElementById(`score`).innerText = `Score: ${score}`
document.getElementById(`tryes`).innerText = `Tryes: ${tries}`
document.getElementById(`cardsleft`).innerText = `Cards Left: ${kortlek.length}`
}

function changenumber(value) {
  if (value === 11) {
    return "J";
  } else if (value === 12) {
    return "Q";
  } else if (value === 13) {
    return "K";
  } else {
    return value.toString();
  }
}

function getSuitClass(suit) {
  switch (suit) {
    case 1:
      return 'heart';
    case 2:
      return 'diamond';
    case 3:
      return 'clubs';
    case 4:
      return 'spades';
    default:
      return '';
  }}

function getCard() {
  const randomIndex = Math.floor(Math.random() * kortlek.length);
  const card = kortlek[randomIndex];
  removeCard(randomIndex);
  return card;
}

function removeCard(index) {
  kortlek.splice(index, 1);
}

function begin() {
  cardCreat()
  if (kortlek.length === 52) {
  showcard = getCard()
  score = 0; 
  console.log("showcard", showcard);
  showValue();
  console.log(kortlek)
  document.getElementById('startone').style.display = "none";
  document.getElementById(`gameover`).innerText = "";
} }

function reset() {
  if (tries === 0) {
    document.getElementById(`gameover`).innerText = "Go agien";
    kortlek = []; 
    
    tries = 5; 
    document.getElementById('startone').style.display = "inline"; 
    document.getElementById('gameover').style.display = "block"; 
    document.getElementById('card-container').innerHTML = ''; 
    document.getElementById(`score`).innerText = `Score: ${score}`;
    document.getElementById(`tryes`).innerText = `Tryes: ${tries}`;
    document.getElementById(`cardsleft`).innerText = `Cards Left: 0`;
  }
}

function compare(userPick) {
if (tries > 0) {
  console.log(userPick)
  card = getCard()
   if (card.value === showcard.value) {
    comapared = "same"
    console.log("Card 1:", card);
  console.log("showcard", showcard);
  } else if (card.value < showcard.value) {
    comapared = "lower"
    console.log("Card 1:", card);
  console.log("showcard", showcard);
  } else if (card.value > showcard.value) {
    comapared = "higher"
    console.log("Card 1:", card);
  console.log("showcard", showcard);
  }
  if (comapared === userPick) {
    console.log("win")
    score +=1
  } else {
  tries -= 1
  console.log("wrong")}
  showcard = card
  showValue();
  reset();
  }
}





// spara i en arr varje kort
// byta ut consol log win // wrong

