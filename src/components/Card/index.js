import React from "react";
import { 
    Cards, 
    Image, 
    Name, 
    Type,
    A,
    Buttonmais
} from "./styles";

const Card = ({imageUrl, name, type, onClickAction }) => {
    return(
        <Cards>
                <Image src={imageUrl}/>
                <Name>{name}</Name>
                <Type>{type}</Type>
                <Buttonmais title="Go" onClick={onClickAction}>Mais</Buttonmais>
        </Cards>
    )
}
export default Card