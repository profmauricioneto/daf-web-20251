import axios from 'axios';

const application = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default application;
