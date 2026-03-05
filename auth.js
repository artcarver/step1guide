// auth.js

// Global Firebase variables for use across all pages
let auth = null;
let db = null;
let currentUser = null;

try {
  const firebaseConfig = {
    apiKey: "AIzaSyBBzOGRAhCD5AOnHnAN47q-j_coCMx2buo",
    authDomain: "sketchy-tracker.firebaseapp.com",
    projectId: "sketchy-tracker",
    storageBucket: "sketchy-tracker.firebasestorage.app",
    messagingSenderId: "970470066509",
    appId: "1:970470066509:web:14c7300fb1dd882a038f04",
    measurementId: "G-2KVBCP4THR"
  };

  // Defensively initialize Firebase only if it hasn't been initialized yet
  if (!window.firebase) {
    console.error("Firebase SDK not found. Ensure it is loaded before auth.js");
  } else {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
    auth = firebase.auth();
    db = firebase.firestore();

    // Enable Firestore offline persistence to replace custom localStorage hacks
    db.enablePersistence()
      .catch((err) => {
        if (err.code === 'failed-precondition') {
          console.warn("Firebase Persistence: Multiple tabs open. Persistence can only be enabled in one tab at a time.");
        } else if (err.code === 'unimplemented') {
          console.warn("Firebase Persistence: The current browser does not support all features required to enable persistence.");
        } else {
          console.error("Firebase Persistence Error:", err);
        }
      });

    // Centralized Auth State Listener
    auth.onAuthStateChanged((user) => {
      currentUser = user;
      
      // Dispatch a custom event so individual pages can safely listen for auth changes 
      // without needing their own onAuthStateChanged listeners, reducing duplicate calls.
      const event = new CustomEvent('appAuthStateChanged', { detail: { user: user } });
      window.dispatchEvent(event);
    });
  }
} catch (error) {
  console.error("Critical Firebase Initialization Error:", error);
}
