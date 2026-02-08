$(document).ready(function () {
  // Target ONLY Activities table body cells
  const $cells = $("#activities table tbody td");

  $cells.each(function () {
    const $td = $(this);

    // Skip first column (activity names)
    if ($td.index() === 0) return;

    // Skip "Not Available" cells
    const text = $td.text().trim().toLowerCase();
    if (text === "not available") return;

    // Mark selectable
    $td.addClass("selectable");
  });

  // Toggle selection for selectable cells
  $("#activities table").on("click", "td.selectable", function () {
    $(this).toggleClass("selected");
  });
});
