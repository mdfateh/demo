import { ViewStyle, ViewProps } from 'react-native';
declare type CardProps = {
    style?: ViewStyle;
    children?: any;
    elevation: number;
    rounded?: boolean;
    roundness?: number;
    cardProps?: ViewProps;
    transparent?: boolean;
    backgroundColor?: string;
};
declare function Card({ style, children, elevation, rounded, roundness, cardProps, transparent, backgroundColor, }: CardProps): JSX.Element;
declare namespace Card {
    var defaultProps: {
        elevation: number;
    };
}
declare const _default: typeof Card;
export default _default;
