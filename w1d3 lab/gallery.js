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

// Tag helpers mentioned in the PDF
const openCaptionTag = '<p class="caption">';
const closeCaptionTag = "</p>";
const openDescTag = '<div class="description">';
const closeDescTag = "</div>";

const galleryEl = document.getElementById("gallery");

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

  // Description (hidden until hover - your CSS controls this)
  const descWrap = document.createElement("div");
  descWrap.innerHTML = openDescTag + descTexts[i] + closeDescTag;

  li.appendChild(img);
  li.appendChild(captionWrap);
  li.appendChild(descWrap);

  galleryEl.appendChild(li);
}
