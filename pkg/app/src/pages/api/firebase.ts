import admin from 'firebase-admin';
import { firebaseAdminConfig } from '../../../blogify-app-cred';

try {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminConfig),
  });
  console.log('Initialized.');
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (error instanceof Error) {
    if (!/already exists/u.test(error.message)) {
      console.error('Firebase admin initialization error', error.stack);
    }
  } else {
    console.error('Unexpected error', error);
  }
}

export default admin;
