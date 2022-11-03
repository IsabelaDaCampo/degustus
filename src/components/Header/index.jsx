import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import { ItemContent } from './style';

const width = Dimensions.get('screen').width;

export default function Header({asset}) {
  return (
    // <View>
      <Image 
        source={asset === 'beer' ?  
          require('../../../assets/degustus/beer_header.png') :
          require('../../../assets/degustus/gourmet_header.png')}
        style={estilos.topo}
        // resizeMode='contain'
      />
    // </View>
  );
};

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});