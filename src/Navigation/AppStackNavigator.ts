import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import ForgetPasswordScreen from '../Screens/ForgetPasswordScreen/ForgetPasswordScreen';
import AppHeader from '../Components/Shared/AppHeader/AppHeader';
import AppHeaderTransparent from '../Components/Shared/AppHeader/AppHeaderTransparent';

const AppStackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgetPassword: {
      screen: ForgetPasswordScreen,
      navigationOptions: {
        header: AppHeader,
      },
    },
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppStackNavigator);
