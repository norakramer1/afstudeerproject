import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

// react context
const UserContext = createContext();

// create a provider
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

// create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

// sign in user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }

// listen for changes in auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ createUser, user, signIn, logout }}>
            {children}
        </UserContext.Provider>
    )
};

// create a custom hook to use the provider
export const UserAuth = () => {
    return useContext(UserContext);
}