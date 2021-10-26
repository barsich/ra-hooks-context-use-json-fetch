import { useEffect, useState } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url, opts)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((resolve) => setData(resolve))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url, opts]);

  return [data, isLoading, hasError];
}
