import { TouchableOpacityProps, ViewStyle, TouchableNativeFeedbackProps } from 'react-native';
declare type ClickProps = {
    children?: any;
    clickProps?: TouchableNativeFeedbackProps | TouchableOpacityProps;
    style?: ViewStyle;
    onPress?: any;
    onLongPress?: any;
    noFeedback?: boolean;
    iOSFeedback?: boolean;
    backgroundColor?: string;
    rippleColor?: string;
};
declare function Click({ clickProps, style, children, onPress, noFeedback, iOSFeedback, onLongPress, rippleColor, }: ClickProps): JSX.Element;
export default Click;
