//TODO: Convert first train time to unix
//TODO: Package and send the data to database
//TODO: Take data from database and display it in table
//TODO: calculate the time unil the next train and send it to the table
//TODO: Be happy this shit is finally over, enjoy a beer.


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



//TODO: Capture values from input form
$("#btn-submit").on("click", function () {
    event.preventDefault()
    var tName = $("#train-name").val().trim()
    var tDestination = $("#train-destination").val().trim()
    var tFirst = $("#train-first").val().trim()
    var tFrequency = $("#train-frequency").val().trim()


    database.ref().push({
        Name: tName,
        Destination: tDestination,
        First: tFirst,
        Frequency: tFrequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    })

})
