
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDFIkd15-VCm5u2LlJLIupG4D49X9Hyx9g",
    authDomain: "hotel-motel-1bc66.firebaseapp.com",
    projectId: "hotel-motel-1bc66",
    storageBucket: "hotel-motel-1bc66.appspot.com",
    messagingSenderId: "458546229980",
    appId: "1:458546229980:web:44b5973e9df3d5e8fa3a19"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth; 