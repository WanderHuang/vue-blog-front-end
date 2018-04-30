import {backend} from '../config'
import axios from 'axios'
export default {
  login ({state, commit}, payload) {
    return axios.get('/server/login/checkUser', {
      baseURL: backend.base,
      params: payload
    }).catch((err) => { console.log(err) })
  }
}
