import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAk4iuESiJbUERnghUH1SojL7ISxlxdlaw",
  authDomain: "dummynetflix-36221.firebaseapp.com",
  projectId: "dummynetflix-36221",
  storageBucket: "dummynetflix-36221.appspot.com",
  messagingSenderId: "516235885185",
  appId: "1:516235885185:web:1b393baf7951026f706b80"  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
