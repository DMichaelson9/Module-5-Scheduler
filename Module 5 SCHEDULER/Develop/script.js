$(function () {
  $(".saveBtn").on("click", function () {  
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, text);
  });

  function updateHour() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {

      var webHour = parseInt($(this).attr("id").split("-")[1]);
      if (webHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (webHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }

    });
  }

  $(".time-block").each(function () {
    var hour = $(this).attr("id");
    var text = localStorage.getItem(hour);
    $(this).find(".description").val(text);
  });

  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  setInterval(updateHour, 10000);
  updateHour();
});

