import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Dimensions, View} from 'react-native';
import images from '../../../Assets';
import scaler from '../../../Utilities/scaler';
import {Text} from 'react-native-paper';
import PaperTheme from '../../../Config/PaperTheme';
import AppTheme from '../../../Config/AppTheme';
import {Center} from '../../../UIKIT/dist';

function TabBarIcon({focused, navigation}: any) {
  const {routeName} = navigation.state;
  const {t} = useTranslation();
  let iconName;
  let label;
  let color;
  if (routeName === 'TempWorker') {
    iconName = focused ? images.tempWorkersActive : images.tempWorkersInactive;
    label = t('tempWorkers');
    color = focused ? AppTheme.color.primary : AppTheme.color.overlay;
  }
  if (routeName === 'JobSelection') {
    iconName = focused
      ? images.jobSelectionActive
      : images.jobSelectionInactive;
    label = t('jobSelection');
    color = focused ? AppTheme.color.primary : AppTheme.color.overlay;
  }
  if (routeName === 'JobReport') {
    iconName = focused ? images.jobReportActive : images.jobReportInactive;
    label = t('jobReport');
    color = focused ? AppTheme.color.primary : AppTheme.color.overlay;
  }
  return (
    <View style={{width: Dimensions.get('screen').width / 3}}>
      <Center>
        <Image
          resizeMode={'contain'}
          style={{height: scaler(50)}}
          source={iconName}
        />
        <Text
          style={{
            ...PaperTheme.fonts.medium,
            color,
            fontSize: scaler(18),
          }}>
          {label}
        </Text>
      </Center>
    </View>
  );
}

export default TabBarIcon;
