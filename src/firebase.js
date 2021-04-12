
import firebase from 'firebase'

    const firebaseConfig = {
        apiKey: "AIzaSyDI_9E4vGbZWmzx7hZKsrhyJ8tUGWtYShA",
        authDomain: "checklist-99eb2.firebaseapp.com",
        projectId: "checklist-99eb2",
        storageBucket: "checklist-99eb2.appspot.com",
        messagingSenderId: "820485223003",
        appId: "1:820485223003:web:6d6263899690132ca8457e",
        measurementId: "G-E68TH87WR9"
      };
  // Initialize Firebase

// const db =firebaseConfig.firestore();
// firebase.initializeApp(firebaseConfig);

const fApp= firebase.initializeApp(firebaseConfig)
const db = fApp.firestore();


export default db;