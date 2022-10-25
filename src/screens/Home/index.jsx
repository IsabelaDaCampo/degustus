import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>teste</Text>
      <Button
        title="Go to Profile"
        onPress={() => console.log('cliquei')}
        color="red"
      />
    </View>
  );
};