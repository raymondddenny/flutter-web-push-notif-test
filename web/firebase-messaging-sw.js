importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "YOUR API KEY",
  authDomain: "YOUR APP AUTH DOMAIN",
  projectId: "YOUR APP PROJECT ID",
  storageBucket: "YOUR APP STORAGE BUCKET",
  messagingSenderId: "YOUT APP MESSAGE SENDER ID",
  appId: "YOUR APP ID",
});

// retreive an instance of Firebase Messaging so that it can handle background messages
const messaging = firebase.messaging();
