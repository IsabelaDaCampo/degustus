import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert } from 'react-native';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';
import About from '../../components/About';
import ListItem from '../../components/ListItem';
import { fetchData } from '../../services/api';
import FloatingButton from '../../components/FloatingButton';

export default function Beer() {
  const { getItem, setItem } = useAsyncStorage('order');
  const [listProducts, setListProducts] = useState([]);
  const [listProductsSend, setListProductsSend] = useState([]);

  useEffect(() => {
    const data = async () => {
      await getProducts();
      await getDataStorage();
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

  const handleSetQuantity = async (id, quantity) => {
    console.log('beer')
    
    let newObject = {
      itemId: id,
      quantidade: quantity,
      comandaId: null
    };
    console.log('newObject', newObject);
    await setItem(JSON.stringify(newObject));
    await getDataStorage();
  }

  const getDataStorage = async () => {
    try {
      const storedData = JSON.parse(await getItem());
      console.log('storedData', storedData)
      if (storedData === null) {
        let data = {
          comandaId: null,
	        itemId: null,
	        quantidade: null
        };
        setListProductsSend(data);
        await AsyncStorage.setItem('order', JSON.stringify(data));
      } else {
        return setListProductsSend(storedData);
      }
    } catch (e) {
      return Alert.alert('', 'Não foi possível acessar os dados salvos na memória.')
    }
  }

  const renderItem = ({ item }) => {
    return (
      <ListItem 
        id={item.id}
        nome={item.nome}
        descricao={item.descricao}
        valor={item.valor}
        quantity={item.quantity}
        handleSetQuantity={handleSetQuantity}
      />
    );
  }

  return (
    <View>
      <Header asset={'gourmet'} />
      <About iconType={'restaurant-outline'} type={'Cozinha Gourmet'} address={'Av. Nereu Ramos, 3777D - Seminário'} />
      <FlatList 
        data={listProducts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <FloatingButton />
    </View>
  );
};
