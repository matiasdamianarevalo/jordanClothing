// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA335ofm_9-68nb2_HAexY3PN1qNr82O54",
  authDomain: "zapa-a282d.firebaseapp.com",
  projectId: "zapa-a282d",
  storageBucket: "zapa-a282d.appspot.com",
  messagingSenderId: "1089049459253",
  appId: "1:1089049459253:web:1bedaf5c34e1ee9edf4f7c",
};

const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);

export async function getAllItems() {
  const collectionTest = collection(db, "items");
  const snapShotTest = await getDocs(collectionTest);
  const docsCatArray = snapShotTest.docs;
  const dataItems = docsCatArray.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return dataItems;
}

export async function getAllCategory(categoryId) {
  const collectionTest = collection(db, "items");
  const queryCollection = query(
    collectionTest,
    where("categoryId", "==", categoryId)
  );
  const snapShotTest = await getDocs(queryCollection);
  const docsItemArray = snapShotTest.docs;
  const dataItems = docsItemArray.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return dataItems;
}

export async function getSingleItem(id) {
  const uniqueCatRef = doc(db, "items", id);
  const snapShotTest = await getDoc(uniqueCatRef);
  const catItem = snapShotTest.data();
  catItem.id = snapShotTest.id;
  return catItem;
}

export { db };
