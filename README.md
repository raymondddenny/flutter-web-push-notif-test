# flutter_web_push_notif_test

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.



# SETUP STEPS
- Switch On Notification in laptop
- Create Firebase Project
- Setup the Firebase Credentials
- Create firebase-messaging-sw.js (take a look inside web folder)
- add firebase dependency (Firebase Core & Firebase Messaging)


### In this project i tried using the firebase : 
- onMessage method ✅ -> it run smoothly 😍
- onMessageOpenedApp method ❌ -> idk why it is not working lol
- and onBackgroundMessage method ❌ -> this one too, need more time to debug
