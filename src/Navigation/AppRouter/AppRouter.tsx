import React, {Fragment, useState, useEffect} from 'react';
import {Snackbar} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {useActiveTheme} from '../../UIKIT/dist';
import {View, AppState, StatusBar} from 'react-native';
import AppSwitchNavigator from '../AppSwitchNavigator';
import {updateAppState, updateBulkAppState} from '../../Redux/appAction';
import NavigationService from '../../Utilities/NavigationService';
import AsyncStorage from '@react-native-community/async-storage';

function AppRouter() {
  const appState: any = useSelector(state => state);
  const {appToast, appToastMessage, appToastType} = appState;
  const dispatch = useDispatch();
  const Theme = useActiveTheme();

  const [appStatus, setAppStatus] = useState(AppState.currentState);

  const handleAppStateChange = nextAppState => {
    console.log('App is now' + nextAppState);
    setAppStatus(nextAppState);
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  useEffect(() => {
    handleAppState();
  }, [appStatus]);

  const handleAppState = async () => {
    if (appStatus === 'active') {
      const appStateString = await AsyncStorage.getItem('appState');
      console.log('appStateString', appStateString);
      if (appStateString) {
        const appStateParsed = JSON.parse(appStateString);
        console.log('appStateParsed', appStateParsed);
        if (appStateParsed) {
          dispatch(updateBulkAppState(appStateParsed));
        }
      }
    }
    if (appStatus === 'background' || appStatus === 'inactive') {
      AsyncStorage.setItem('appState', JSON.stringify(appState));
    }
  };

  return (
    <Fragment>
      <AppSwitchNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      <Snackbar
        duration={2000}
        onDismiss={() => {
          dispatch(updateAppState('appToast', false));
        }}
        style={{backgroundColor: Theme.color[appToastType]}}
        visible={appToast}>
        {appToastMessage}
      </Snackbar>
    </Fragment>
  );
}

export default AppRouter;
