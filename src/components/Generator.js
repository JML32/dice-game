import React, { Component } from 'react'
import Dice from './Dice';
import Results from './Results';
import Status from './Status';
import './css-files/Generator.css';

let dice1 = 0;
let dice2 = 0;
let won = 0, loss = 0, draw = 0, status = '';

class Generator extends Component {
    constructor() {
        super()
        this.state = {
            dice1: 0,
            dice2: 0,
            loading: false,
            won: 0,
            loss: 0,
            draw: 0,
            status: ''
        }
    }

    numberGenerator = () => {
        dice1 = (Math.floor((Math.random() * 6) + 1));
        dice2 = (Math.floor((Math.random() * 6) + 1));
        if (dice1 > dice2) {
            won++;
            status = 'Hurray! You won 🎉';
        }
        else if (dice1 < dice2) {
            loss++;
            status = 'Ah! You lose 😱';
        }
        else if (dice1 === dice2) {
            draw++;
            status = `It's a draw 😑`;
        }
        this.setState({
            dice1,
            dice2,
            loading: true,
            won,
            loss,
            draw,
            status
        })
    }

    clear = () => {
        won = loss = draw = dice1 = dice2 = 0;
        status = '';
        this.setState({
            won,
            loss,
            draw,
            dice1,
            dice2,
            status
        })
    }

    render() {
        let { dice1, dice2, loading, won, loss, draw, status } = this.state;

        return (
            <React.Fragment>
                <div className="game-container">
                    <button onClick={this.numberGenerator}>
                        Click to play</button>
                    <button onClick={this.clear}>Clear</button>
                    {!loading ? <h1>   </h1> :
                        <div>
                            <Dice dice={dice1} />
                            <Dice dice={dice2} />
                        </div>
                    }
                    <Status status={status} />
                    <Results won={won} loss={loss} draw={draw} />
                </div>
            </React.Fragment>
        )
    }
}

export default Generator
