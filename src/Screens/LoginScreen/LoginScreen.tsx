import React from 'react';
import {Text, View, Image} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {Controller} from 'react-hook-form';
import {
  Container,
  Body,
  Center,
  Spacer,
  Click,
  VisibilityToggle,
} from '../../UIKIT/dist';
import scaler from '../../Utilities/scaler';
import images from '../../Assets';
import AppCheckBox from '../../Components/Shared/AppCheckBox/AppCheckBox';
import AppButton from '../../Components/Shared/AppButton/AppButton';
import useLoginScreen from './useLoginScreen';
import {useTranslation} from 'react-i18next';

function LoginScreen(props: any) {
  const {
    form,
    onChange,
    doLogin,
    loading,
    checkBoxHandler,
    checked,
    styles,
    validationRules,
  } = useLoginScreen(props);
  const errors: any = form.errors;
  const {t} = useTranslation();

  return (
    <Container>
      <Body style={{padding: scaler(50)}}>
        <Spacer size={scaler(200)} />
        <View style={{alignItems: 'center'}}>
          <Image source={images.logo} style={styles.imagestyle} />
        </View>
        <Spacer size={scaler(100)} />
        <Controller
          name={'email'}
          rules={validationRules.email}
          control={form.control}
          as={
            <TextInput
              autoCapitalize={'none'}
              mode={'outlined'}
              label={t('email')}
              error={errors.email ? true : false}
            />
          }
          onChange={onChange}
        />
        <VisibilityToggle visible={errors.email ? true : false}>
          <HelperText style={{color: 'red'}}>
            {errors.email ? errors.email.message : ''}
          </HelperText>
        </VisibilityToggle>
        <Spacer size={scaler(20)} />
        <Controller
          name={'password'}
          rules={validationRules.password}
          control={form.control}
          as={
            <TextInput
              secureTextEntry={true}
              autoCapitalize={'none'}
              mode={'outlined'}
              label={t('password')}
              error={errors.password ? true : false}
            />
          }
          onChange={onChange}
        />
        <VisibilityToggle visible={errors.password ? true : false}>
          <HelperText style={{color: 'red'}}>
            {errors.password ? errors.password.message : ''}
          </HelperText>
        </VisibilityToggle>
        <View style={{flexDirection: 'row'}}>
          <AppCheckBox onPress={checkBoxHandler} status={checked} />
          <Text style={styles.textstyle1}>{t('rememberMe')}</Text>
        </View>
        <Spacer size={scaler(60)} />
        <AppButton
          onPress={form.handleSubmit(() => {
            doLogin();
          })}
          loading={loading}
          height={scaler(92)}
          fontSize={scaler(35)}
          buttonText={t('login')}
        />
        <Spacer size={scaler(80)} />
        <Center>
          <Click
            onPress={() => {
              props.navigation.navigate('ForgetPassword', {
                headerTitle: t('forgotPassword'),
              });
            }}>
            <Text style={styles.textStyle}>{t('forgotPassword')}</Text>
          </Click>
        </Center>
      </Body>
    </Container>
  );
}

export default LoginScreen;
