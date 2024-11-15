// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
    getDatabase,
    push,
    serverTimestamp,
    set,
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

  const submit = document.getElementById("submit");
  submit.addEventListener("click",function() {
    const name = document.getElementById("name");
    const message = document.getElementById("message");

    const newMessage=push(messages);

    set(newMessage,{
        name:name.value,
        message:message.value,
        created_at:serverTimestamp(),

    });

    name.value="";
    message.value="";

  })