import React from 'react';
import {StyleSheet, Text, Platform} from 'react-native';
import {
  Card,
  Col,
  Row,
  Center,
  Spacer,
  useActiveTheme,
  VisibilityToggle,
} from '../../../UIKIT/dist';
import scaler from '../../../Utilities/scaler';

type propType = {
  data?: any;
  isLast?: any;
  index?: any;
  userStart?: any;
  userEnd?: any;
  userHours?: any;
};

const timeDiffTemp = (data: any) => {
  const startTime = new Date(data.startTimeOrig).getTime();
  const endTime = new Date(data.endTimeOrig).getTime();
  const diff = ((endTime - startTime) / (3600 * 1000)) % 24;
  return parseFloat(diff.toFixed(2));
};

function WorkerDetailCardItem({data, isLast, index}: propType) {
  const Theme = useActiveTheme();
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: scaler(26),
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Medium',
      textAlign: 'center',
    },
    card: {
      flex: 0,
      height: scaler(130),
      backgroundColor: Theme.color.white,
      alignItems: 'center',
      borderBottomLeftRadius: isLast ? 5 : 0,
      borderBottomRightRadius: isLast ? 5 : 0,
      marginTop: 1,
    },
  });
  return (
    <Card elevation={5} style={styles.card} rounded={false}>
      <Center allAxis>
        <Row style={{alignItems: 'center'}}>
          <Col flex={1}>
            <Text style={styles.textStyle}>{index + 1}</Text>
          </Col>
          <Col flex={3}>
            <Text style={styles.textStyle}>{data.startTime}</Text>
          </Col>
          <Col flex={3}>
            <Text style={styles.textStyle}>{data.endTime}</Text>
          </Col>
          <Col flex={3}>
            <VisibilityToggle visible={data.lunchTime}>
              <Text style={styles.textStyle}>
                {parseFloat(data.lunchTime)} min
              </Text>
            </VisibilityToggle>
            <VisibilityToggle visible={!data.lunchTime}>
              <Text style={styles.textStyle}>NA</Text>
            </VisibilityToggle>
          </Col>
          <Col flex={3}>
            <VisibilityToggle visible={data.totalTime}>
              <Text style={styles.textStyle}>
                {parseFloat(data.totalTime)} h
              </Text>
            </VisibilityToggle>
            <VisibilityToggle visible={!data.totalTime}>
              <Text style={styles.textStyle}>{timeDiffTemp(data)} h</Text>
            </VisibilityToggle>
          </Col>
        </Row>
      </Center>
    </Card>
  );
}

export default WorkerDetailCardItem;
