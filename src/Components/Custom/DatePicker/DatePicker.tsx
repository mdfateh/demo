import React, {useState, useEffect} from 'react';
import {TouchableRipple} from 'react-native-paper';
import scaler from '../../../Utilities/scaler';
import {Image, View} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import images from '../../../Assets';
import {useActiveTheme} from '../../../UIKIT/dist';
import {useTranslation} from 'react-i18next';

function DatePicker({showDatePicker, jobDate}) {
  const Theme = useActiveTheme();
  const [keyNumber, setKeyNumber] = useState(0);
  const {t} = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setKeyNumber(c => c + 1);
    }, 300);
  }, [jobDate]);

  return (
    <View>
      <TouchableRipple onPress={showDatePicker} style={{position: 'relative'}}>
        <OutlinedTextField
          key={keyNumber}
          editable={false}
          label={t('selectDate')}
          tintColor={Theme.color.primary}
          value={jobDate}
          fontSize={scaler(30)}
          labelFontSize={scaler(26)}
          baseColor={Theme.color.primary}
          renderRightAccessory={() => (
            <Image source={images.calendar} resizeMode={'contain'} />
          )}
        />
      </TouchableRipple>
    </View>
  );
}

export default DatePicker;
