import React from 'react';
import {View, Text, Platform} from 'react-native';
import {
  Row,
  Col,
  useActiveTheme,
  Spacer,
  VisibilityToggle,
  Center,
} from '../../../UIKIT/dist';
import PaperTheme from '../../../Config/PaperTheme';
import scaler from '../../../Utilities/scaler';
import {useTranslation} from 'react-i18next';
import AppButton from '../../Shared/AppButton/AppButton';

type propType = {
  jobTitle?: string;
  jobTime?: string;
  jobTimeTemp?: string;
  boldText?: boolean;
  showButton?: boolean;
  navigation?: any;
  paramsData?: any;
  headerTitle?: string;
  dark?: boolean;
};
function JobListItem({
  jobTitle,
  jobTime,
  jobTimeTemp,
  boldText,
  showButton,
  navigation,
  headerTitle,
  paramsData,
  dark,
}: propType) {
  const [t] = useTranslation();
  const Theme = useActiveTheme();
  return (
    <View>
      <Row>
        <Col flex={8}>
          <VisibilityToggle visible={!boldText}>
            <Center vertical>
              <Text
                style={{
                  fontFamily:
                    Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Regular',
                  fontSize: 16,
                }}>
                {jobTitle}
              </Text>
            </Center>
          </VisibilityToggle>
          <VisibilityToggle visible={boldText}>
            <Center vertical>
              <Text
                style={{
                  fontFamily:
                    Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
                  fontWeight: '600',
                  fontSize: 18,
                }}>
                {jobTitle}
              </Text>
            </Center>
          </VisibilityToggle>
        </Col>
        <Col right flex={7}>
          <VisibilityToggle visible={!showButton}>
            <Row>
              <Col right>
                <Center vertical>
                  <Text
                    style={{
                      ...PaperTheme.fonts.medium,
                      fontSize: 15,
                      color: dark ? Theme.color.dark : Theme.color.primary,
                    }}>
                    {jobTime}
                  </Text>
                </Center>
              </Col>
              <Spacer horizontal />
              <Col right>
                <Center vertical>
                  <Text
                    style={{
                      ...PaperTheme.fonts.medium,
                      fontSize: 15,
                      color: dark ? Theme.color.dark : Theme.color.primary,
                    }}>
                    {jobTimeTemp}
                  </Text>
                </Center>
              </Col>
            </Row>
          </VisibilityToggle>
          <VisibilityToggle visible={showButton}>
            <AppButton
              onPress={() => {
                navigation.navigate('JobDetails', {
                  headerTitle: headerTitle,
                  paramsData,
                });
              }}
              capitalize
              height={scaler(70)}
              fontSize={15}
              buttonText={t('jobDetail')}
            />
          </VisibilityToggle>
        </Col>
      </Row>
      <Spacer />
    </View>
  );
}

export default JobListItem;
