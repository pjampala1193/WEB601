$(document).ready(function () {
  const $table = $("#activities table");
  const $cells = $("#activities table tbody td");
  const $displayBox = $("#displaySelected");
  const $result = $("#result");

  // Mark selectable cells (skip first column + skip "Not Available")
  $cells.each(function () {
    const $td = $(this);

    // Skip first column (activity names)
    if ($td.index() === 0) return;

    // Skip "Not Available"
    const text = $td.text().trim();
    if (text.toLowerCase() === "not available") return;

    $td.addClass("selectable");
  });

  // Click handler for selectable cells
  $table.on("click", "td.selectable", function () {
    const $td = $(this);
    const activity = $td.text().trim();

    // Column index in the row (0 = Activity, 1 = West Cliff, etc.)
    const colIndex = $td.index();

    // Get the cliff name from the table header using column index
    const cliffName = $table.find("thead th").eq(colIndex).text().trim();

    // Build a unique id so we can remove the exact line later
    const key = "sel-" + colIndex + "-" + activity.replace(/\s+/g, "-").toLowerCase();

    // Toggle highlight class (your existing behavior)
    $td.toggleClass("selected");

    if ($td.hasClass("selected")) {
      // Make the display box visible
      $displayBox.css("visibility", "visible");
      $displayBox.css("margin-top", "2em");

      // Add the selected activity line (with cliff name)
      // Example: "Bike Meetup Group at East Cliff"
      $result.append(
        `<p data-key="${key}">${activity} at ${cliffName}</p>`
      );
    } else {
      // Remove the matching line
      $result.find(`p[data-key="${key}"]`).remove();

      // If no selections left, hide the display box again
      if ($result.find("p").length === 0) {
        $displayBox.css("visibility", "hidden");
        $displayBox.css("margin-top", "0");
      }
    }
  });
});
