import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
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

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    
    console.log(userDocRef);
    
    const userSnapshot = await getDoc(userDocRef);

    // if user does not exists
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (e) {
            console.log('error creating user!');
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInAuthUserWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);