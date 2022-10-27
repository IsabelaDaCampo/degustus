import React from 'react';
import { Image, Text } from 'react-native';

import { Content, ButtonCard, ButtonArea, ButtonText, ContainerOption } from './style';

const goTo = (teste) => {
  console.log('goTo');

};


export default function Home({ navigation }) {
  return (
    <Content>
      <ButtonArea>
        <ButtonCard onPress={() => goTo('InventoryScreen')}>
          <ContainerOption color={'beer'}>
            <Image source={require('../../../assets/degustus/beer.png')}  />
            <ButtonText>Degustus Beer</ButtonText>
          </ContainerOption>
        </ButtonCard>
        <ButtonCard onPress={() => goTo('StockAdjustmentScreen')} >
          <ContainerOption color={'gourmet'}>
            <Image source={require('../../../assets/degustus/gourmet.png')}  />
            <ButtonText>Degustus Gourmet</ButtonText>
          </ContainerOption>
        </ButtonCard>
      </ButtonArea>
    </Content>
  );
};