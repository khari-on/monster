import { Component } from "react";
import Card  from "./card"

class CardList extends Component {

    render(){
        const {filterState}=this.props
        return(
            <div className="card-list">
            {filterState.map((monster)=>{
                return( 
                  <Card key={monster.id} monster={monster} />
                )})}
            </div>
        )
    }
}


export default CardList;