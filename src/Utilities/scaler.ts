import {create, PREDEF_RES} from 'react-native-pixel-perfect';
const perfectSize = create(PREDEF_RES.iphone6s.px);

const scaler = size => perfectSize(size);

export default scaler;
