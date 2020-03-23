import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, Platform} from 'react-native';
import scaler from '../../../Utilities/scaler';
import {useActiveTheme} from '../../../UIKIT/dist';

function AppHeading({children, fontSize, color, style}: any) {
  const Theme = useActiveTheme();
  const styles = StyleSheet.create({
    headingStyle: {
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
      fontSize: scaler(fontSize || 50),
      color: color || Theme.color.black,
      ...style,
    },
  });

  return <Text style={styles.headingStyle}>{children}</Text>;
}

export default AppHeading;
