import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
function Col({ children, style, flex, left, right, colProps }) {
    const styles = useMemo(() => StyleSheet.create({
        rowStyles: {
            flex: flex === undefined ? 1 : flex,
            alignItems: left ? 'flex-start' : right ? 'flex-end' : undefined,
            ...style,
        },
    }), [flex, left, right, style]);
    return useMemo(() => (<View style={styles.rowStyles} {...colProps}>
        {children}
      </View>), [children, styles.rowStyles, colProps]);
}
export default Col;
