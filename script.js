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


for (let suit = 1; suit <= 4; suit++) {
  for (let value = 1; value <= 13; value++) {
    kortlek.push({
      value: value,
      suit: suit,
    });
  }
}

function showValue() {
document.getElementById(`card`).innerText = `Card Value: ${showcard.value}`
document.getElementById(`score`).innerText = `Score: ${score}`
document.getElementById(`tryes`).innerText = `Tryes: ${tries}`
document.getElementById(`cardsleft`).innerText = `Cards Left: ${kortlek.length}`
}

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
 showcard = getCard()
  console.log("showcard", showcard);
  showValue();
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
    document.getElementById(`result`).innerText = `win`
  } else {
    document.getElementById(`result`).innerText = `lose`
    tries -= 1
  console.log("wrong")}
  showcard = card
  showValue();
  console.log(tries)}
}



// spara i en arr varje kort
// byta ut consol log win // wrong

