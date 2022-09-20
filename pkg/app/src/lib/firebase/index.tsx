// Next Imports
import getConfig from 'next/config';

// Firebase Imports
import { getApp, initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const { publicRuntimeConfig } = getConfig();
const firebaseConfig = publicRuntimeConfig.firebaseConfig;
let app: FirebaseApp;

const apps = getApps();

apps.length ? (app = getApp()) : (app = initializeApp(firebaseConfig));
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
