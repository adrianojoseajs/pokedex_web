import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Container, Logo, Navbar, Navlist, Listnum, Search, Input, Button, Row, Image, Name, Type, Link, Text, View} from '../../Home/styles';
import Card from "../../../components/Card";

const Pikachu = () => {
    const [texto, setTexto] = useState('')
    const [color, setColor] = useState('')
  
    return (

    <Container>

      <Header
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