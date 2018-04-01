function hideCards() {
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        let hideWall = document.createElement("div");
        hideWall.classList.add("hide-wall");
        cards[i].appendChild(hideWall);
    }
}

function showCards() {
    let cards = document.querySelectorAll(".card");
    let cardsToShow = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.length > 0) {
            cardsToShow.push(cards[i]);
        }
    }
    for (let i = 0; i < cardsToShow.length; i++) {
        cardsToShow[i].removeEventListener("click", chooseCard);
        cardsToShow[i].removeChild(cardsToShow[i].querySelector(".hide-wall"));
    }
}