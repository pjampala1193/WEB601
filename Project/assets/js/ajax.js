// assets/js/ajax.js
$(function () {
  $("#ajaxLoadBtn").on("click", function () {
    $("#ajaxResult").text("Loading...");

    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/1",
      method: "GET",
      success: function (data) {
        $("#ajaxResult").html(
          "<strong>Ajax Loaded:</strong><br>" +
          "Title: " + data.title + "<br>" +
          "Body: " + data.body
        );
      },
      error: function () {
        $("#ajaxResult").text("Ajax failed. Try again.");
      }
    });
  });
});