import { createContext } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const valueType={createUser,signIn}
    return (
        <div>
            <AuthContext.Provider value={valueType}>
              {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;