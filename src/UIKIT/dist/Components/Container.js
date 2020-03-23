import React, {Fragment, useMemo} from 'react';
import {
  View,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import useActiveTheme from '../Themes/useActiveTheme';
import {VisibilityToggle} from '..';
function Container({
  style,
  children,
  containerProps,
  statusBarStyle,
  statusBarBackgroundColor,
  fullScreen,
}) {
  const Theme = useActiveTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        iOSContainerStyle: {
          flex: 1,
          backgroundColor: Theme.color.light,
          ...style,
        },
        iOSSafeAreaStyle: {
          flex: 0,
          backgroundColor:
            statusBarBackgroundColor ||
            Theme.statusbar.backgroundColor ||
            Theme.color.light,
        },
        androidContainerStyle: {
          flex: 1,
          backgroundColor: Theme.color.light,
          ...style,
        },
      }),
    [Theme, style, statusBarBackgroundColor],
  );
  return useMemo(
    () => (
      <Fragment>
        <StatusBar
          barStyle={statusBarStyle || Theme.statusbar.style}
          backgroundColor={
            statusBarBackgroundColor || Theme.statusbar.backgroundColor
          }
          translucent={fullScreen || false}
        />
        <VisibilityToggle visible={Platform.OS === 'ios'}>
          <VisibilityToggle visible={fullScreen ? true : false}>
            <View style={styles.androidContainerStyle} {...containerProps}>
              {children}
            </View>
          </VisibilityToggle>
          <VisibilityToggle visible={fullScreen ? false : true}>
            <SafeAreaView style={styles.iOSSafeAreaStyle} />
            <SafeAreaView style={styles.iOSContainerStyle} {...containerProps}>
              {children}
            </SafeAreaView>
          </VisibilityToggle>
        </VisibilityToggle>
        <VisibilityToggle visible={Platform.OS === 'android'}>
          <View style={styles.androidContainerStyle} {...containerProps}>
            {children}
          </View>
        </VisibilityToggle>
      </Fragment>
    ),
    [
      statusBarStyle,
      Theme,
      statusBarBackgroundColor,
      fullScreen,
      styles,
      containerProps,
      children,
    ],
  );
}
export default Container;
