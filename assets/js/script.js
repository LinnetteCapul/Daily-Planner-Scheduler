
var currentDayEl = $("#currentDay")
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



// Store description in local storage - WIP
function addText(event) {
    event.preventDefault();
    localStorage
}


// Save button - WIP
saveButton.addEventListener("click"), function() {
    preventDefault();
}


// Clear Schedule button - WIP
clearButton.on("click"), function() {
    localStorage.clear();
    descriptionEl.clear();
}


