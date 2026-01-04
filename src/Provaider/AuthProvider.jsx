

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(loading, user);

    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)

    };

    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const passwordReset = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }


    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

        });
        return () => {

            unsubscribe();
        }

    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signin,
        loading,
        setLoading,
        updateUser,
        signInWithGoogle,
        passwordReset,
    }
    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>
        </div>
    )
}

export { AuthContext }

export default AuthProvider