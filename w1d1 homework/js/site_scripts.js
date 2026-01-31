/* ===== PARTNERS (shared on all pages) ===== */

const partners = [
  { src: "images/partner-bustour.png", alt: "Bus Tours" },
  { src: "images/partner-cabinrental.png", alt: "Cabin Rentals" },
  { src: "images/partner-campingadv.png", alt: "Camping Adventures" },
  { src: "images/partner-collegetours.png", alt: "College Tours" },
  { src: "images/partner-rentalbike.png", alt: "Bike Rentals" },
  { src: "images/partner-tourgroup.png", alt: "Tour Groups" }
];

const partnersList = document.getElementById("partners");

if (partnersList) {
  partners.forEach(p => {
    const li = document.createElement("li");
    li.className = "partner";

    const img = document.createElement("img");
    img.src = p.src;
    img.alt = p.alt;

    li.appendChild(img);
    partnersList.appendChild(li);
  });
}
