import React, {useEffect} from 'react';
import {Container, Center} from '../../UIKIT/dist';
import {ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {updateAppState} from '../../Redux/appAction';
import SplashScreen from 'react-native-splash-screen';
import i18n from '../../i18n';
import useBackHandler from '../../Hooks/Shared/useBackHandler';

function LoadingScreen({navigation}: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      checkLoginStatus();
    }, 1000);

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  useBackHandler(false, navigation);

  // const {logs} = useGeofencing(undefined, true, undefined, undefined, () => {
  //   Alert.alert('Job Stopped');
  // });

  const checkLoginStatus = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString !== null) {
        dispatch(updateAppState('userData', JSON.parse(userDataString)));
        navigation.navigate('AppTabStack');
      } else {
        navigation.navigate('AppStack');
      }
      const appLanguageString = await AsyncStorage.getItem('appLanguage');
      if (appLanguageString !== null) {
        if (appLanguageString === 'EN') {
          i18n.changeLanguage('en');
          dispatch(updateAppState('appLanguage', 'EN'));
        } else {
          i18n.changeLanguage('es');
          dispatch(updateAppState('appLanguage', 'ES'));
        }
      }
    } catch (e) {
      navigation.navigate('AppStack');
    }
  };

  return (
    <Container>
      <Center allAxis style={{padding: 15}}>
        <ActivityIndicator size={'large'} />
        {/* <Text style={{fontSize: 20}}>{JSON.stringify(logs)}</Text> */}
      </Center>
    </Container>
  );
}

export default LoadingScreen;
