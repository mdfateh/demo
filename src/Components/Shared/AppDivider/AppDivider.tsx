import React from 'react';
import {Divider} from 'react-native-paper';
import {useActiveTheme} from '../../../UIKIT/dist';

function AppDivider() {
  const Theme = useActiveTheme();
  return <Divider style={{backgroundColor: Theme.color.shadow}} />;
}

export default AppDivider;
