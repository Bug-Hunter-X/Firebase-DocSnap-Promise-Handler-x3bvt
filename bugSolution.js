The solution is to always handle the promise returned by `getDoc()` using `.then()` or `async/await`. Here's how you can fix the bug using `async/await`:
```javascript
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

async function getData(docId) {
  const docRef = doc(db, "yourCollection", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
}

getData("yourDocId").then(data => {
    //Process the data
}).catch(error => {
    console.error("Error fetching data", error);
});
```
Using `.then()`:
```javascript
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

const docRef = doc(db, "yourCollection", "yourDocId");
getDoc(docRef).then((docSnap) => {
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error fetching document: ", error);
});
```