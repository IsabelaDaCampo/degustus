import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Card, CardBody, CardHeader, CardFooter, Selection, ButtonSelection } from './style';

export default function ListItem({ id, nome, descricao, valor, categoria }) {
  return (
    <View style={{marginVertical: 20}}>
     <Card>
      <CardBody>
      <CardHeader>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{nome}</Text>
        <Text style={{color: '#2b2b2b'}}>{descricao}</Text>
        <CardFooter>
        <Text style={{fontSize: 18, color:'#b3b300', fontWeight: 'bold'}}>R${valor}</Text>
      </CardFooter>
      </CardHeader>
      </CardBody>
      
      {/* mais e menos */}
      <Selection>
        <ButtonSelection>
          <Text style={{fontSize: 30}}>+</Text>
        </ButtonSelection>
        
        <ButtonSelection>
          <Text style={{fontSize: 30}}>-</Text>
        </ButtonSelection>
      </Selection>
     </Card>
    </View>
  );
}