import React from 'react';
import {StyleSheet, Text, Platform} from 'react-native';
import {Surface} from 'react-native-paper';
import {
  Spacer,
  useActiveTheme,
  Click,
  Row,
  Col,
  Center,
} from '../../../UIKIT/dist';
import AppTheme from '../../../Config/AppTheme';
import scaler from '../../../Utilities/scaler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import AppHeading from '../../Shared/AppHeading/AppHeading';

function Counter({increment, decrement, count}: any) {
  const [t] = useTranslation();
  const Theme = useActiveTheme();
  const styles = StyleSheet.create({
    surfaceTwo: {
      padding: scaler(6),
      height: scaler(80),
      width: scaler(80),
      alignItems: 'center',
      marginLeft: scaler(20),
      justifyContent: 'center',
      elevation: 1,
      borderRadius: 2,
    },
    surfaceThree: {
      padding: scaler(6),
      height: scaler(80),
      width: scaler(130),
      alignItems: 'center',
      marginLeft: scaler(20),
      justifyContent: 'center',
      elevation: 1,
      borderRadius: 2,
    },
    surfacetextstyle: {
      color: AppTheme.color.primary,
      fontSize: scaler(26),
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Bold',
    },
    rowStyle: {
      paddingHorizontal: scaler(10),
    },
  });

  return (
    <Row flex={0} style={styles.rowStyle}>
      <Col flex={4}>
        <Center vertical>
          <AppHeading fontSize={30}>{t('numberofWorkers')}</AppHeading>
        </Center>
      </Col>
      <Spacer horizontal size={scaler(25)} />
      <Col right flex={6}>
        <Row>
          <Surface style={styles.surfaceTwo}>
            <Click onPress={decrement}>
              <Icon
                name="minus"
                size={scaler(60)}
                style={{color: Theme.color.primary}}
              />
            </Click>
          </Surface>
          <Surface style={styles.surfaceThree}>
            <AppHeading fontSize={35}>{count}</AppHeading>
          </Surface>
          <Surface style={styles.surfaceTwo}>
            <Click onPress={increment}>
              <Icon
                name="plus"
                size={scaler(60)}
                style={{color: Theme.color.primary}}
              />
            </Click>
          </Surface>
        </Row>
      </Col>
    </Row>
  );
}

export default Counter;
