import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';
import firebase from 'firebase/app';

if (!firebase.apps.length) {
  firebase.initializeApp(process.env.FIREBASE_CONFIG);
}

export default firebase;
