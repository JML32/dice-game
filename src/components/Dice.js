import React, { Component } from 'react'
import './css-files/Dice.css';
class Dice extends Component {

    render() {

        let { dice } = this.props;

        return (
            <React.Fragment>
                {!dice ? <h1> </h1> :
                    <img src={`http://roll.diceapi.com/images/poorly-drawn/d6/${dice}.png`}
                        alt="something went wrong" />}
            </React.Fragment>
        )
    }
}

export default Dice;
