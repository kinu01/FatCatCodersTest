import { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import errors from '../../../constants/errors';
import { fetchRockets } from '../../../services';
import { Rocket } from '../../../types/rocketTypes';

const useRocketsRequest = () => {
  const [loading, setLoading] = useState(false);
  const [rockets, setRockets] = useState<Rocket[]>([]);

  useEffect(() => {
    fetchRocketsRequest();
  }, []);

  const fetchRocketsRequest = async () => {
    try {
      setLoading(true);
      const res = await fetchRockets();
      setRockets(res.data as Rocket[]);
      setLoading(false);
    } catch (error) {
      console.warn(error);
      setLoading(false);
      Toast.show(errors.rockets_failed);
    }
  };

  return {
    loading,
    rockets,
  };
};

export default useRocketsRequest;
