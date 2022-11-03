import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import About from '../../components/About';

export default function Beer() {
  return (
    <View>
      <Header asset={'gourmet'} />
      <About iconType={'restaurant-outline'} type={'Cozinha Gourmet'} address={'aqui um exemplo de endereço'} />
    </View>
  );
};
