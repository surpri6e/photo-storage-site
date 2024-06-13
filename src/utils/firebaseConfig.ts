import { IFirebaseConfig } from '../types/IFirebaseConfig';

export const firebaseConfig: IFirebaseConfig = {
    apiKey: import.meta.env.VITE_APP_apiKey,
    appId: import.meta.env.VITE_APP_appId,
    authDomain: import.meta.env.VITE_APP_authDomain,
    measurementId: import.meta.env.VITE_APP_measurementId,
    messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
    projectId: import.meta.env.VITE_APP_projectId,
    storageBucket: import.meta.env.VITE_APP_storageBucket,
};
