/* ===== PARTNERS (shared on all pages) ===== */

const partners = [
  { src: "images/partner-bustour.png", alt: "Bus Tours" },
  { src: "images/partner-cabinrental.png", alt: "Cabin Rentals" },
  { src: "images/partner-campingadv.png", alt: "Camping Adventures" },
  { src: "images/partner-collegetours.png", alt: "College Tours" },
  { src: "images/partner-rentalbike.png", alt: "Bike Rentals" },
  { src: "images/partner-tourgroup.png", alt: "Tour Groups" }
];

// We now target a DIV row, not a UL
const partnersRow = document.getElementById("partnersRow");

if (partnersRow) {
  partners.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-2 mb-3";

    const bubble = document.createElement("div");
    bubble.className = "partner-bubble";

    const img = document.createElement("img");
    img.src = p.src;
    img.alt = p.alt;

    bubble.appendChild(img);
    col.appendChild(bubble);
    partnersRow.appendChild(col);
  });
}