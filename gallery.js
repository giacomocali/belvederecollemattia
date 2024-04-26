/* 
FASI DI QUANDO SI CLICCA SU UN PULSANTE CATEGORIA
1. cancellare tutti gli elementi nel container
2. caricare la stringa con il giusto ammonto di righe e colonne della tabella
3. sostituire le sorgenti delle immagini <img src=""> e dei link <a href="">

COME REALIZZARLO
+ fare le stringhe per le tabelle di ogni categoria
+ costante che contiene le immagini di ogni categoria
+ cercare tag <img> e <a> solo dentro container
*/

var galleryContainer = document.querySelector("#gallery-container");

const threeColRow = `
<div class="row" style="margin-bottom: 10vh;">
    <div class="col">
        <a href="src/gallery/n" data-fancybox="gallery">
            <img src="src/gallery/n" class="img-thumbnail" />
        </a>
    </div>
    <div class="col">
        <a href="src/gallery/n" data-fancybox="gallery">
            <img src="src/gallery/n" class="img-thumbnail" />
        </a>
    </div>
    <div class="col">
        <a href="src/gallery/n" data-fancybox="gallery">
            <img src="src/gallery/n" class="img-thumbnail" />
        </a>
    </div>
</div>
`;
const twoColRow = `
<div class="row" style="margin-bottom: 10vh;">
    <div class="col">
        <a href="src/gallery/n" data-fancybox="gallery">
            <img src="src/gallery/n" class="img-thumbnail" />
        </a>
    </div>
    <div class="col">
        <a href="src/gallery/n" data-fancybox="gallery">
            <img src="src/gallery/n" class="img-thumbnail" />
        </a>
    </div>
</div>
`;
const oneColRow = `
<div class="row" style="margin-bottom: 10vh;">
    <div class="col">
        <a href="src/gallery/n" data-fancybox="gallery">
            <img src="src/gallery/n" class="img-thumbnail" />
        </a>
    </div>
    <div class="col">
        
    </div>
    <div class="col">
        
    </div>
</div>
`;

var outdoorBtn = document.querySelector("#outdoor");
var eventsBtn = document.querySelector("#events");
var personalRoomsBtn = document.querySelector("#personal-rooms");
var eventRoomsBtn = document.querySelector("#event-rooms");
const allButtons = [outdoorBtn, eventsBtn, personalRoomsBtn, eventRoomsBtn];

// OUTDOOR ----------------------------------

let outdoorHtml = `${threeColRow} ${threeColRow} ${threeColRow} ${threeColRow} ${threeColRow} ${oneColRow}`;

const outdoorImages = [
  "src/gallery/esterni0.jpg",
  "src/gallery/esterni1.jpg",
  "src/gallery/esterni2.jpg",
  "src/gallery/esterni3.jpg",
  "src/gallery/esterni4.jpg",
  "src/gallery/esterni5.jpg",
  "src/gallery/esterni6.jpg",
  "src/gallery/esterni7.jpg",
  "src/gallery/esterni8.jpg",
  "src/gallery/esterni9.jpg",
  "src/gallery/esterni10.jpg",
  "src/gallery/esterni11.jpg",
  "src/gallery/esterni12.jpg",
  "src/gallery/esterni13.jpg",
  "src/gallery/esterni14.jpg",
  "src/gallery/esterni15.jpg",
  "src/gallery/esterni16.jpg",
];

function applyCssToButton(btn) {
  for (element of allButtons) {
    element.classList.remove("active");
  }
  btn.classList.add("active");
}

function showOutdoors() {
  galleryContainer.innerHTML = "";
  applyCssToButton(outdoorBtn);
  galleryContainer.innerHTML = outdoorHtml;
  console.log("html loading complete");

  let imgTags = galleryContainer.getElementsByTagName("img");
  let aTags = galleryContainer.getElementsByTagName("a");

  for (let i = 0; i < imgTags.length; i++) {
    if (i <= outdoorImages.length) {
      imgTags[i].src = outdoorImages[i];
    }
  }

  for (let i = 0; i < aTags.length; i++) {
    if (i <= outdoorImages.length) {
      aTags[i].href = outdoorImages[i];
    }
  }
}

showOutdoors();

// EVENTS ----------------------

let eventsHtml = `${threeColRow} ${threeColRow}`;
const eventsImages = [
  "src/gallery/eventi0.jpg",
  "src/gallery/eventi1.jpg",
  "src/gallery/eventi2.jpg",
  "src/gallery/eventi3.jpg",
  "src/gallery/eventi4.jpg",
  "src/gallery/eventi5.jpg",
];

function showEvents() {
  galleryContainer.innerHTML = "";
  applyCssToButton(eventsBtn);
  galleryContainer.innerHTML = eventsHtml;
  console.log("html loading complete");
  let imgTags = galleryContainer.getElementsByTagName("img");
  let aTags = galleryContainer.getElementsByTagName("a");
  for (let i = 0; i < imgTags.length; i++) {
    if (i <= eventsImages.length) {
      imgTags[i].src = eventsImages[i];
    }
  }

  for (let i = 0; i < aTags.length; i++) {
    if (i <= eventsImages.length) {
      aTags[i].href = eventsImages[i];
    }
  }
}

// PERSONAL ROOMS --------------

let personalRoomsHtml = `${threeColRow} ${oneColRow}`;
const personalRoomsImages = [
  "src/gallery/camere0.jpg",
  "src/gallery/camere1.jpg",
  "src/gallery/camere2.jpg",
  "src/gallery/camere3.jpg",
];

function showPersonalRooms() {
  galleryContainer.innerHTML = "";
  applyCssToButton(personalRoomsBtn);
  galleryContainer.innerHTML = personalRoomsHtml;
  console.log("html loading complete");
  let imgTags = galleryContainer.getElementsByTagName("img");
  let aTags = galleryContainer.getElementsByTagName("a");

  for (let i = 0; i < imgTags.length; i++) {
    if (i <= personalRoomsImages.length) {
      imgTags[i].src = personalRoomsImages[i];
    }
  }

  for (let i = 0; i < aTags.length; i++) {
    if (i <= personalRoomsImages.length) {
      aTags[i].href = personalRoomsImages[i];
    }
  }
}

// EVENT ROOMS -----------
let eventRoomsHtml = `${threeColRow} ${oneColRow}`;
const eventRoomsImages = [
  "src/gallery/sale0.jpg",
  "src/gallery/sale1.jpg",
  "src/gallery/sale2.jpg",
  "src/gallery/sale3.jpg",
];

function showEventRooms() {
  galleryContainer.innerHTML = "";
  applyCssToButton(eventRoomsBtn);
  galleryContainer.innerHTML = eventRoomsHtml;
  console.log("html loading complete");
  let imgTags = galleryContainer.getElementsByTagName("img");
  let aTags = galleryContainer.getElementsByTagName("a");

  for (let i = 0; i < imgTags.length; i++) {
    if (i <= eventRoomsImages.length) {
      imgTags[i].src = eventRoomsImages[i];
    }
  }

  for (let i = 0; i < aTags.length; i++) {
    if (i <= eventRoomsImages.length) {
      aTags[i].href = eventRoomsImages[i];
    }
  }
}
