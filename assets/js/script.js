// Variables for elements
var currentDayEl = $("#current-day")
var descriptionEl = $("#description")
var saveButton = $("#save-btn") 
var clearButton = $("#clear-btn")



//Display current date and time
function displayDate() {
   var rightNow = moment().format("dddd, MMMM Do, YYYY, h:mm:ss a");
    currentDayEl.text(rightNow);
}

setInterval(() => {
    displayDate()
}, 1000);



// Need function to determine present, past, future time/hour
function checkTime(hour) {
    var currentHour = moment().format("HH");
    var timeHour = hour.data(index);

    if (timeHour < currentHour) {
        $(hour).addClass("past");
    } else if (timeHour == currentHour) {
        $(hour).addClass("present");
    } else if (timeHour > currentHour) {
        $(hour).addClass("future");
    }
}

setInterval(() => {
    displayDate()
}, 1000);


// Store description in local storage - WIP
function addText(event) {
    event.preventDefault();
    localStorage
}


// // Save button - WIP
// saveButton.click(addText);
//     displayDescript();



// Clear Schedule button - WIP
clearButton.on("click"), function() {
    localStorage.clear();
    descriptionEl.clear();
}


