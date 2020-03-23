import { ViewStyle, ViewProps } from 'react-native';
declare type ColProps = {
    children?: any;
    style?: ViewStyle;
    flex?: number;
    right?: boolean;
    left?: boolean;
    colProps?: ViewProps;
};
declare function Col({ children, style, flex, left, right, colProps }: ColProps): JSX.Element;
export default Col;
