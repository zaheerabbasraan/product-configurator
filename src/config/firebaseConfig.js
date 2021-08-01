import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyD_n5IjUYmPXK0sIW1peyGsU3KNJZmCVFI",
  authDomain: "aeronapp-54bb1.firebaseapp.com",
  projectId: "aeronapp-54bb1",
  storageBucket: "aeronapp-54bb1.appspot.com",
  messagingSenderId: "748993985911",
  appId: "1:748993985911:web:36c1da0e192f77070d7572",
  measurementId: "G-JD7S2DD2FG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
