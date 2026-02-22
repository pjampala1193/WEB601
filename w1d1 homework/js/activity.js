$(document).ready(function () {
  const $table = $("#activities table");
  const $cells = $("#activities table tbody td");

  const $modal = $("#activityModal");
  const $list = $("#selectedList");

  // Store selected items by key
  const selectedMap = new Map(); // key -> { activity, cliffName }

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

  function renderList() {
    $list.empty();

    if (selectedMap.size === 0) {
      // If nothing selected, close the modal (if open)
      $modal.modal("hide");
      return;
    }

    // Build list items
    for (const [key, val] of selectedMap.entries()) {
      const line = `${val.activity} at ${val.cliffName}`;

      const $li = $(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${line}</span>
          <button type="button" class="btn btn-sm btn-outline-danger" data-key="${key}">Remove</button>
        </li>
      `);

      $list.append($li);
    }
  }

  function openModalIfNeeded() {
    if (selectedMap.size > 0) {
      $modal.modal("show");
    }
  }

  // Click handler for selectable cells
  $table.on("click", "td.selectable", function () {
    const $td = $(this);
    const activity = $td.text().trim();

    const colIndex = $td.index();
    const cliffName = $table.find("thead th").eq(colIndex).text().trim();

    const key = "sel-" + colIndex + "-" + activity.replace(/\s+/g, "-").toLowerCase();

    // Toggle highlight
    $td.toggleClass("selected");

    if ($td.hasClass("selected")) {
      selectedMap.set(key, { activity, cliffName });
      renderList();
      openModalIfNeeded();
    } else {
      selectedMap.delete(key);
      renderList();
    }
  });

  // Remove button inside modal
  $list.on("click", "button[data-key]", function () {
    const key = $(this).attr("data-key");

    // Remove from map
    selectedMap.delete(key);

    // Un-highlight the matching cell in the table too
    // key format: sel-<colIndex>-<activity-slug>
    // We can find the cell by matching its column + text
    const parts = key.split("-");
    const colIndex = parseInt(parts[1], 10);

    // Rebuild the activity text from the cell search:
    // We'll simply scan that column for selected cells and match by slug
    const slug = parts.slice(2).join("-");

    $table.find("tbody tr").each(function () {
      const $row = $(this);
      const $td = $row.find("td").eq(colIndex);
      if (!$td.length) return;

      const tdSlug = $td.text().trim().replace(/\s+/g, "-").toLowerCase();
      if (tdSlug === slug) {
        $td.removeClass("selected");
      }
    });

    renderList();
  });

  // Optional: "Get Info" button (kept simple for homework)
  $("#getInfoBtn").on("click", function () {
    // You can extend this later if your homework asks for sending/emailing.
    // For now, just close the modal.
    $modal.modal("hide");
  });
});