import {useState} from 'react';
import HttpClient from '../../Utilities/HttpClient';
import useToast from './useToast';
import {useTranslation} from 'react-i18next';

function useHTTP(customUrl?: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {showErrorToast, showSuccessToast} = useToast();
  const {t} = useTranslation();

  async function initiateRequest(
    endPoint: string,
    method: string,
    body: any,
    postSuccessFunction: any,
    postErrorFunction: any,
    hideToast: boolean = false,
    hideLoading: boolean = false,
    customHeaders?: any,
  ) {
    try {
      setError(false);
      if (!hideLoading) setLoading(true);
      const responseData = await HttpClient.request(
        endPoint,
        method,
        body,
        customHeaders,
        customUrl,
      );
      console.log(endPoint, responseData);
      if (responseData) {
        if (responseData.data) {
          if (!hideToast) showSuccessToast(responseData.data.message);
        }
      }
      postSuccessFunction(responseData);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      console.log(error.response);
      if (error.response) {
        if (error.response.data) {
          if (!hideToast) showErrorToast(error.response.data.message);
        }
      } else {
        showErrorToast(t('failedConnectWithServer'));
      }
      postErrorFunction(error);
      setError(true);
      setLoading(false);
    }
  }
  return {
    initiateRequest,
    loading,
    error,
  };
}

export default useHTTP;
