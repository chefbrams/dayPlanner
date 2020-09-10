var currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDate);

var tasks = JSON.parse(localStorage.getItem("tasks")) || []
$(".btn").on("click", function (event) {
    console.log(event.target);
    console.log($(this).parent().prev().children("textarea").val())
    var currentTask = $(this).parent().prev().children("textarea").val();
    var currentTime = $(this).attr("id");
    console.log(currentTime)
    var taskObj = {
        time: currentTime,
        task: currentTask
    }
    tasks.push(taskObj)

    localStorage.setItem("tasks", JSON.stringify(tasks))
});


//function to take tasks from local storage and update DOM
// check past present and future Event