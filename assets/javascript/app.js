var config = {
    apiKey: "AIzaSyDcQzq1LS42JUzxk0evD5z6N5nWk_E5cg0",
    authDomain: "projectvanilla-155df.firebaseapp.com",
    databaseURL: "https://projectvanilla-155df.firebaseio.com",
    projectId: "projectvanilla-155df",
    storageBucket: "projectvanilla-155df.appspot.com",
    messagingSenderId: "44997861253"
  };
  firebase.initializeApp(config);
  
  // Assign the reference to the database to a variable named 'database'
  // var database = ...
  var database = firebase.database()