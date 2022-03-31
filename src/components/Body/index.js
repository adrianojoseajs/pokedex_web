import React from "react";
import { 
    Imgpokemon,
    Nome,
    Tipo,
    Altura,
    Peso,
    Corpo,
    View,
} from "./styles";

const Body = ({imgpoke, name, type, height, weight}) => {
    return(
        <Corpo>
            <Imgpokemon src={imgpoke}/>
            <View>
                <Nome>{name}</Nome>
                <Tipo>{type}</Tipo>
                <Altura>{height}</Altura>
                <Peso>{weight}</Peso>
            </View>
            
        </Corpo>
    )
}
export default Body