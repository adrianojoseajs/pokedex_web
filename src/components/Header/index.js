import React, { useState } from "react";
import {
  Topo, 
  Logo, 
  Search, 
  Input, 
  Button, 
  navigation
} from "../../pages/Home/styles";

const Header = () => {
  const [texto, setTexto] = useState('')
  
    return(
        <Topo>
          <Logo src="https://i.ibb.co/Bfscpgw/pokemon-logo.png"/>
            <Search>
              <Input/>
                <Button>Buscar</Button>
                {/* onPress={() => navigation.push('index.js')} */}
            </Search>
        </Topo>
    )
}

export default Header