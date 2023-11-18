import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth"

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
    Firestore
 } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFMgCAPo9WjYZ2gb28F7WwqISYAYGHVVw",
    authDomain: "crwn-clothing-db-b2fa3.firebaseapp.com",
    projectId: "crwn-clothing-db-b2fa3",
    storageBucket: "crwn-clothing-db-b2fa3.appspot.com",
    messagingSenderId: "336694500950",
    appId: "1:336694500950:web:2c5ac0359da7905d9965f7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)  => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
}