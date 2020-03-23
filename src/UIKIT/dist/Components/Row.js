import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
function Row({ children, style, flex }) {
    const styles = useMemo(() => StyleSheet.create({
        rowStyles: {
            flexDirection: 'row',
            flex: flex === undefined ? 1 : flex,
            ...style,
        },
    }), [flex, style]);
    return useMemo(() => <View style={styles.rowStyles}>{children}</View>, [
        styles,
        children,
    ]);
}
export default Row;
