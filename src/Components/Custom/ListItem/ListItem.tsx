import React from 'react';
import {Text, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useActiveTheme, Card, Row, Col, Click} from '../../../UIKIT/dist';
import scaler from '../../../Utilities/scaler';

function ListItem({data, onPress}: any) {
  const appState = useSelector(state => state);
  const {appLanguage} = appState;
  const Theme = useActiveTheme();
  return (
    <Click
      onPress={() =>
        onPress(data.id, {en_name: data.sub_en_name, sp_name: data.sub_sp_name})
      }
      style={{height: scaler(110), marginTop: scaler(18)}}>
      <Card
        style={{
          height: scaler(100),
          backgroundColor: Theme.color.white,
          paddingLeft: scaler(25),
          borderRadius: 5,
        }}
        elevation={1}>
        <Row>
          <Col flex={9} style={{justifyContent: 'center'}}>
            <Text
              key={appLanguage}
              style={{
                fontFamily:
                  Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
                fontSize: scaler(30),
              }}>
              {appLanguage === 'EN' ? data.sub_en_name : data.sub_sp_name}
            </Text>
          </Col>
          <Col
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Icon name="arrow-right" size={scaler(40)} color="gray" />
          </Col>
        </Row>
      </Card>
    </Click>
  );
}

export default ListItem;
