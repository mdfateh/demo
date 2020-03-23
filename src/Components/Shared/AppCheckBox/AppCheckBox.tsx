import React from 'react';
import {Checkbox} from 'react-native-paper';
import {View, Platform} from 'react-native';
import scaler from '../../../Utilities/scaler';
import {useActiveTheme} from '../../../UIKIT/dist';

function AppCheckBox({onPress, status}: any) {
  const Theme = useActiveTheme();
  return (
    <View style={{marginLeft: scaler(-15)}}>
      <Checkbox
        status={
          status
            ? 'checked'
            : Platform.OS === 'ios'
            ? 'indeterminate'
            : 'unchecked'
        }
        color={Theme.color.primary}
        onPress={onPress}
      />
    </View>
  );
}

export default AppCheckBox;
