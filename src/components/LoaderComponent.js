import {View, Modal, StyleSheet} from 'react-native';
import React from 'react';
import {MaterialIndicator} from 'react-native-indicators';

const LoaderComponent = props => {
  const {isLoading, size, color} = props;

  return (
    <View style={{}}>
      <Modal
        style={styles.ModalContainer}
        presentationStyle="overFullScreen"
        animationType="fade"
        transparent={true}
        visible={isLoading ?? false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:22
            
          }}>
          <View>
            <MaterialIndicator color={color} size={size} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  ModalContainer: {
    backgroundColor: "#000",
    flex: 1,
  },
});
export default LoaderComponent;
