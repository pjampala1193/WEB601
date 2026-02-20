$(document).ready(function () {
  $("#loadDataBtn").on("click", function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/1",
      method: "GET",
      success: function (data) {
        console.log("Ajax data:", data);
      }
    });
  });
});