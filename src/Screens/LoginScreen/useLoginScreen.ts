import {useEffect, useState, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform, StyleSheet, Keyboard} from 'react-native';
import useHTTP from '../../Hooks/Shared/useHttp';
import {updateAppState} from '../../Redux/appAction';
import scaler from '../../Utilities/scaler';
import BackButtonHandler from '../../Utilities/BackButtonHandler';
import useToast from '../../Hooks/Shared/useToast';
import useBackHandler from '../../Hooks/Shared/useBackHandler';
import {useTranslation} from 'react-i18next';

function useLoginScreen(props: any) {
  const [checked, setChecked] = useState(true);
  useBackHandler(false, props.navigation);
  const {t} = useTranslation();
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {initiateRequest, loading} = useHTTP();
  const dispatch = useDispatch();
  const validationRules = {
    email: {
      required: {value: true, message: t('emailRequired')},
      pattern: {
        value: /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
        message: t('emailInvalid'),
      },
    },
    password: {
      required: {value: true, message: t('passwordRequired')},
    },
  };

  const checkBoxHandler = () => {
    setChecked(!checked);
  };

  const setCredentialData = async () => {
    try {
      const credentialDataString = await AsyncStorage.getItem('credentialData');
      if (credentialDataString !== null) {
        const credentialData = JSON.parse(credentialDataString);
        form.reset(credentialData);
      }
    } catch (e) {}
  };

  const onChange = args => ({
    value: args[0].nativeEvent.text,
  });

  const doLogin = async () => {
    Keyboard.dismiss();
    const values = form.getValues();
    const reqBody = {
      user_email: values.email,
      password: values.password,
    };
    initiateRequest(
      'user_login',
      'POST',
      reqBody,
      async response => {
        if (response) {
          const userData = {...response.data.data};
          dispatch(updateAppState('userData', userData));
          AsyncStorage.setItem('userData', JSON.stringify(userData));
          await AsyncStorage.removeItem('credentialData');
          if (checked) {
            const credentialData = {...values};
            AsyncStorage.setItem(
              'credentialData',
              JSON.stringify(credentialData),
            );
          }
          props.navigation.navigate('AppTabStack');
        }
      },
      () => {},
    );
  };

  const styles = useMemo(
    () =>
      StyleSheet.create({
        imagestyle: {
          height: scaler(60),
          width: scaler(420),
        },
        textStyle: {
          fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Medium',
        },
        textstyle1: {
          paddingTop: scaler(19),
          fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Medium',
        },
      }),
    undefined,
  );

  useEffect(() => {
    console.log('Rendered', form.errors, form.getValues());
    setCredentialData();
  }, []);

  return {
    form,
    onChange,
    doLogin,
    loading,
    checkBoxHandler,
    checked,
    styles,
    validationRules,
  };
}

export default useLoginScreen;
