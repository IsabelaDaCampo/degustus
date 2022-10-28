import React from 'react';
import { View, Text, Image } from 'react-native';

import { ItemContent } from './style';

export default function Header() {
  return (
    <ItemContent>
      <Image 
        source={require('../../../assets/degustus/beer.png')} 
        style= {{flex:1, width: undefined, height: undefined}}
        resizeMode='contain'
      />
    </ItemContent>
  );
};