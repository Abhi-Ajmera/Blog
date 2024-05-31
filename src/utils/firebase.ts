import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: "blog-77796.firebaseapp.com",
	projectId: "blog-77796",
	storageBucket: "blog-77796.appspot.com",
	messagingSenderId: "945804704367",
	appId: "1:945804704367:web:f8da3b9b6bf7a707f0ab9a",
	measurementId: "G-N0CWSZNXFF",
};

export const app = initializeApp(firebaseConfig);
