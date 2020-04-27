import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCpJ16nEK-_WlD5Et9SDGb-FJcxufxJ_bU",
    authDomain: "squad-up-21a9e.firebaseapp.com",
    databaseURL: "https://squad-up-21a9e.firebaseio.com",
    projectId: "squad-up-21a9e",
    storageBucket: "squad-up-21a9e.appspot.com",
    messagingSenderId: "350232073633",
    appId: "1:350232073633:web:af4e44f43c14e789bb67e0",
    measurementId: "G-K5W5NRHPTR"
  };

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: 'MY PROJECT ID' })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })