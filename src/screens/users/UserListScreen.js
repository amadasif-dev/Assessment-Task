import {useCallback, useEffect, useState} from 'react';
import React, {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import SearchComponent from '../../components/SearchComponent';
import {useDispatch, useSelector} from 'react-redux';
import {fetchListOfUsersAsync, searchUserAsync} from '../../redux/UserActions';
import LoaderComponent from '../../components/LoaderComponent';
import {AppString} from '../../constants/AppStrings';
import UserModalComponent from './components/UserModalComponent';
import AppColors from '../../theme/AppColors';

const UserListScreen = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [username, setUsername] = useState();
  const [searchText, setSearchText] = useState('');
  var timeoutId;
  const {
    listOfUsers,
    listOfUsersLoading,
    listOfUsersError,
    searchedUser,
    searchedUserLoading,
  } = useSelector(state => state.userReducer);

  useEffect(() => {
    fetchListOfUsers();
  }, [fetchListOfUsers]);

  const fetchListOfUsers = useCallback(() => {
    try {
      dispatch(fetchListOfUsersAsync());
    } catch (error) {
      console.log('Error during API:', error);
    }
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closemodal = () => {
    setIsModalVisible(false);
  };

  const handleItemTap = username => {
    setUsername(username);
    showModal();
  };

  const handleModalClose = () => {
    closemodal();
    setUsername();
  };

  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity onPress={() => handleItemTap(item?.login)}>
          <View style={Styles.container}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{uri: item.avatar_url}}
                style={Styles.imageStyle}
              />
              <View style={{flex: 1}}>
                <Text style={Styles.textTitleStyle}>
                  {AppString.Name} {item.login}
                </Text>
                <Text
                  style={[Styles.textTitleStyle, {paddingHorizontal: 12}]}
                  numberOfLines={2}>
                  {AppString.gitHubId} {item.url}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [isModalVisible],
  );

  return (
    <View>
      <Text style={Styles.textStyle}>{AppString.userList}</Text>
      <SearchComponent
        onChangeText={val => {
          clearTimeout(timeoutId);
          setSearchText(val);
          if (val) {
            timeoutId = setTimeout(() => {
              dispatch(searchUserAsync(val));
            }, 1000);
          }
        }}
      />
      <FlatList
        data={searchText === '' ? listOfUsers : searchedUser}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: 56,
        }}
        keyExtractor={item => item?.id}
      />
      <UserModalComponent
        isVisible={isModalVisible}
        onClose={handleModalClose}
        username={username}
      />
      {listOfUsersError && <Text>{listOfUsersError}</Text>}
      <LoaderComponent
        isLoading={listOfUsersLoading || searchedUserLoading}
        color={AppColors.lightGray}
        size={45}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  textStyle: {
    color: AppColors.black,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 24,
    textDecorationLine: 'underline',
    letterSpacing: 2,
    lineHeight: 30,
  },
  container: {
    backgroundColor: AppColors.lightGray,
    borderRadius: 15,
    paddingHorizontal: 8,
    marginTop: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    shadowColor: AppColors.dark,
    shadowOpacity: 1,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },
  textTitleStyle: {
    color: AppColors.lightDark,
    fontSize: 15,
    paddingHorizontal: 10,
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 40 / 2,
  },
});
export default UserListScreen;
