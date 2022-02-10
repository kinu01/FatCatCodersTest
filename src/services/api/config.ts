import axios from 'axios';

const API_ENV = {
  baseURL: 'https://api.spacexdata.com/v4/',
  timeout: 9000,
};

export default axios.create(API_ENV);
