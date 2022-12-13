console.log(this);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  console.log("Ready");
  //display current day & time on the top of the page below h1>p element
  $("#currentDay").text(moment().format("dddd, MMMM Do")); // https://momentjs.com/docs/#/displaying/
   $(".saveBtn").on("click", function () {
      //get nearby values.
      let text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
      let time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

  // Set item in local storage , Source: https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
      localStorage.setItem(time, text);
  })
  //Get item from the local storage, 
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));

  function dayScheduler() {
      //get current number of hours.
      let currentTime = moment().hour(); // https://day.js.org/en/
      // [refrence sources: https://www.geeksforgeeks.org/moment-js-introduction/]
         // loop over time blocks
      $(".time-block").each(function () {
          let blockTime = parseInt($(this).attr("id").split("-")[1]);
          console.log( blockTime, currentTime)

          if (blockTime < currentTime) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (blockTime === currentTime) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
          }
      })
  }
  dayScheduler(); //call the function
  console.log("End of the Day!");
})