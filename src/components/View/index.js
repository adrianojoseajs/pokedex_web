import React, { useState } from "react";
import {
  Topo, 
  Logo, 
  Search, 
  Input,
  Button, 
  View,
  Text,
} from "../../pages/Home/styles";

const View ({ navigation }) {
    return (
      <View>
        <Text>Va para Pikachu</Text>
        <Button
          title="Buscar"
          onPress={() => navigation.navigate('Pikachu')}
        />
      </View>
    );
}

export default View