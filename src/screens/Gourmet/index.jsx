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
        const beer = res.filter(item => item.empresaId === 1);
        setListProducts(beer);
      }
      else
        Alert.alert('Oops!', 'Não foi possível carregar os produtos.');
    }).catch(err => {
      Alert.alert('Atenção!', 'Verifique se tem conexão com a internet.');
    });
  }

  return (
    <View>
      <Header asset={'gourmet'} />
      <About iconType={'restaurant-outline'} type={'Cozinha Gourmet'} address={'Av. Nereu Ramos, 3777D - Seminário'} />
      <FlatList 
        data={listProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListItem {...item} />}
      />
    </View>
  );
};
