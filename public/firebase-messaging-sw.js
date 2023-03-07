importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
const firebaseConfig = {
  apiKey: "AIzaSyCSP8ZyJGFhKFPcCZbr4h2ezW8wq8jEhys",
  authDomain: "codebook-a94cf.firebaseapp.com",
  projectId: "codebook-a94cf",
  storageBucket: "codebook-a94cf.appspot.com",
  messagingSenderId: "146589009389",
  appId: "1:146589009389:web:8f0d96e8d065370857d3e4",
  measurementId: "G-95Z5EHE64V",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
