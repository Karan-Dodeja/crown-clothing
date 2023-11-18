import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGoogleRedirect, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"


const SignIn = () => {

    useEffect(async () => {
        const response = await getRedirectResult(auth)
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
    }

    return (
        <div>
            <h1>Sign In Page!</h1>
            <button onClick={logGoogleUser}>
                Sign with Google
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign with Google Redirect
            </button>
        </div>
    )
}

export default SignIn;