import React from 'react';
import {Button} from 'react-native-paper';
import {Platform} from 'react-native';

type propType = {
  buttonText?: string;
  onPress?: any;
  width?: any;
  height?: number;
  fontSize?: number;
  capitalize?: boolean;
  loading?: boolean;
};
function AppButton({
  buttonText,
  onPress,
  width,
  height,
  fontSize,
  capitalize,
  loading,
}: propType) {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      contentStyle={{height: height, overflow: 'scroll'}}
      style={{minWidth: width}}
      loading={loading}
      labelStyle={{
        fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
        fontSize: fontSize,
      }}>
      {buttonText}
    </Button>
  );
}

export default AppButton;
