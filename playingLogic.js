let playingCardsBackground = [];

function chooseCard() {
    if(playingCardsBackground.length === 0) {
        this.classList.toggle("active-card");
        this.removeChild(this.querySelector(".hide-wall"));

        let computedStyle = getComputedStyle(this);
        playingCardsBackground.push(computedStyle.backgroundImage);
    } else if (playingCardsBackground.length === 1) {
        this.classList.toggle("active-card");
        this.removeChild(this.querySelector(".hide-wall"));

        let computedStyle = getComputedStyle(this);
        playingCardsBackground.push(computedStyle.backgroundImage);

        if (playingCardsBackground[0] !== playingCardsBackground[1]) {
            console.log("Wrong!");
            playingCardsBackground.length = 0;
            setTimeout(function() {
                let activeCards = document.querySelectorAll(".active-card");
                for (let i = 0; i < activeCards.length; i++) {
                    let hideWall = document.createElement("div");
                    hideWall.classList.add("hide-wall");

                    activeCards[i].appendChild(hideWall);
                    activeCards[i].classList.toggle("active-card");
                }
                activeCards.length = 0;
            }, 2000);
        } else if (playingCardsBackground[0] === playingCardsBackground[1]) {
            console.log("Right!");
            playingCardsBackground.length = 0;
            let activeCards = document.querySelectorAll(".active-card");
            for (let i = 1; i >= 0; i--) {
                activeCards[i].removeEventListener("click", chooseCard);
                activeCards[i].classList.toggle("active-card");
            }
        }
    }
}

