import {StyleSheet, TextInput, View} from 'react-native';
import AppColor from '../theme/AppColors';

const SerachComponent = ({onChangeText}) => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={AppColor.black}
        onChangeText={onChangeText}
        style={Styles.container}
        clearButtonMode='always'
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    paddingHorizontal: 18,
    backgroundColor: AppColor.lightGray,
    margin: 20,
    fontWeight: '700',
  },
});

export default SerachComponent;
