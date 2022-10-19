import { useState, useEffect } from 'react';

export const useSafeDate = (date) => {
  const [safeDate, setSafeDate] = useState(null);

  useEffect(() => {
    setSafeDate(new Date(date).toLocaleDateString());
  }, []);

  return safeDate;
};
