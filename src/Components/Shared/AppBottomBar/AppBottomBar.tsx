import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import DemoScreen1 from '../../../Screens/TempWorkerScreen/TempWorkerScreen';
import DemoScreen2 from '../../../Screens/Demo2/DemoScreen2';
import DemoScreen3 from '../../../Screens/JobReportScreen/JobReportScreen';
import AppTheme from '../../../Config/AppTheme';
import {createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, Text, View} from 'react-native';
import images from '../../../Assets';
import scaler from '../../../Utilities/scaler';
import {Icon} from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
import JobSelectionScreen from '../../../Screens/JobSelectionScreen/JobSelectionScreen';
import {useTranslation} from 'react-i18next';

const [t] = useTranslation();
const AppBottomBar = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: DemoScreen1,
      navigationOptions: {
        tabBarLabel: t('tempWorkers'),
        tabBarColor: AppTheme.color.primary,
      },
    },
    JobSelection: {
      screen: JobSelectionScreen,
      navigationOptions: {tabBarLabel: t('jobSelection')},
    },
    JobReport: {
      screen: DemoScreen3,
      navigationOptions: {tabBarLabel: t('jobReport')},
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}: any) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused
            ? images.tempWorkersActive
            : images.tempWorkersInactive;
        }
        if (routeName === 'JobSelection') {
          iconName = focused
            ? images.jobSelectionActive
            : images.jobSelectionInactive;
        }
        if (routeName === 'JobReport') {
          iconName = focused
            ? images.jobReportActive
            : images.jobReportInactive;
        }
        return (
          <Image
            resizeMode={'contain'}
            style={{height: scaler(50)}}
            source={iconName}
          />
        );
      },
      // tabBarLabel: ({focused}: any) => {
      //   const {routeName} = navigation.state;
      //   switch (routeName) {
      //     case 'Home':
      //       return focused ? (
      //         <Text style={{color: AppTheme.color.primary}}>{routeName}</Text>
      //       ) : (
      //         <Text>{routeName}</Text>
      //       );
      //       break;
      //     default:
      //       return null;
      //       break;
      //   }
      // },
    }),
    sceneAnimationEnabled: true,
    barStyleLight: {backgroundColor: AppTheme.color.white},
  },
);

export default createAppContainer(AppBottomBar);
