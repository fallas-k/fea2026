// firebase.js

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyBQclRqmx_H4xm5ojLdMQ-R8CPmyJ_chTI",

  authDomain: "fea-31da2.firebaseapp.com",

  projectId: "fea-31da2",

  storageBucket: "fea-31da2.firebasestorage.app",

  messagingSenderId: "363035097481",

  appId: "1:363035097481:web:ab078cf3869bbd7fc30958"

};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar (UNA SOLA VEZ)
export { auth, db };