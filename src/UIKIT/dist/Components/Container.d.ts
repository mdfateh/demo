import { ViewStyle, ViewProps, StatusBarStyle } from 'react-native';
declare type ContainerProps = {
    style?: ViewStyle;
    children?: any;
    containerProps?: ViewProps;
    statusBarStyle?: StatusBarStyle;
    statusBarBackgroundColor?: string;
    fullScreen?: boolean;
};
declare function Container({ style, children, containerProps, statusBarStyle, statusBarBackgroundColor, fullScreen, }: ContainerProps): JSX.Element;
export default Container;
