import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
// import Pikachu from "../../Pokemon/Pikachu";
import { useNavigate } from 'react-router-dom'

import {
    Container,
    Logo,
    Divbtn,
    Imagemlupa,
    Navbar,
    Navlist,
    Listnum,
    Search,
    Input,
    Buttonsearch,
    Buttonmais,
    Cards,
    Row,
    Image,
    Name,
    Type,
    Text,
    View,
    A,
    Topo,
} from './styles';
import axios from "axios";



const Home = () => {

    const navigate = useNavigate()

    const [text, setText] = useState('')
    const [listaPokemon, setListaPokemon] = useState([])
    const [types, setTypes] = useState('')

    const api = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon/'
    })

    useEffect(() => {
        const handleStart = async () => {
            const { data: { results } } = await api.get('')
            setListaPokemon(results)
            const fn = (lista) => {
                const promessas = lista.map(async ({ name }) => {
                    const { data } = await api.get(name)
                    return data.types
                })
                return Promise.all(promessas)
            }
            const a = fn(results)
            console.log(a)
        }
        handleStart()
    }, [])

    return (

        <Container>
            <Topo>
                <Logo src="https://i.ibb.co/Bfscpgw/pokemon-logo.png" />
                <Search>
                    <Input value={text} onChange={({ currentTarget: { value } }) => setText(value)} />
                    <Divbtn>
                        <Buttonsearch onClick={() => null}>Buscar</Buttonsearch>
                    </Divbtn>
                </Search>
            </Topo>

            <View
            />

            <Row>
                {listaPokemon.map(({ name }) => {
                    return (
                        <Card
                            name={name}
                        />
                    )
                })}
            </Row>

            <Footer

            />

        </Container>
    );
}

export default Home