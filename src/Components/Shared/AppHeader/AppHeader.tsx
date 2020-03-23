import React from 'react';
import {Appbar} from 'react-native-paper';
import scaler from '../../../Utilities/scaler';
import {Platform} from 'react-native';

function AppHeader({navigation}: any) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content
        title={navigation.state.params.headerTitle}
        titleStyle={{
          fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
          marginBottom: scaler(-5),
          fontWeight: '500',
          fontSize: scaler(40),
        }}
      />
    </Appbar.Header>
  );
}

export default AppHeader;
