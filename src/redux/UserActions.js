import axios from 'axios';
import {
  FETCH_LIST_OF_USERS_REQUEST,
  FETCH_LIST_OF_USERS_SUCCESS,
  FETCH_LIST_OF_USERS_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
} from './UserActionTypes';
import {axiosAgent} from '../services/axios';
import ApiConstants from '../constants/ApiConstants';
import Snackbar from 'react-native-snackbar';
import AppColors from '../theme/AppColors';
import {showErrorSnackbar} from '../components/SnackbarComponent';

export const fetchListOfUsersAsync = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_LIST_OF_USERS_REQUEST,
      });
      const res = await axiosAgent.get(ApiConstants.users);
      dispatch({
        type: FETCH_LIST_OF_USERS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_LIST_OF_USERS_FAILURE,
        payload: error.message,
      });
      showErrorSnackbar(error.toString());
    }
  };
};

export const fetchUserAsync = userName => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_USER_REQUEST,
      });
      const res = await axiosAgent.get(`${ApiConstants.users}/${userName}`);

      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: error.message,
      });
      showErrorSnackbar(error.toString());
    }
  };
};

export const searchUserAsync = userName => {
  return async dispatch => {
    try {
      dispatch({
        type: SEARCH_USER_REQUEST,
      });
      const res = await axiosAgent.get(`${ApiConstants.users}/${userName}`);
      console.log(res);
      dispatch({
        type: SEARCH_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_USER_FAILURE,
        payload: error.message,
      });
      showErrorSnackbar(error.toString());
    }
  };
};
