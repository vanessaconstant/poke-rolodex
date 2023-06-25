import { Component } from "react";


class Card extends Component{

    render(){
        const {name, index} = this.props
        return (
             
            <div className="card-container">
                <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                width="180" height="180" alt="pokemon" />
                <h2>{name}</h2>
                
            
            </div>

        )
    }
}

export default Card;