// CreatedBy: Pravesh Dwivedi Solace
// initialise the firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfpaSuUwRopb00wQxxN84DGMuozTmewqY",
  authDomain: "vue-3-course-92371.firebaseapp.com",
  projectId: "vue-3-course-92371",
  storageBucket: "vue-3-course-92371.appspot.com",
  messagingSenderId: "343581706125",
  appId: "1:343581706125:web:c99ee308b9f9830c415fc4",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
