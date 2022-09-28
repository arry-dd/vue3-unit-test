import axios from 'axios';

export function getList() {
  return axios.get('https://www.test.com/getlist');
}