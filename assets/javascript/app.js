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

var database = firebase.database()
var testing = "19:40"
console.log(moment(testing, "HH/mm").valueOf())


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

//TODO: Take data from database and display it in table
database.ref().on("child_added", function (childSnapshot) {

    var newTable = $("<tr>")

    // grab train name from database and append to table
    var tableName = $("<td>").text(childSnapshot.val().Name)
    newTable.append(tableName)

    // grab train destination from database and append to table
    var tableDestination = $("<td>").text(childSnapshot.val().Destination)
    newTable.append(tableDestination)

    // grab train frequency from database and append to table
    var tableFrequency = $("<td>").text(childSnapshot.val().Frequency)
    newTable.append(tableFrequency)

    //TODO: Convert first train time to unix using moment.js


    $("#train-table").append(newTable)
})
