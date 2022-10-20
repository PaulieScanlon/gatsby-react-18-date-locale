import { useState, useEffect } from 'react';

export const useHydrationSafeDate = (date) => {
  const [safeDate, setSafeDate] = useState(null);

  useEffect(() => {
    setSafeDate(new Date(date).toLocaleDateString());
  }, [date]);

  return safeDate;
};
