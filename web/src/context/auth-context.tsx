import { OAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth, provider } from "../../../firebase/firebase";

interface IAuthContextProviderProps {
    children: React.ReactNode
  }

interface IAuthContext {
    handleSignIn: () => Promise<void>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export function AuthContextProvider({children}: IAuthContextProviderProps) {

    async function handleSignIn() {
        await signInWithPopup(auth, provider)
        .then((result) => {
            // User is signed in.
            // IdP data available in result.additionalUserInfo.profile.
        
            // Get the OAuth access token and ID Token
            const credential = OAuthProvider.credentialFromResult(result);
            const accessToken = credential?.accessToken;
            const idToken = credential?.idToken;
          })
          .catch((error) => {
            // Handle error.
            console.log(error)
          });
    }

      return (
        <AuthContext.Provider value={{ handleSignIn }}>
            {children}
        </AuthContext.Provider>
      )
}