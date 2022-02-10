import { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import errors from '../constants/errors';

const useInternetConnection = () => {
  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.isInternetReachable === false) {
      return Toast.show(errors.internet_connection_failed);
    }
  }, [netInfo.isInternetReachable]);
};

export default useInternetConnection;
