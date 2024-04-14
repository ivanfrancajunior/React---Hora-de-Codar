import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { user } = useSelector((state) => state.auth);

  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    user ? setAuth(true) : setAuth(false);

    setIsLoading(false);
  }, [user]);

  return { auth, isLoading };
};
