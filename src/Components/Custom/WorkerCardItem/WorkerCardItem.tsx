import React, {useMemo} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  useActiveTheme,
  Card,
  Row,
  Col,
  Spacer,
  Click,
} from '../../../UIKIT/dist';
import scaler from '../../../Utilities/scaler';
import {TextInput, Surface} from 'react-native-paper';
import images from '../../../Assets';
import {useTranslation} from 'react-i18next';

function WorkerCardItem({
  jobData,
  deleteData,
  copyItem,
  callStartDatePicker,
  callEndDatePicker,
  handleInput,
}: any) {
  const Theme = useActiveTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        card: {
          flex: 0,
          height: scaler(130),
          backgroundColor: Theme.color.white,
          padding: 10,
          alignItems: 'center',
        },
        body: {
          padding: 18,
        },
        textStyle: {
          fontSize: 18,
        },
        imagestyle: {
          height: 24,
          width: 24,
        },
        inputstyle: {
          height: scaler(90),
          flex: 1,
          backgroundColor: Theme.color.white,
          fontSize: scaler(21),
          textAlign: 'center',
        },
      }),
    [Theme],
  );

  const deleteItem = (index: any) => {
    deleteData(index);
  };

  const {t} = useTranslation();

  return (
    <View>
      <Card style={styles.card} elevation={2}>
        <Row>
          <Col flex={2.8}>
            <Click onPress={callStartDatePicker} style={{height: scaler(90)}}>
              <View style={{height: scaler(90)}} pointerEvents="none">
                <TextInput
                  placeholder="00:00"
                  value={jobData.startTime}
                  style={styles.inputstyle}
                  editable={false}
                />
              </View>
            </Click>
            <Spacer />
          </Col>
          <Spacer horizontal size={4} />
          <Col flex={2.8}>
            <Click onPress={callEndDatePicker} style={{height: scaler(90)}}>
              <View style={{height: scaler(90)}} pointerEvents="none">
                <TextInput
                  editable={false}
                  placeholder="00:00"
                  value={jobData.endTime}
                  style={styles.inputstyle}
                />
              </View>
            </Click>
            <Spacer />
          </Col>
          <Spacer horizontal size={4} />
          <Col flex={2.8}>
            <Surface style={{height: scaler(90), elevation: 2}}>
              <TextInput
                placeholder={`0 ${t('minutes')}`}
                style={styles.inputstyle}
                value={jobData.lunchTime}
                onChangeText={handleInput}
                maxLength={3}
                keyboardType={'number-pad'}
              />
            </Surface>
          </Col>
          <Spacer />
          <Spacer horizontal />

          <Col
            style={{
              flex: 1.9,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Click style={{height: 24, width: 24}} onPress={copyItem}>
              <Image
                source={images.copy}
                style={styles.imagestyle}
                resizeMode={'contain'}
              />
            </Click>
            <Spacer horizontal />
            <Click style={{height: 24, width: 24}} onPress={deleteItem}>
              <Image
                source={images.delete}
                style={styles.imagestyle}
                resizeMode={'contain'}
              />
            </Click>
          </Col>
        </Row>
      </Card>

      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: Theme.color.light,
        }}
      />
    </View>
  );
}

export default WorkerCardItem;
