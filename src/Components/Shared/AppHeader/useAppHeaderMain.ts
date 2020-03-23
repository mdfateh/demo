import React, {useState} from 'react';

function useAppHeaderMain() {
  const [visible, setVisible] = useState(false);
  const showMenu = () => {
    console.log('show', visible);
    setVisible(!visible);
  };
  return {
    showMenu,
    visible,
  };
}

export default useAppHeaderMain;
