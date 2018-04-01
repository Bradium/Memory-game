function createPlayingField() {
    let cards = {
        cardPathArr : [],
        cardForRendArr : [],
        path : "imgs/Cards/"
    };

    for(let i = 1; i < 21; i++) {
        if(i < 11) {
            cards.cardPathArr.push(cards.path + i + ".svg");
        } else {
            cards.cardPathArr.push(cards.path + (i-10) + ".svg");
        }
    }

    for(let i = 0; i < 20; i++ ) {
        let num = Math.floor(Math.random() * cards.cardPathArr.length);
        let styleObj = {
            backgroundImage : "url('" + cards.cardPathArr.splice(num,1) + "')",
        };
        cards.cardForRendArr.push(<div className="card" style={styleObj} key={i}/>);
    }


    class CardField extends React.Component {
        render() {
            return (
                <div>
                    {cards.cardForRendArr}
                </div>
            )
        }
    }

    const placeWeWantToPutComponent = document.querySelector('.playing-field-container');
    ReactDOM.render(<CardField />, placeWeWantToPutComponent);
}

