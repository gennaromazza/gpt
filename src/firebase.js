import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_GEemW6a_3ZPYnYXD3RudyN5aMTy1CA0",
  authDomain: "instavogue-345e0.firebaseapp.com",
  projectId: "instavogue-345e0",
  storageBucket: "instavogue-345e0.firebasestorage.app",
  messagingSenderId: "297410522976",
  appId: "1:297410522976:web:98e4606568535e251ab805",
  measurementId: "G-Z9N6FQ85CH",
};

export const app = initializeApp(firebaseConfig);

export const analyticsPromise = (async () => {
  if (typeof window === "undefined") {
    return null;
  }

  const analyticsSupported = await isSupported();
  return analyticsSupported ? getAnalytics(app) : null;
})();
