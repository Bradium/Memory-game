class StartButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            class: "ready",
            label: "Начать игру!"
        };

        this.press = this.press.bind(this);
    }

    press() {
        let className = (this.state.class === "ready") ? "in-game" : "ready";
        let label = (this.state.label === "Начать игру!") ? "Остановить!" : "Начать игру!";
        this.setState({class: className});
        this.setState({label: label});
        if (className === "in-game") {
            createPlayingField();
            let cards = document.querySelectorAll(".card");
            for (let i = 0; i < cards.length; i++) {
                cards[i].addEventListener("click", chooseCard);
            }
            setTimeout(hideCards, 5000);
        } else if(className === "ready") {
            showCards();
        }
    }

    render() {
        return (<div onClick={this.press} className={this.state.class}>
            <span>{this.state.label}</span>
        </div>);
    }
}

ReactDOM.render(<StartButton />, document.querySelector('.start-button-container'));