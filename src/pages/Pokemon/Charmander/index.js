import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Container, Logo, Navbar, Navlist, Listnum, Search, Input, Button, Card, Row, Image, Name, Type, Link, Text, View} from '../../Home/styles';

const Charmander = () => {
    const [texto, setTexto] = useState('')
    const [color, setColor] = useState('')
  
    return (

    <Container>

      <Header
      />

      <Row>

        <Card
            imageUrl='https://i.ibb.co/xsFqqj5/charmander-img.jpg'
            name='Charmander'
            type='Fogo'
        />

      </Row>

      <Footer
      />

    </Container>
    );
}

export default Charmander