import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../helpers/colors';

export default function SettingsButton({onPressFunction = () => {}}){
  return (
    <View style={{flex: 1, width:50, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={onPressFunction}>
        <Ionicons name="settings-outline" size={24} color={colors.white} />
      </TouchableOpacity>
    </View>
  )
}