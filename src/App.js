import React, { Component } from "react";
import Card from "./Card";
import Radium from "radium";

class App extends Component {
  state = {
    cards: [
      { id: 1, packNum: "1" },
      { id: 2, packNum: "2" },
      { id: 3, packNum: "3" },
      { id: 4, packNum: "4" },
      { id: 5, packNum: "5" },
      { id: 6, packNum: "6" }
    ],
    showCards: false
  };

  deleteCardHandler = cardIndex => {
    const cards = [...this.state.cards];
    cards.splice(cardIndex, 1);
    this.setState({ cards: cards });
  };

  changeCardsHandler = () => {
    const changedCards = [...this.state.cards];
    //Alter slot 0 for rares.
    changedCards[0] = Math.floor(Math.random() * Math.floor(5));
  };

  render() {
    let cards = null;

    cards = (
      <div>
        {this.state.cards.map((card, index) => {
          return (
            <Card
              click={() => this.deleteCardHandler(index)}
              imgId={card.id}
              key={card.id}
            />
          );
        })}
      </div>
    );

    return <div>{cards}</div>;
  }
}

export default App;
