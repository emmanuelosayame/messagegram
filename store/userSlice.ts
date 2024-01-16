import type { StateCreator } from 'zustand';
import { UserSlice } from './types';

export const userSlice: StateCreator<UserSlice> = (set, get) => ({
  auth: { loading: false, user: null, error: undefined },
  setAuthState: (auth) => set({ auth }),
});
