import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import { Card, Item, CardHeader, CardFooter, CardButtons, ViewButtons, ButtonCard } from './style';
import InputText from "../InputText/InputText";

export default function ListItem({ id, nome, descricao, valor, quantity, handleSetQuantity }) {
  const [ quantityProduct, setQuantityProduct ] = useState(quantity === undefined ? 0 : quantity);

  const updateTotalQuantity = (newQuantity) => {
    setQuantityProduct(newQuantity);
    console.log('id:', id, 'quantity:', newQuantity);
    handleSetQuantity(id, newQuantity);
  }

  return (
    <View style={{marginVertical: 20}}>
      <Item>
        <Card>
          <CardHeader>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{nome} - {id}</Text>
            <Text style={{color: '#2b2b2b'}}>{descricao}</Text>
            <CardFooter>
              <Text style={{fontSize: 18, color:'#b3b300', fontWeight: 'bold'}}>R${valor}</Text>
            </CardFooter>
          </CardHeader>
        </Card>
        <CardButtons>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{justifyContent: 'space-around', alignItems: 'center', width: '50%'}}>
              <InputText valueQtd={quantityProduct} action={updateTotalQuantity} />
            </View>
          </View>
        </CardButtons>
      </Item>
    </View>
  );
}