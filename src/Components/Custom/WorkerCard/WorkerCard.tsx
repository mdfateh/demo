import React, {useMemo, Children} from 'react';
import {Text, StyleSheet, View, FlatList, Alert} from 'react-native';
import {useActiveTheme, Card, Row, Col, Spacer} from '../../../UIKIT/dist';
import WorkerCardItem from '../WorkerCardItem/WorkerCardItem';
import scaler from '../../../Utilities/scaler';
import {useTranslation} from 'react-i18next';
import PaperTheme from '../../../Config/PaperTheme';

type propType = {
  cardData?: Array<any>;
  deleteData?: any;
  copyItem?: any;
  startHandleConfirm?: any;
  endHandleConfirm?: any;
  isStartDatePickerVisible?: any;
  setStartDatePickerVisibility?: any;
  isEndDatePickerVisible?: any;
  setEndDatePickerVisibility?: any;
  setStartTime?: any;
  callStartDatePicker?: any;
  callEndDatePicker?: any;
  children: any;
};

var ID = function() {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

function WorkerCard({
  cardData,
  deleteData,
  copyItem,
  startHandleConfirm,
  endHandleConfirm,
  isStartDatePickerVisible,
  setStartDatePickerVisibility,
  isEndDatePickerVisible,
  setEndDatePickerVisibility,
  callStartDatePicker,
  callEndDatePicker,
  children,
}: propType) {
  const renderItem = ({item, index}: any) => {
    return (
      <WorkerCardItem
        jobData={item}
        index={index}
        deleteData={deleteData}
        copyItem={copyItem}
        startHandleConfirm={startHandleConfirm}
        endHandleConfirm={endHandleConfirm}
        isStartDatePickerVisible={isStartDatePickerVisible}
        setStartDatePickerVisibility={setStartDatePickerVisibility}
        isEndDatePickerVisible={isEndDatePickerVisible}
        setEndDatePickerVisibility={setEndDatePickerVisibility}
        callStartDatePicker={callStartDatePicker}
        callEndDatePicker={callEndDatePicker}
      />
    );
  };

  const [t] = useTranslation();
  const Theme = useActiveTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        card: {
          backgroundColor: Theme.color.white,
          borderRadius: 3,
        },
        body: {
          padding: 18,
        },
        textStyle: {
          fontSize: 15,
          ...PaperTheme.fonts.medium,
        },
      }),
    [],
  );
  return (
    <Card style={styles.card} rounded elevation={2}>
      <Row style={{padding: scaler(16)}}>
        <Col flex={2.7}>
          <Text style={styles.textStyle}>{t('startTime')}</Text>
        </Col>
        <Spacer horizontal />
        <Col style={{flex: 2.5}}>
          <Text style={styles.textStyle}>{t('endTime')}</Text>
        </Col>
        <Spacer horizontal />
        <Col style={{flex: 3, justifyContent: 'center'}}>
          <Text style={styles.textStyle}>{t('lunchTime')}</Text>
        </Col>
        <Spacer horizontal />
        <Col style={{flex: 1.8}}>
          <Text style={styles.textStyle}>{t('action')}</Text>
        </Col>
      </Row>
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: Theme.color.shadow,
        }}
      />
      <Spacer size={5} />
      {children}
    </Card>
  );
}
export default WorkerCard;
