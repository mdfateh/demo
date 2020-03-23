import React from 'react';
import {Appbar} from 'react-native-paper';
import {Text} from 'react-native';

function AppHeaderTransparent({navigation}: any) {
  return (
    <Appbar.Header style={{backgroundColor: 'transparent'}}>
      <Text> </Text>
    </Appbar.Header>
  );
}

export default AppHeaderTransparent;
