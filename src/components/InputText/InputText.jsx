import React from 'react';

import { InputCard } from './style';

export default function InputText({ valueQtd, action }){
  const updateValue = (newValue, action) => {
    const number = newValue;
    if(!number) return;
    action(number);
  }
  
  const numberInString = String(valueQtd);
  
  return (
    <InputCard 
      keyboardType="numeric"
      selectTextOnFocus
      placeholder="Qtd"
      value={numberInString}
      onChangeText={(newValue) => updateValue(newValue, action)}
      textAlign="center"
    />
  );
}