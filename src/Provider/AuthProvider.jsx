import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config'
import { useEffect, useState } from "react";
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading] = useState(false);
    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const login = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginwithgoogle =(provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const githublogin = (gitprovider)=>{
        setLoading(true);
        return signInWithPopup(auth, gitprovider)
    }
    const logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authinfo = {user, createUser, login, loginwithgoogle, githublogin, loading, logout}
    // setting observer
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('Observing current user inside useEffect of Auth provider', currentUser);
            setLoading(false);
        });
        return unsubscribe;
    },[])
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;