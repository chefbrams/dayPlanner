$(document).ready(function () {// essentially tells engine to load 1)html & 2)css first.
    //display current day & time.
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));



    //Assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#block9 .description").val(localStorage.getItem("block9"));
    $("#block10 .description").val(localStorage.getItem("block10"));
    $("#block11 .description").val(localStorage.getItem("block11"));
    $("#block12 .description").val(localStorage.getItem("block12"));
    $("#block13 .description").val(localStorage.getItem("block13"));
    $("#block14 description").val(localStorage.getItem("block14"));
    $("#block15 .description").val(localStorage.getItem("block15"));
    $("#block16 .description").val(localStorage.getItem("block16"));
    $("#block17 .description").val(localStorage.getItem("block17"));
})
$("#clearBtn").on("click", function () {
    localStorage.clear();
    location.reload()
});

var currentTime = new Date().getHours();
if (currentTime > 9) {
    $("#event1").addClass("past");
}
if (currentTime >= 9 && currentTime != 10) {
    $("#event1").addClass("present");
}
if (currentTime < 9) {
    $("#event1").addClass("future");
}

if (currentTime > 10) {
    $("#event2").addClass("past");
}
if (currentTime >= 10 && currentTime != 11) {
    $("#event2").addClass("present");
}
if (currentTime < 10) {
    $("#event2").addClass("future");
}

if (currentTime > 11) {
    $("#event3").addClass("past");
}
if (currentTime >= 11 && currentTime != 12) {
    $("#event3").addClass("present");
}
if (currentTime < 11) {
    $("#event3").addClass("future");
}

if (currentTime > 12) {
    $("#event4").addClass("past");
}
if (currentTime >= 12 && currentTime != 13) {
    $("#event4").addClass("present");
}
if (currentTime < 12) {
    $("#event4").addClass("future");
}

if (currentTime > 13) {
    $("#event5").addClass("past");
}
if (currentTime >= 13 && currentTime != 14) {
    $("#event5").addClass("present");
}
if (currentTime < 13) {
    $("#event5").addClass("future");
}

if (currentTime > 14) {
    $("#event6").addClass("past");
}
if (currentTime >= 14 && currentTime != 15) {
    $("#event6").addClass("present");
}
if (currentTime < 14) {
    $("#event6").addClass("future");
}

if (currentTime > 15) {
    $("#event7").addClass("past");
}
if (currentTime >= 15 && currentTime != 16) {
    $("#event7").addClass("present");
}
if (currentTime < 15) {
    $("#event7").addClass("future");
}

if (currentTime > 16) {
    $("#event8").addClass("past");
}
if (currentTime >= 16 && currentTime != 17) {
    $("#event8").addClass("present");
}
if (currentTime < 16) {
    $("#event8").addClass("future");
}

if (currentTime > 17) {
    $("#event9").addClass("past");
}
if (currentTime >= 17 && currentTime != 18) {
    $("#event9").addClass("present");
}
if (currentTime < 17) {
    $("#event9").addClass("future");
}




