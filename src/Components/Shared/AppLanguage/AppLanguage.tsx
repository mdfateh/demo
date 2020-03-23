import React from 'react';
import {Menu, Appbar, Divider} from 'react-native-paper';
import {Image, Text} from 'react-native';
import images from '../../../Assets';
import i18n from '../../../i18n';
import scaler from '../../../Utilities/scaler';
import {Platform} from 'react-native';
import {useActiveTheme} from '../../../UIKIT/dist';
import {useDispatch, useSelector} from 'react-redux';
import {updateAppState} from '../../../Redux/appAction';
import AsyncStorage from '@react-native-community/async-storage';

type propType = {
  visible?: boolean;
  showMenu?: any;
  setLanguage?: any;
  language?: any;
};
function AppLanguage({visible, showMenu}: propType) {
  const Theme = useActiveTheme();
  const dispatch = useDispatch();

  return (
    <Menu
      visible={visible}
      onDismiss={showMenu}
      anchor={
        <Appbar.Action
          size={14}
          color={Theme.color.white}
          icon={images.dropdown}
          onPress={showMenu}></Appbar.Action>
      }>
      <Menu.Item
        onPress={() => {
          i18n.changeLanguage('en');
          dispatch(updateAppState('appLanguage', 'EN'));
          AsyncStorage.setItem('appLanguage', 'EN');
          showMenu();
        }}
        icon={() => (
          <Image
            resizeMode={'contain'}
            style={{height: scaler(50)}}
            source={images.enFlag}
          />
        )}
        title={
          <Text
            style={{
              fontFamily:
                Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
              fontWeight: '700',
            }}>
            EN
          </Text>
        }
      />
      <Divider />
      <Menu.Item
        onPress={() => {
          i18n.changeLanguage('es');
          dispatch(updateAppState('appLanguage', 'ES'));
          AsyncStorage.setItem('appLanguage', 'ES');
          showMenu();
        }}
        icon={() => (
          <Image
            resizeMode={'contain'}
            style={{height: scaler(50)}}
            source={images.esFlag}
          />
        )}
        title={
          <Text
            style={{
              fontFamily:
                Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
              fontWeight: '700',
            }}>
            ES
          </Text>
        }
      />
    </Menu>
  );
}

export default AppLanguage;
