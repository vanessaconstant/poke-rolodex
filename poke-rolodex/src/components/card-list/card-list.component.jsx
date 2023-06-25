import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css"

class CardList extends Component{
    render(){

        const {pokemonlist} = this.props
        
        

        return(
            
            <div className="card-list">
                {
                    pokemonlist.map((pokemon) =>{
                        return <Card name={pokemon.name} index={pokemonlist.indexOf(pokemon)}/>
                    } )
                }
                 
            </div>
        )
    }
}

export default CardList;