import { GoogleAuthProvider, onAuthStateChanged, signInAnonymously, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth, googleProvider } from "../firebase/firebase";
import UseLoading from "../hooks/useLoading";

const authContext = createContext()

export function useAuth() {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const { loading, loadingFalse, loadingTrue } = UseLoading()
    const navigate = useNavigate()

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setUser(user)
        loadingFalse()
      })

      return () => unsubscribe()
    }, [user])

    return <authContext.Provider
        value={{
            loading,
            user,
            loginWithGoogle,
            loginAnonymously,
            logout
        }}>
            {children}
    </authContext.Provider>

    async function loginWithGoogle() {
        await signInWithPopup(auth, googleProvider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
        })
        .finally(() => navigate('/home'))
    }

    async function loginAnonymously() {
        await signInAnonymously(auth)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const user = result.user
        })
        .finally(() => navigate('/home'))
    }

    function logout() {
        signOut(auth)
        loadingTrue()
    }
}