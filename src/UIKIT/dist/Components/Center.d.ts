import { ViewStyle, ViewProps } from 'react-native';
declare type CenterProps = {
    children?: any;
    allAxis?: boolean;
    vertical?: boolean;
    flex?: number;
    style?: ViewStyle;
    centerProps?: ViewProps;
};
declare function Center({ allAxis, children, flex, vertical, style, centerProps, }: CenterProps): JSX.Element;
export default Center;
