// import { initializeApp } from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/database'

export const config = {
  firebaseConfig: {
    apiKey: 'AIzaSyB6b20q_Pw88ru8c0W_3BqbMxLeLW9t4mA',
    authDomain: 'auth-register-42356.firebaseapp.com',
    databaseURL: 'https://auth-register-42356-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'auth-register-42356',
    storageBucket: 'auth-register-42356.appspot.com',
    messagingSenderId: '351440862222',
    appId: '1:351440862222:web:2da743c0d70c1ce94e105f',
  },
}

export const fireAuth = firebase.initializeApp(config.firebaseConfig)
export default firebase.database().ref()
// export const contactRef = databaseRef.child('contacts')
