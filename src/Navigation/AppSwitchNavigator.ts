import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AppStackNavigator from './AppStackNavigator';
import LoadingScreen from '../Screens/LoadingScreen/LoadingScreen';
import AuthStackNavigator from './AuthStackNavigator';

const AppSwitchNavigator = createSwitchNavigator(
  {
    AppStack: AppStackNavigator,
    AppTabStack: AuthStackNavigator,
    Loading: LoadingScreen,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default createAppContainer(AppSwitchNavigator);
