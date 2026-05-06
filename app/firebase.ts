import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1VSNFkbeinvVsUVe5LK2yECP-u_LtedU",
  authDomain: "wedding-maulana.firebaseapp.com",
  projectId: "wedding-maulana",
  storageBucket: "wedding-maulana.firebasestorage.app",
  messagingSenderId: "575211817387",
  appId: "1:575211817387:web:0225ba8a946e572ca42aee",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendReservation(
  name: string,
  wish: string,
  presence: string,
  numOfPeople: string | null,
  waktuKehadiran: string | null,
) {
  try {
    await addDoc(collection(db, "reservation"), {
      name: name,

      wish: wish,
      presence: presence,
      time: serverTimestamp(),
      numOfPeople: numOfPeople,
      waktuKehadiran: waktuKehadiran,
    });
  } catch (e) {
    alert(e);
  }
}

export { db, sendReservation };
