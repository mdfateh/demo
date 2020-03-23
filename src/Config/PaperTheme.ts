import {DefaultTheme, configureFonts} from 'react-native-paper';
import AppTheme from './AppTheme';
import {Platform} from 'react-native';

const fontConfig: any = {
  ios: {
    regular: {
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
      fontWeight: '500',
    },
    light: {
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Light',
      fontWeight: '200',
    },
    thin: {
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Thin',
      fontWeight: '100',
    },
  },
  android: {
    regular: {
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
      fontWeight: '500',
    },
    light: {
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Light',
      fontWeight: '200',
    },
    thin: {
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Thin',
      fontWeight: '100',
    },
  },
};

const PaperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: AppTheme.color.primary,
    error: AppTheme.color.danger,
  },
  fonts: configureFonts(fontConfig),
};

export default PaperTheme;
