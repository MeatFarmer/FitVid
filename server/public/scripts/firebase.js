var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert("../../fitvid-key.json"),
  databaseURL: "https://fitvid-330ed.firebaseio.com"
});
