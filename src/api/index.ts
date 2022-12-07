import axios, {AxiosRequestConfig} from 'axios';
// import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
  baseURL: 'http://whizzkart.in/',
  responseType: 'json',
});

// Set the AUTH token for any request
api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  // const token = await AsyncStorage.getItem('Token');
  const token = '';
  if (config.headers) {
    config.headers['Authorization'] = token ? `Bearer ${token}` : '';
  }

  //  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  //  config.headers.Authorization = `Bearer Ugg9fsE9490nydZIFYtFQYgUBMZ0U0HlAaLvzuHZ`;
  return config;
});
