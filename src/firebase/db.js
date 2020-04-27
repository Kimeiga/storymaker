import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC64iqwAmbkAxrBtEQgsRM-2mmJwuXWSlQ",
    authDomain: "storymaker-3d213.firebaseapp.com",
    databaseURL: "https://storymaker-3d213.firebaseio.com",
    projectId: "storymaker-3d213",
    storageBucket: "storymaker-3d213.appspot.com",
    messagingSenderId: "399165734147",
    appId: "1:399165734147:web:c0b7bc963beadfbb933d36"
};

// Get a Firestore instance
export const db = firebase
  .initializeApp(config)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }