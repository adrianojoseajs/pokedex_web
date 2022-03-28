import React, { useState } from "react";
import Topo from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Logo, Topo, Navbar, Navlist, Listnum, Search, Input, Button, Card, Row, Image, Name, Type, Link, Footer, Text, View} from './styles';

const Pikachu = () => {
    const [texto, setTexto] = useState('')
    const [color, setColor] = useState('')
  
    return (

    <Container>

      <Topo
      />

      <Row>

        <Card
            imageUrl='https://i.ibb.co/pr7FrLL/pikachu-img.jpg'
            name='Pikachu'
            type='Elétrico'
        />

      </Row>

      <Footer
      />

    </Container>
    );
}

export default Pikachu