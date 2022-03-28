import React from "react";
import { 
    Cards, 
    Image, 
    Name, 
    Type,
    A,
    Button
} from "../../pages/Home/styles";

const Card = ({imageUrl, name, type }) => {
    return(
        <Cards>
                {/* href="../pages/Pokemon/Pikachu/index.js" */}
                <Image src={imageUrl}/>
                <Name>{name}</Name>
                <Type>{type}</Type>
                <Button title="Go" onPress={() => navigation.push('Details')}>Mais</Button>
        </Cards>
    )
}
export default Card