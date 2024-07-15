import React from 'react';

import {View} from 'react-native';
import UserListScreen from './src/screens/users/UserListScreen';
import AppColor from './src/theme/AppColors';

const App = () => {
  return (
    <View style={{backgroundColor: AppColor.white, flex: 1}}>
      <UserListScreen />
    </View>
  );
};
export default App;
