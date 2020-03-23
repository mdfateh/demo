import React, {useState} from 'react';
import {
  Appbar,
  Title,
  Menu,
  Divider,
  Portal,
  Dialog,
  Paragraph,
  Button,
} from 'react-native-paper';
import {Row, Col, Center, useActiveTheme} from '../../../UIKIT/dist';
import {Image, Text, Platform} from 'react-native';
import scaler from '../../../Utilities/scaler';
import images from '../../../Assets';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {updateAppState} from '../../../Redux/appAction';
import useAppHeaderMain from './useAppHeaderMain';
import {useTranslation} from 'react-i18next';
import AppLanguage from '../AppLanguage/AppLanguage';
import useToast from '../../../Hooks/Shared/useToast';

function AppHeaderMain({navigation}: any) {
  const Theme = useActiveTheme();
  const dispatch = useDispatch();
  const appState = useSelector(state => state);
  const {showMenu, visible} = useAppHeaderMain();
  const [alertState, setAlertState] = useState(false);
  const {showErrorToast} = useToast();
  const {t} = useTranslation();

  return (
    <Appbar.Header>
      <Portal>
        <Dialog visible={alertState} onDismiss={() => setAlertState(false)}>
          <Dialog.Title>{t('logout')}</Dialog.Title>
          <Dialog.Content>
            <Paragraph style={{fontSize: scaler(26)}}>
              {t('logoutPrompt')}
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setAlertState(false)}>{t('no')}</Button>
            <Button
              onPress={() => {
                setAlertState(false);
                if (!appState.jobStarted) {
                  AsyncStorage.removeItem('userData');
                  AsyncStorage.removeItem('appState');
                  dispatch(updateAppState('userData', null));
                  dispatch(updateAppState('tempWorkerData', []));
                  navigation.navigate('Loading');
                } else {
                  showErrorToast(t('stopCurrentActiveJob'));
                }
              }}>
              {t('yes')}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Row>
        <Col flex={6}>
          <Image
            resizeMode={'contain'}
            style={{
              height: scaler(80),
              marginLeft: 15,
              width: scaler(280),
            }}
            source={images.headLogo}
          />
        </Col>
        <Col flex={2}>
          <Row>
            <Col right>
              <Center vertical>
                <Image
                  resizeMode={'contain'}
                  style={{height: scaler(50)}}
                  source={
                    appState.appLanguage === 'EN'
                      ? images.enFlag
                      : images.esFlag
                  }
                />
              </Center>
            </Col>
            <Col right>
              <Center vertical>
                <Title
                  style={{
                    fontFamily:
                      Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
                    fontWeight: '600',
                    color: Theme.color.white,
                  }}>
                  {appState.appLanguage}
                </Title>
              </Center>
            </Col>
          </Row>
        </Col>
      </Row>
      <AppLanguage visible={visible} showMenu={showMenu} />
      <Appbar.Action
        icon={images.logout}
        onPress={() => setAlertState(true)}></Appbar.Action>
    </Appbar.Header>
  );
}

export default AppHeaderMain;
