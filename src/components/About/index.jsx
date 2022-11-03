import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


import { TypeContent, TypeText, AddressView, AdressText, Separator } from './style';
import colors from '../../helpers/colors';

export default function Header({ iconType, type, address }) {
  return (
    <View>
      <TypeContent>
          <View style={{ justifyContent: 'center'}}>
              <Ionicons name={ iconType } size={24} color={colors.primary} />
          </View>
          <TypeText>{ type }</TypeText>
      </TypeContent>
      <AddressView>
        <View style={{ justifyContent: 'center'}}>
          <Ionicons name="location-outline" size={24} color={colors.black}/>
        </View>
        <AdressText>{ address }</AdressText>
      </AddressView>
      <Separator />
    </View>
  );
};