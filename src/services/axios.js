import axios from 'axios';
import ApiConstants from '../constants/ApiConstants';

export const axiosAgent = axios.create({
  baseURL: ApiConstants.baseUrl,
  timeout: 1000,
  headers: {

  },
});
