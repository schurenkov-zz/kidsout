import axios from 'axios';
import store from '../store';

export function getDialogs(){
  return axios.get('../data/data.json')
              .then(result=> {
                console.log(result);
                return result.data;
               })
}
