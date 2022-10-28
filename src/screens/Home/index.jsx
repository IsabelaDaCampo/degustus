import React from 'react';
import { Image, Text } from 'react-native';

import { Content, ButtonCard, ButtonArea, ButtonText, ContainerOption } from './style';

export default function Home({ navigation }) {
  const goTo = (data) => {
    navigation.navigate(data);
  };

  return (
    <Content>
      <ButtonArea>
        <ButtonCard onPress={() => goTo('Beer')}>
          <ContainerOption color={'beer'}>
            <Image source={require('../../../assets/degustus/beer.png')}  />
            <ButtonText>Degustus Beer</ButtonText>
          </ContainerOption>
        </ButtonCard>
        <ButtonCard onPress={() => goTo('Gourmet')} >
          <ContainerOption color={'gourmet'}>
            <Image source={require('../../../assets/degustus/gourmet.png')}  />
            <ButtonText>Degustus Gourmet</ButtonText>
          </ContainerOption>
        </ButtonCard>
      </ButtonArea>
    </Content>
  );
};