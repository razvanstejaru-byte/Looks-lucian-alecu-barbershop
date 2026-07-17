importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAF-7h6_G5rz9wcyliSBF1ag7HqJu2zhNc",
  authDomain: "baby-white-noise-bc63d.firebaseapp.com",
  databaseURL: "https://baby-white-noise-bc63d.firebaseio.com",
  projectId: "baby-white-noise-bc63d",
  storageBucket: "baby-white-noise-bc63d.firebasestorage.app",
  messagingSenderId: "114240488049",
  appId: "1:114240488049:web:64fba858033092e775d1d0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Looks by Lucian Alecu";
  const options = {
    body: payload.notification?.body || "",
    icon: "https://razvanstejaru-byte.github.io/Looks-lucian-alecu-barbershop/icon.png"
  };
  self.registration.showNotification(title, options);
});
