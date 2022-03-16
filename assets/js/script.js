// Variables for elements
var currentDayEl = $("#current-day")
var saveButton = $(".save-btn") 
var clearButton = $(".clear-btn")

var eightAM = $(".hour8")
var nineAM = $(".hour9")
var tenAM = $(".hour10")
var elevenAM = $(".hour11")
var twelvePM = $(".hour12")
var onePM = $(".hour13")
var twoPM = $(".hour14")
var threePM = $(".hour15")
var fourPM = $(".hour16")
var fivePM = $(".hour17")

//Function displays current date and time at top of the page
function displayDate() {
    var rightNow = moment().format("dddd, MMMM Do, YYYY, h:mm:ss a");
    currentDayEl.text(rightNow);

}

setInterval(() => {
    displayDate()
}, 1000);

//Function checks a specific hour block if it is past, present, or future hour and sets the applicable class for it
function checkTime(hour) {
    var currentHour = moment().format("HH");
    var timeHour = hour.data("index");

    if (timeHour < currentHour) {
        $(hour).addClass("past");
    } else if (timeHour == currentHour) {
        $(hour).addClass("present");
    } else if (timeHour > currentHour) {
        $(hour).addClass("future");
    }
}

setInterval(() => {
    displayDate();
}, 60000);

// Interval runs the checkTime function every minute on all timeblocks to keep up to date on application
setInterval(() => {
    checkTime(eightAM);
    checkTime(nineAM);
    checkTime(tenAM);
    checkTime(elevenAM);
    checkTime(twelvePM);
    checkTime(onePM);
    checkTime(twoPM);
    checkTime(threePM);
    checkTime(fourPM);
    checkTime(fivePM);

}, 60000);


// Function stores input in local storage in order to be retrieved later
function setDescription() {
    localStorage.setItem("hour8", eightAM.val());
    localStorage.setItem("hour9", nineAM.val());
    localStorage.setItem("hour10", tenAM.val());
    localStorage.setItem("hour11", elevenAM.val());
    localStorage.setItem("hour12", twelvePM.val());
    localStorage.setItem("hour13", onePM.val());
    localStorage.setItem("hour14", twoPM.val());
    localStorage.setItem("hour15", threePM.val());
    localStorage.setItem("hour16", fourPM.val());
    localStorage.setItem("hour17", fivePM.val());
    
}

// Function retrieves input stored in local storage and sets it the matching text area for each hour
function getDescription() {
    var descriptEight = localStorage.getItem("hour8");
    var descriptNine = localStorage.getItem("hour9");
    var descriptTen = localStorage.getItem("hour10");
    var descriptEleven = localStorage.getItem("hour11");
    var descriptTwelve = localStorage.getItem("hour12");
    var descriptThirteen = localStorage.getItem("hour13");
    var descriptFourteen = localStorage.getItem("hour14");
    var descriptFifteen = localStorage.getItem("hour15");
    var descriptSixteen = localStorage.getItem("hourr16");
    var descriptSeventeen = localStorage.getItem("hour17");

    eightAM.text(descriptEight);
    nineAM.text(descriptNine);
    tenAM.text(descriptTen);
    elevenAM.text(descriptEleven);
    twelvePM.text(descriptTwelve);
    onePM.text(descriptThirteen);
    twoPM.text(descriptFourteen);
    threePM.text(descriptFifteen);
    fourPM.text(descriptSixteen);
    fivePM.text(descriptSeventeen);

}

// All functions needed to run application in order for it work from initial load in the browser to when user interacts with web application and hour time is up to date
getDescription();
displayDate();
checkTime(eightAM);
checkTime(nineAM);
checkTime(tenAM);
checkTime(elevenAM);
checkTime(twelvePM);
checkTime(onePM);
checkTime(twoPM);
checkTime(threePM);
checkTime(fourPM);
checkTime(fivePM);

// // Save button 
saveButton.on("click", function() {
    setDescription();
});

// Clear Schedule button 
clearButton.on("click"), setDescription(); {
    localStorage.clear();
    setDescription.clear();
}


