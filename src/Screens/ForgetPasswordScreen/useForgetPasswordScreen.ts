import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import useHTTP from '../../Hooks/Shared/useHttp';
import {Keyboard} from 'react-native';
import useBackHandler from '../../Hooks/Shared/useBackHandler';

function useForgetPasswordScreen({navigation}: any) {
  useBackHandler(true, navigation);
  const form = useForm({
    mode: 'onChange',
  });
  useEffect(() => {
    // console.log('values', form.getValues());
  });

  const {initiateRequest, loading} = useHTTP();

  const onChange = args => ({
    value: args[0].nativeEvent.text,
  });

  const requestPassword = async () => {
    Keyboard.dismiss();
    const values = form.getValues();
    const reqBody = {
      email: values.email,
    };

    initiateRequest(
      'forget_password',
      'POST',
      reqBody,
      async response => {
        console.log('resp', response);
      },
      error => {
        console.log('errr', error.response);
      },
    );
  };

  return {
    form,
    onChange,
    requestPassword,
    loading,
  };
}

export default useForgetPasswordScreen;
