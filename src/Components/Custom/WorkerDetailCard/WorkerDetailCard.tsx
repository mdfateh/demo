import React, {Fragment} from 'react';
import {Text, StyleSheet, View, Platform} from 'react-native';
import {Row, Col, Card, Spacer, useActiveTheme} from '../../../UIKIT/dist';
import WorkerDetailCardItem from '../WorkerDetailCardItem/WorkerDetailCardItem';
import scaler from '../../../Utilities/scaler';
import {useTranslation} from 'react-i18next';

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function WorkerDetailCard({data, extraData}: any) {
  const Theme = useActiveTheme();

  const styles = StyleSheet.create({
    textStyle: {
      fontSize: scaler(28),
      fontFamily: Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Bold',
      textAlign: 'center',
    },
    card: {
      backgroundColor: Theme.color.white,
      alignItems: 'center',
      paddingTop: scaler(18),
      paddingBottom: scaler(18),
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
  });

  const renderItem = (item: any, index: number) => {
    return (
      <WorkerDetailCardItem
        key={index}
        index={index + 1}
        data={item}
        isLast={data.length - 1 == index}
      />
    );
  };

  const {t} = useTranslation();

  return (
    <Fragment>
      <Card elevation={5} style={styles.card}>
        <Row
          style={{
            alignItems: 'center',
          }}>
          <Col flex={1}>
            <Text style={styles.textStyle}>#</Text>
          </Col>
          <Col flex={3}>
            <Text style={styles.textStyle}>{t('start')}</Text>
          </Col>
          <Col flex={3}>
            <Text style={styles.textStyle}>{t('end')}</Text>
          </Col>
          <Col flex={3}>
            <Text style={styles.textStyle}>{t('lunch')}</Text>
          </Col>
          <Col flex={3}>
            <Text style={styles.textStyle}>{t('total')}</Text>
          </Col>
        </Row>
        <Spacer size={5} />
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: Theme.color.white,
          }}
        />
      </Card>
      <WorkerDetailCardItem
        index={0}
        data={{
          startTime: formatAMPM(
            new Date(extraData.created_at.replace(' ', 'T')),
          ),
          endTime: formatAMPM(new Date(extraData.updated_at.replace(' ', 'T'))),
          totalTime: extraData.total_user_hours,
        }}
        isLast={false}
      />
      {(data || []).map(renderItem)}
    </Fragment>
  );
}
export default WorkerDetailCard;
