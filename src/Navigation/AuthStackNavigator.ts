import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import AppHeaderMain from '../Components/Shared/AppHeader/AppHeaderMain';
import HomeScreen from '../Screens/Home/HomeScreen';

const AuthStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: AppHeaderMain,
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

export default createAppContainer(AuthStackNavigator);
