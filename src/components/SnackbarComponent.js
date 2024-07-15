import Snackbar from 'react-native-snackbar';
import AppColors from '../theme/AppColors';

export const showErrorSnackbar = message => {
  return Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: AppColors.red,
  });
};
