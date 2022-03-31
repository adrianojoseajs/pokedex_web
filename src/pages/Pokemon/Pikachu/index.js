import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Card from "../../../components/Card";
import Body from "../../../components/Body";
import { Container, Logo, Navbar, Navlist, Listnum, Search, Input, Button, Row, Image, Name, Type, Link, Text, View} from '../../Home/styles';

const Pikachu = () => {
    const [texto, setTexto] = useState('')
    const [color, setColor] = useState('')
  
    return (
    <Container>

      <Header
      />

        <Row>
              <Body
                  imgpoke='https://i.ibb.co/pr7FrLL/pikachu-img.jpg'
                  name='Pikachu'
                  type='Elétrico'
                  height='1.1cm'
                  weight='5kg'
              />
        </Row>

      <Footer
      />

    </Container>
    );
}

export default Pikachu