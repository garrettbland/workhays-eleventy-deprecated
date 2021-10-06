// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDcBWMmheioVRfD6qUlz9FL26HHLsSNDfI',
    authDomain: 'workhays-firebase.firebaseapp.com',
    databaseURL: 'https://workhays-firebase.firebaseio.com',
    projectId: 'workhays-firebase',
    storageBucket: 'workhays-firebase.appspot.com',
    messagingSenderId: '154850091334',
    appId: '1:154850091334:web:d04f857e51be6be36fc547',
}

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig)
