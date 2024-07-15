import {
  FETCH_LIST_OF_USERS_REQUEST,
  FETCH_LIST_OF_USERS_SUCCESS,
  FETCH_LIST_OF_USERS_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './UserActionTypes';

const initialState = {
  listOfUsersLoading: false,
  listOfUsers: [],
  listOfUsersError: '',
  user: {},
  userLoading: false,
  userError: '',
};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_OF_USERS_REQUEST:
      return {
        ...state,
        listOfUsers: [],
        listOfUsersError: null,
        listOfUsersLoading: true,
      };

    case FETCH_LIST_OF_USERS_SUCCESS:
      return {
        ...state,
        listOfUsers: action.payload,
        listOfUsersError: null,
        listOfUsersLoading: false,
      };

    case FETCH_LIST_OF_USERS_FAILURE:
      return {
        ...state,
        listOfUsers: [],
        listOfUsersError: action.payload,
        listOfUsersLoading: false,
      };

    case FETCH_USER_REQUEST:
      return {
        ...state,
        user: null,
        userError: null,
        userLoading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userError: null,
        userLoading: false,
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        user: {},
        userError: action.payload,
        userLoading: false,
      };

    default:
      return state;
  }
};
