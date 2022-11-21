import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert } from 'react-native';

import Header from '../../components/Header';
import About from '../../components/About';
import ListItem from '../../components/ListItem';
import { fetchData } from '../../services/api';

export default function Beer() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const data = async () => {
      await getProducts();
    }

    data();
  }, []);

  const getProducts = async () => {
    await fetchData('products').then(res => {
      if (res !== undefined){
        const beer = res.filter(item => item.empresaId === 2);
        setListProducts(beer);
      }
      else
        Alert.alert('Oops!', 'Não foi possível carregar os produtos.');
    }).catch(err => {
      Alert.alert('Atenção!', 'Verifique se tem conexão com a internet.');
    });
  }

  return (
    <View style={{flex: 1}}>
      <View>
        <Header asset={'beer'}/>
        <About iconType={'beer-outline'} type={'Bar e Lanchonete'} address={'Shopping Pátio Chapecó'} />
      </View>
      <FlatList 
        data={listProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListItem {...item} />}
      />
    </View>
  );
};
