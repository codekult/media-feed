import { PropsWithChildren, createContext, useState, useEffect } from "react";
import {
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "src/utils/firebase";
import { LoginFormData, RegisterFormData } from "src/schema/forms";

const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribeState = auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      setIsAuthReady(true);
    });

    return () => {
      unsubscribeState();
    };
  }, []);

  async function signOut(shouldReload: boolean = true) {
    await auth.signOut();
    setUser(null);

    if (shouldReload) {
      window.location.replace("/");
    }
  }

  async function signInWithEmail({ email, password }: LoginFormData) {
    if (user) {
      await signOut(false);
    }

    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  }

  async function signInWithFacebook() {
    if (user) {
      await signOut(false);
    }

    const result = await signInWithPopup(auth, FacebookProvider);
    return result.user;
  }

  async function signInWithGoogle() {
    if (user) {
      await signOut(false);
    }

    const result = await signInWithPopup(auth, GoogleProvider);
    return result.user;
  }

  async function register({ email, password }: RegisterFormData) {
    if (user) {
      await signOut(false);
    }

    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  }

  return {
    user,
    isAuthReady,
    signInWithEmail,
    signInWithFacebook,
    signInWithGoogle,
    signOut,
    register,
  };
}

export type AuthType = ReturnType<typeof useAuth>;
export const AuthContext = createContext<AuthType>(null!);

export function AuthProvider(props: PropsWithChildren<{}>) {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}
