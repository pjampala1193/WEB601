/* Splashes Project - jQuery features (Accordion + Datepicker + Ajax) */
$(function () {
  // 1) jQuery UI Accordion component (only runs if present)
  const $faq = $("#faqAccordion");
  if ($faq.length) {
    $faq.accordion({
      collapsible: true,
      heightStyle: "content",
      active: false
    });
  }

  // 2) jQuery UI Datepicker component (only runs if present)
  const $date = $("#preferredDate");
  if ($date.length) {
    $date.datepicker({
      minDate: 0,
      dateFormat: "MM d, yy"
    });
  }

  // 3) Ajax feature: load JSON into a container (only runs if present)
  const $ajax = $("#ajaxLocations");
  if ($ajax.length) {
    $.getJSON("assets/data/locations.json")
      .done(function (data) {
        const regions = (data && data.regions) ? data.regions : [];
        if (!regions.length) {
          $ajax.html("<p style='margin:0;'>No locations available.</p>");
          return;
        }

        let html = "<div class='ajax-locations'>";
        regions.forEach(function (r) {
          html += `
            <div class="ajax-region">
              <h3>${escapeHtml(r.name)}</h3>
              <p class="ajax-phone"><strong>Phone:</strong> ${escapeHtml(r.phone || "")}</p>
              <ul>
                ${(r.locations || []).map(function (loc) {
                  return `<li><a href="#">${escapeHtml(loc)}</a></li>`;
                }).join("")}
              </ul>
            </div>
          `;
        });
        html += "</div>";

        $ajax.html(html);
      })
      .fail(function () {
        $ajax.html("<p style='margin:0;'>Could not load locations right now.</p>");
      });
  }
});

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}