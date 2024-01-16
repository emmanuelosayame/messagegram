import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserSlice } from './types';
import { userSlice } from './userSlice';

export const useStore = create<UserSlice>()((...args) => ({
  ...userSlice(...args),
}));
