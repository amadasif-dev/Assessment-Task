import axios from 'axios';
import ApiConstants from '../constants/ApiConstants';

export const axiosAgent = axios.create({
  baseURL: ApiConstants.baseUrl,
  timeout: 1000,
  headers: {
    Authorization: 'Bearer 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',
  },
});
