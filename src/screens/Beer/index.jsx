import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import About from '../../components/About';

export default function Beer() {
  return (
    <View>
      <Header asset={'beer'}/>
      <About iconType={'beer-outline'} type={'Bar e Lanchonete'} address={'aqui um exemplo de endereço'} />
    </View>
  );
};
