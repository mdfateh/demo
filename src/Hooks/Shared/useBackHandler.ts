import {useEffect} from 'react';
import BackButtonHandler from '../../Utilities/BackButtonHandler';
import useToast from './useToast';
import {useTranslation} from 'react-i18next';

function useBackHandler(back, navigation) {
  const {showNormalToast} = useToast();
  const {t} = useTranslation();
  useEffect(() => {
    BackButtonHandler.mount(back, navigation, showNormalToast, t);
    return () => {
      BackButtonHandler.unmount();
    };
  }, []);
}

export default useBackHandler;
