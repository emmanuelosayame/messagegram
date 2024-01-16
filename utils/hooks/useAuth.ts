import { FirebaseError } from 'firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
import { useStore } from '../../store';
import { useEffect } from 'react';
import { auth } from '../fire';

export const useSetAuth = () => {
  const setAuthState = useStore((state) => state.setAuthState);

  useEffect(() => {
    setAuthState({ user: null, error: undefined, loading: true });
    const unsub = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setAuthState({ user, error: undefined, loading: false });
        } else {
          setAuthState({ user: null, error: undefined, loading: false });
        }
      },
      (err) => {
        const error = err as FirebaseError;
        setAuthState({ user: null, error, loading: false });
      }
    );

    return () => {
      unsub();
    };
  }, []);
};
