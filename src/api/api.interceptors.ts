import axios from 'axios'

import { errorCatch, getContentType } from './api.helpers'
import {getAccessToken, removeTokensStorage} from "@/src/services/auth/auth.helper";
import {AuthService} from "@/src/services/auth/auth.service";
import {IS_PRODUCTION} from "@/src/config/constants";
import {API_SERVER_URL, API_URL} from "@/src/config/api.config";

 const instance = axios.create({
    baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,

})




export default instance
