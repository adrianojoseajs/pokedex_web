import React, { useState } from "react";
import Topo from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
// import Pikachu from "../../Pokemon/Pikachu";

import { 
    Container, 
    Logo, 
    Navbar, 
    Navlist, 
    Listnum, 
    Search, 
    Input, 
    Button, 
    Cards, 
    Row, 
    Image, 
    Name, 
    Type,
    Text,
    View,
    A,
} from './styles';



const Home = () => {
    const [texto, setTexto] = useState('')
    const [color, setColor] = useState('')
  
    return (

      <Container>
        <Topo
        />

        <View
        />

          <Row>

            <Card
                imageUrl='https://i.ibb.co/pr7FrLL/pikachu-img.jpg'
                name='Pikachu'
                type='Elétrico'
            />

            <Card
                imageUrl='https://i.ibb.co/xsFqqj5/charmander-img.jpg'
                name='Charmander'
                type='Fogo'
            />
  
            <Card
                imageUrl='https://i.ibb.co/1LTLZ5T/poliwrath-img.jpg'
                name='Poliwrath'
                type='Água'
            />

            <Card
                imageUrl='https://i.ibb.co/93NK2j9/Voltorb-img.jpg'
                name='Voltorb'
                type='Eletrico'
            />

            <Card
                imageUrl='https://i.ibb.co/Qmt31D2/ditto-img.jpg'
                name='Ditto'
                type='Normal'
            />

            <Card
                imageUrl='https://i.ibb.co/6XMxHpd/mewtwo-img.jpg'
                name='Mewthow'
                type='Pisíquico'
            />

            <Card
                imageUrl='https://i.ibb.co/SJG7fWS/seel-img.jpg'
                name='Seel'
                type='Água'
            />

            <Card
                imageUrl='https://i.ibb.co/zNSjTkb/totodile-img.jpg'
                name='Totodile'
                type='Água'
            />

            <Card
                imageUrl='https://i.ibb.co/tZQYbB3/bayleef-img.jpg'
                name='Bayleef'
                type='Selva'
            />
  
            </Row>

        <Footer
            
        />

      </Container>
    );
}

export default Home