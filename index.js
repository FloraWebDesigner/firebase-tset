// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
    getDatabase,
    onValue,
    ref
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBpAHepzP2smg_eBhAK0MsAK5ixZeeXx9s",
    authDomain: "mydemo-3b6df.firebaseapp.com",
    projectId: "mydemo-3b6df",
    storageBucket: "mydemo-3b6df.firebasestorage.app",
    messagingSenderId: "133645988558",
    appId: "1:133645988558:web:dc0e84bb04d6b00472569f",
    measurementId: "G-6DKQMMKR7L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  // Initializa Database
  const database = getDatabase();
  const messages = ref(database, "/messages");

  // Load messages on data event
  onValue(
    messages,
    (snapshot) => {
        // Create a reference
        const ul=document.getElementById('messages');
        ul.replaceChildren();

        // Loop through messages and add them to the url
        snapshot.forEach(childSnapshot => {
            // fetch the data from the snapshot
            const childData = childSnapshot.val();

           // console.log(childSnapshot);
           const text = document.createTextNode(
            childData.message+"~"+childData.name
           );
           const li = document.createElement("li");
           li.appendChild(text);
           ul.appendChild(li);
        });
    }
  );