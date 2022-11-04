console.log("olaaa");

// Extra 9 - hide the card details when clicking image
const image = document.getElementById("ex9");
const details = document.getElementById("ex9Details");
details.classList.add("hideDetails");
const hideCardDetails = function () {
  details.classList.toggle("hideDetails");
};
image.addEventListener("click", hideCardDetails);

// Extra 10 - done in html file

// Extra 11
const allAlbums = document.getElementById("albumsSection");
const totalAlbums = document.getElementById("totalAlbums");
totalAlbums.innerText = `${allAlbums.children.length}`;
