import { StatusBarStyle } from 'react-native';
declare type ThemeType = {
    name: string;
    color: {
        dark: string;
        shadow: string;
        danger: string;
        primary: string;
        secondary: string;
        warning: string;
        light: string;
        overlay: string;
        white: string;
        black: string;
    };
    statusbar: {
        style: StatusBarStyle;
        backgroundColor: string;
    };
};
export default ThemeType;
