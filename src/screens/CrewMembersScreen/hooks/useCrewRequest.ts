import { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import errors from '../../../constants/errors';
import { fetchcrew } from '../../../services';
import { Crew } from '../../../types/crewTypes';

const useCrewRequest = () => {
  const [loading, setLoading] = useState(false);
  const [crew, setCrew] = useState<Crew[]>([]);

  useEffect(() => {
    fetchCrewRequest();
  }, []);

  const fetchCrewRequest = async () => {
    try {
      setLoading(true);
      const res = await fetchcrew();
      setCrew(res.data as Crew[]);
      setLoading(false);
    } catch (error) {
      console.warn(error);
      setLoading(false);
      Toast.show(errors.crew_failed);
    }
  };

  return {
    loading,
    crew,
  };
};

export default useCrewRequest;
