const photos = [
  "images/pet1.jpg",
  "images/pet2.jpg",
  "images/pet3.jpg",
  "images/pet4.jpg",
  "images/pet5.jpg",
  "images/pet6.jpg",
  "images/pet7.jpg",
  "images/pet8.jpg",
  "images/pet9.jpg",
  "images/pet10.jpg",
];

// Text arrays required by the assignment
const captionTexts = [
  "Buddy",
  "Luna",
  "Max",
  "Bella",
  "Rocky",
  "Milo",
  "Daisy",
  "Charlie",
  "Coco",
  "Oscar",
];

const descTexts = [
  "Friendly and loves belly rubs.",
  "Calm, gentle, and great with kids.",
  "Playful pup who enjoys long walks.",
  "Sweet and curious, learning fast.",
  "Loyal companion who loves treats.",
  "Energetic and always ready to play.",
  "Shy at first, then super cuddly.",
  "Smart and loves training games.",
  "Goofy personality and very social.",
  "Independent but super affectionate.",
];

// NEW: array for the text information (required by PDF)
const infoTexts = [
  "Buddy is a confident little explorer who loves people and enjoys cuddle time after play.",
  "Luna is gentle and calm, perfect for a quiet home and great with kids and visitors.",
  "Max is energetic and loves walks, games, and learning simple tricks for treats.",
  "Bella is curious and sweet, and she warms up fast once she feels safe and loved.",
  "Rocky is loyal and food-motivated, making him a fun buddy for training and hikes.",
  "Milo is always ready to play and would do great in a home that enjoys activity.",
  "Daisy starts shy, but once she trusts you she turns into a total cuddle bug.",
  "Charlie is smart and alert, and he enjoys puzzle toys and training games.",
  "Coco is goofy and social, always happy to be around people and other pets.",
  "Oscar is independent but affectionate, the type that checks in for pets and love.",
];

// Tag helpers mentioned in the PDF
const openCaptionTag = '<p class="caption">';
const closeCaptionTag = "</p>";
const openDescTag = '<div class="description">';
const closeDescTag = "</div>";

// NEW: variable for the text to close info box (required by PDF)
const closeInfoText = "Click This To Close";

const galleryEl = document.getElementById("gallery");

// Info box elements
const infoBox = document.getElementById("infoBox");
const infoHeading = document.getElementById("infoHeading");
const infoText = document.getElementById("infoText");
const infoClose = document.getElementById("infoClose");
infoClose.textContent = closeInfoText;

// Helpers
function showInfoBox(index) {
  infoHeading.innerHTML = captionTexts[index]; 
  infoText.innerHTML = infoTexts[index];       
  infoBox.style.visibility = "visible";       
}

function hideInfoBox() {
  infoBox.style.visibility = "hidden";
}

// Close link click
infoClose.addEventListener("click", (e) => {
  e.preventDefault();
  hideInfoBox();
});

// Build gallery
for (let i = 0; i < photos.length; i++) {
  const li = document.createElement("li");
  li.id = `photo${i + 1}`;

  const img = document.createElement("img");
  img.className = "photo";
  img.src = photos[i];
  img.alt = `${captionTexts[i]} - pet photo`;

  // Caption (always visible)
  const captionWrap = document.createElement("div");
  captionWrap.innerHTML = openCaptionTag + captionTexts[i] + closeCaptionTag;

  // Description (clickable)
  const descWrap = document.createElement("div");
  descWrap.innerHTML = openDescTag + descTexts[i] + closeDescTag;

  li.appendChild(img);
  li.appendChild(captionWrap);
  li.appendChild(descWrap);
  galleryEl.appendChild(li);

  // Add click listener to the actual .description element we just created
  const descBar = li.querySelector(".description"); 
  descBar.addEventListener("click", () => showInfoBox(i)); 
}
