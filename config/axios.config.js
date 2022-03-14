import axios from 'axios';
import { ts } from './consts';
import { publicKey } from './consts';
import { privateKey } from './consts';
const md5 = require('md5');

const API = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        "apikey": publicKey,
        "ts": Number(ts),
        "hash": md5(ts+privateKey+publicKey)
    }
})

export default API;
