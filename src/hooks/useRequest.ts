import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export interface ResponseState {
  data: any,
  loading: boolean,
  error: Error | null,
}

export const useRequest = (request: () => Promise<AxiosResponse>): ResponseState => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setData(null);
        setError(null);
        setLoading(true);

        const response = await request();
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [request]);

  return {
    data,
    loading,
    error,
  };
};
