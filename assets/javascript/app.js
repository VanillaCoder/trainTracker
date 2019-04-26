//TODO: calculate the time unil the next train and send it to the table
//TODO: Be happy this shit is finally over, enjoy a beer.


//find the difference between first time a train leaves to current time
//then use % to find the remaining time until next arrival
//diffTime = moment().diff(moment(firstTimeConverted), "minutes");

var config = {
    apiKey: "AIzaSyDcQzq1LS42JUzxk0evD5z6N5nWk_E5cg0",
    authDomain: "projectvanilla-155df.firebaseapp.com",
    databaseURL: "https://projectvanilla-155df.firebaseio.com",
    projectId: "projectvanilla-155df",
    storageBucket: "projectvanilla-155df.appspot.com",
    messagingSenderId: "44997861253"
};


console.log(moment().diff(moment(1555986600000), "minutes"))


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
    console.log(tFirst)
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

    //calculates the time until the next train arrives 
    var startTime = childSnapshot.val().First
    console.log(startTime)
    var firstTimeConverted = moment(startTime, "HH:mm").subtract(1, "years");
    console.log(moment(firstTimeConverted).format("minutes"))
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes")
    diffTime = diffTime % (childSnapshot.val().Frequency)
    diffTime = (childSnapshot.val().Frequency) - diffTime

    //displays the time of the next train arrival
    var timeEst = moment().add(diffTime, "minutes")
    var tableNext = $("<td>").text(moment(timeEst).format("hh:mm"))
    console.log(moment(timeEst).format("hh:mm"))
    newTable.append(tableNext)


    //minutes away
    var tableAway = $("<td>").text(diffTime)
    newTable.append(tableAway)
    //appends new line of table
    $("#train-table").append(newTable)
})
