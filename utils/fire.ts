import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore';

import { getApps, initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  // setPersistence,
  // inMemoryPersistence,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY || '',
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN || '',
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID || '',
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET || '',
  messagingSenderId: process.env.EXPO_PUBLIC_MESSENGER_ID || '',
  appId: process.env.EXPO_PUBLIC_APP_ID || '',
};

const apps = getApps();

const app = !apps.length ? initializeApp(firebaseConfig) : apps[0];

const auth = getAuth(app);

const db = initializeFirestore(app, {
  localCache: persistentLocalCache(
    /*settings*/ { tabManager: persistentMultipleTabManager() }
  ),
});

const storage = getStorage(app);

// setPersistence(auth, inMemoryPersistence);

export {
  auth,
  db,
  storage,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
};
