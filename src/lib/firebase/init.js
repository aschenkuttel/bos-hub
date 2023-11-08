// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAEb6cNZQplDsD4j33O0ezHS3H5k6TsPX0',
    authDomain: 'bos-hub.firebaseapp.com',
    projectId: 'bos-hub',
    storageBucket: 'bos-hub.appspot.com',
    messagingSenderId: '117682091914',
    appId: '1:117682091914:web:c41e29a908fbe7503e3a73',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
