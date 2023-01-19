import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";
import UseLoading from "../hooks/useLoading";

const authContext = createContext()

export function useAuth() {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const [loading, loadingFalse, loadingTrue] = UseLoading()

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setUser(user)
        loadingFalse()
      })

      return () => unsubscribe()
    }, [user])

    return <authContext.Provider value={{ loading, user, loginWithGoogle, logout }}>{children}</authContext.Provider>

    async function loginWithGoogle() {
        await signInWithRedirect(auth, googleProvider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
        })
    }

    function logout() {
        signOut(auth)
        loadingTrue()
    }
}