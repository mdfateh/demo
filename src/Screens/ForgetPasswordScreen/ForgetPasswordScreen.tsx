import React from 'react';
import {Text, Platform} from 'react-native';
import {Container, Body, Spacer, Center} from '../../UIKIT/dist';
import scaler from '../../Utilities/scaler';
import AppButton from '../../Components/Shared/AppButton/AppButton';
import useForgetPasswordScreen from './useForgetPasswordScreen';
import {Controller} from 'react-hook-form';
import {TextInput, HelperText} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

function ForgetPasswordScreen(props: any) {
  const {form, onChange, requestPassword, loading} = useForgetPasswordScreen(
    props,
  );
  const {t} = useTranslation();
  return (
    <Container>
      <Body style={{padding: scaler(50)}}>
        <Spacer size={scaler(40)} />

        <Text
          style={{
            letterSpacing: 0.4,
            fontSize: scaler(26),
            textAlign: 'center',
            fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Medium',
          }}>
          {t('resetLinkText')}
        </Text>
        <Spacer size={scaler(50)} />
        <Controller
          name={'email'}
          control={form.control}
          rules={{
            required: {value: true, message: t('emailRequired')},
            pattern: {
              value: /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
              message: t('emailInvalid'),
            },
          }}
          as={
            <TextInput
              autoCapitalize={'none'}
              mode={'outlined'}
              label={t('emailAddress')}
              error={form.errors.email ? true : false}
            />
          }
          onChange={onChange}
        />
        {form.errors.email && (
          <HelperText style={{color: 'red'}}>
            {
              //@ts-ignore
              (form.errors.email || {message: ''}).message
            }
          </HelperText>
        )}
        <Spacer size={scaler(70)} />
        <AppButton
          onPress={form.handleSubmit(() => {
            requestPassword();
          })}
          loading={loading}
          height={scaler(92)}
          fontSize={scaler(30)}
          buttonText={t('send')}
        />
      </Body>
    </Container>
  );
}

export default ForgetPasswordScreen;
