import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';

type AuthState = {
  loading: boolean;
  user: User | null;
  error: FirebaseError | undefined;
};

export interface UserSlice {
  auth: AuthState;
  setAuthState: (state: AuthState) => void;
}
