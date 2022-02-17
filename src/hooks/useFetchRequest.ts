import { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import errors from '../constants/errors';
import { EndPoint, fetchRequest } from '../services';
import { Rocket } from '../types/rocketTypes';
import { Crew } from '../types/crewTypes';

const useFetchRequest = (endPoint: EndPoint) => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<(Rocket | Crew)[]>([]);

  useEffect(() => {
    makeFetchRequest();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [endPoint]);

  const makeFetchRequest = async () => {
    try {
      setLoading(true);
      const res = await fetchRequest(endPoint);
      setList(res.data);
      setLoading(false);
    } catch (error) {
      console.warn(error);
      setLoading(false);
      Toast.show(errors.list_failed);
    }
  };

  return {
    loading,
    list,
  };
};

export default useFetchRequest;
