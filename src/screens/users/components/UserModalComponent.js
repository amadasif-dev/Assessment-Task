// CustomModal.js
import React, {useCallback, useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import AppColor from '../../../theme/AppColors';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserAsync} from '../../../redux/UserActions';
import LoaderComponent from '../../../components/LoaderComponent';
import {AppString} from '../../../constants/AppStrings';

const UserModalComponent = ({isVisible, onClose, username}) => {
  const dispatch = useDispatch();
  const {user, userLoading, userError} = useSelector(
    state => state.userReducer,
  );

  console.log('SpecificUserData', user);

  const fetchData = useCallback(() => {
    dispatch(fetchUserAsync(username));
  });

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, [username, dispatch]);

  const modalContent = () => {
    return (
      <>
        <Image source={{uri: user?.avatar_url}} style={styles.imageStyle} />
        <View style={styles.textBody}>
          <Text style={[styles.txtStyle]}>
            {' '}
            {AppString.Name} {user?.name}
          </Text>
          <Text style={styles.txtStyle}>
            {AppString.followers}: {user?.followers}
          </Text>
          <Text style={styles.txtStyle}>
            {AppString.following}: {user?.following}
          </Text>
          <Text style={styles.txtStyle}>
            {AppString.location}: {user?.location}
          </Text>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderView = () => {
    if (userLoading) {
      return (
        <View style={{padding: 32}}>
          <LoaderComponent
            isLoading={userLoading}
            color={AppColor.primary}
            size={45}
          />
        </View>
      );
    } else if (userError) {
      return <Text>{userError}</Text>;
    } else {
      return modalContent();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      style={{backgroundColor: '#000', flex: 1}}>
      <TouchableOpacity onPress={onClose} style={styles.modalContainer}>
        <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
          {renderView()}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(109, 110, 109, 0.4)',
  },
  modalContent: {
    backgroundColor: AppColor.dark,
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  closeButtonText: {
    color: AppColor.white,
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 40 / 2,
  },
  textBody: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  txtStyle: {
    fontSize: 15,
    marginTop: 5,
  },
});

export default UserModalComponent;
