import React, { useState, useEffect } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { IpInput } from './style';
import colors from '../../helpers/colors';

export default function Settings({ navigation }) {
  const [ serverIp, setServerIp ] = useState('');
  const { getItem, setItem } = useAsyncStorage('configuration');

  useEffect(() => {
    const dataSession = async () => { 
      const result = JSON.parse(await getItem());
      result !== null ? setServerIp(result.serverIp.replace(/(^\w+:|^)\/\//, '').split(':')[0]) : setServerIp('');
    }
    
    dataSession();
  }, []);

  const updateData = async () => {
    const oldData = JSON.parse(await getItem());
    const newData = {
      ...oldData,
      serverIp: `http://${serverIp}:8080`
    };

    AsyncStorage.setItem('configuration', JSON.stringify(newData));
  }

  const saveIp = async () => {
    try {
      if (serverIp === null)
        Alert.alert('Atenção!', 'Por favor, digite um número de IP válido.');
      else {
        updateData();
        Alert.alert('Uhuull!!!!', 'IP salvo com sucesso!');
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('erro ip', error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Configurações</Text>
      </View>
      <View>
        <Text style={{ fontSize: 16, marginHorizontal: 10 }}>IP do servidor</Text>
        <IpInput
          value={serverIp}
          onChangeText={setServerIp}
          placeholder='Ex: 192.168.0.10'
          keyboardType='numeric'
        />
      </View>
      <Button title='SALVAR' color={colors.primary} onPress={saveIp}/>
      <View style={{marginVertical: 5}} />
      <Button title="voltar" color={colors.black} onPress={() => navigation.goBack()} />
    </View>
  );
};