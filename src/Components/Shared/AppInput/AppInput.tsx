import React from 'react';
import {TextInput} from 'react-native-paper';
import scaler from '../../../Utilities/scaler';

type propType = {
  label?: string;
};
function AppInput({label}: propType) {
  return (
    <TextInput mode={'outlined'} label={label} style={{fontSize: scaler(30)}} />
  );
}

export default AppInput;
