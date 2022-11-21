import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API_URL = 'http://IP_DEGUSTUS:8080/api/';
const PATHS = {
  products: 'item',
}

const getUrl = async (path) => {
  let data = await AsyncStorage.getItem('configuration').then(e => e);
  let ip = JSON.parse(data).serverIp.replace(/(^\w+:|^)\/\//, '').split(':')[0];
  let url = BASE_API_URL.replace('IP_DEGUSTUS', ip);

  return `${url}${PATHS[path]}`;
}

export async function fetchData(path, method = 'GET', id = '', body = {}) {
  try {
    let url = await getUrl(path);
    url += id;
    console.log(url)
    let response = await fetch(url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: method !== 'GET' ? JSON.stringify(body) : null,
    });
    response = response.json();
    return response;
  } catch(e){
    return ({
      'code': 500,
      'message': 'Erro ao conectar com servidor.',
    })
  }
}