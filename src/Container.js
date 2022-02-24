import React, {Component} from "react";
import {choice} from './helpers.js'
import Coin from './Coin.js'

class Container extends Component{
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc:"https://media.istockphoto.com/photos/euro-coin-isolated-on-white-picture-id478216245?s=612x612"},
            {side: 'tails', imgSrc:"https://media.istockphoto.com/photos/euro-coins-picture-id454378089?s=612x612"}
        ]
    };
    constructor(props){
        super(props);
        this.state = {
            currCoin:null,
            nFlips: 0,
            nHeads:0,
            nTails:0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            }
        });
    }
    handleClick(e){
        this.flipCoin();
    }
    render(){
        return(
            <div className="Container">
                <h2>Let's flip a coin!</h2>
                <button onClick={this.handleClick}>Flip Me!</button>
                {this.state.currCoin && <Coin info={this.state.currCoin} /> }
                <p>
                    Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "} heads and {this.state.nTails} tails
                </p>
            </div>
        )
    }
}

export default Container;