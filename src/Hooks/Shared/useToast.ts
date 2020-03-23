import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {updateBulkAppState} from '../../Redux/appAction';

function useToast() {
  const dispatch = useDispatch();
  const showSuccessToast = useCallback((successText: any) => {
    dispatch(
      updateBulkAppState({
        appToast: true,
        appToastMessage: successText,
        appToastType: 'primary',
      }),
    );
  }, []);

  const showErrorToast = useCallback((errorText: any) => {
    dispatch(
      updateBulkAppState({
        appToast: true,
        appToastMessage: errorText,
        appToastType: 'danger',
      }),
    );
  }, []);

  const showNormalToast = useCallback((normalText: any) => {
    dispatch(
      updateBulkAppState({
        appToast: true,
        appToastMessage: normalText,
        appToastType: 'dark',
      }),
    );
  }, []);

  return {
    showSuccessToast,
    showErrorToast,
    showNormalToast,
  };
}

export default useToast;
