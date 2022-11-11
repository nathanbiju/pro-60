import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCh1zYYDj8Z_Me1tSqLQ8TQOUdjOW2uOOg",
  authDomain: "school-attendance-app-46c49.firebaseapp.com",
  databaseURL: "https://school-attendance-app-46c49-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-46c49",
  storageBucket: "school-attendance-app-46c49.appspot.com",
  messagingSenderId: "620758597848",
  appId: "1:620758597848:web:f0e6a9f98d504738e5d7ad"
};

export default !firebase.apps.length ? firebase.iniializeApp(firebaseConfig) : firebase.apps();