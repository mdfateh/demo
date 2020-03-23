import React, { Fragment, useMemo } from 'react';
function VisibilityToggle({ visible, children }) {
    const status = visible ? true : false;
    return useMemo(() => (status ? children : <Fragment />), [status, children]);
}
export default VisibilityToggle;
