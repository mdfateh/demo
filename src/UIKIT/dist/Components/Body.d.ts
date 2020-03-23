import { ViewStyle, ScrollViewProps } from 'react-native';
declare type BodyProps = {
    style?: ViewStyle;
    children?: any;
    bodyProps?: ScrollViewProps;
    backgroundColor?: string;
    transparent?: boolean;
};
declare function Body({ style, children, bodyProps, backgroundColor, transparent, }: BodyProps): JSX.Element;
export default Body;
