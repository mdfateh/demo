import React from 'react';
import {Image, Text, Dimensions, Platform} from 'react-native';
import scaler from '../../../Utilities/scaler';
import {
  useActiveTheme,
  Click,
  Card,
  Center,
  Spacer,
  Row,
} from '../../../UIKIT/dist';
import {BASE_URL} from '../../../Config/Constants';

type propType = {
  jobName?: string;
  image?: any;
  imgHeight?: number;
  imgWidth?: number;
  spacerSize?: number;
  onPress?: any;
  active?: boolean;
};

function JobCard({
  jobName,
  image,
  imgHeight,
  imgWidth,
  spacerSize,
  onPress,
  active,
}: propType) {
  const dimension = Dimensions.get('screen');
  const Theme = useActiveTheme();
  return (
    <Click onPress={onPress}>
      <Card
        style={{
          height: dimension.width / 2.5,
          width: dimension.width / 2.5,
          backgroundColor: Theme.color.light,
          margin: 2,
          borderRadius: scaler(30),
          flex: 0,
          marginRight: scaler(40),
          borderWidth: active ? 3 : 0,
          borderColor: active ? Theme.color.primary : Theme.color.white,
        }}
        elevation={3}>
        <Center allAxis>
          <Image
            resizeMode={'contain'}
            style={{height: imgHeight, width: imgWidth}}
            source={{
              uri: `${BASE_URL}${image}`,
            }}
          />
          <Spacer size={spacerSize} />
          <Text
            style={{
              fontFamily:
                Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold',
              fontSize: scaler(30),
              color: active ? Theme.color.primary : Theme.color.dark,
            }}>
            {jobName}
          </Text>
        </Center>
      </Card>
    </Click>
  );
}

export default JobCard;
