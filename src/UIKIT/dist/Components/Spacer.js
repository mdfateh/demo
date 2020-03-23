import React, { useMemo } from 'react';
import { View } from 'react-native';
function Spacer({ size, horizontal, backgroundColor }) {
    return useMemo(() => (<View style={{
        [horizontal ? 'width' : 'height']: size === undefined ? 10 : size,
        backgroundColor: backgroundColor || 'transparent',
    }}/>), [horizontal, backgroundColor, size]);
}
export default Spacer;
