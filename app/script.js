console.log("olaa");

// Ex 3

const favorites = document.querySelectorAll("#responsive .card");
const genre = function () {
  for (let fav of favorites) {
    const genreBadge = document.createElement("span");
    genreBadge.classList.add("badge");
    genreBadge.classList.add("badge-warning");
    genreBadge.classList.add("badgeStyling");
    genreBadge.innerText = "Soul-Rock";
    fav.appendChild(genreBadge);
  }
};
genre();

// Ex 5
const dangers = document.querySelectorAll("#tableAlbums .btn-danger");
const deleteSong = function () {
  for (let danger of dangers) {
    danger.addEventListener("click", () => {
      console.log("danger");
      danger.parentElement.parentElement.remove(0);
    });
  }
};
deleteSong();

const tableBody = document.getElementById("tableBody");
// Ex 8
const addNewTrack = document.getElementById("addNewTrack");
const trackAdded = function () {
  const number = document.getElementById("number");
  const numberValue = number.value;
  const artist = document.getElementById("artist");
  const artistValue = artist.value;
  const title = document.getElementById("title");
  const titleValue = title.value;
  const duration = document.getElementById("duration");
  const durationValue = duration.value;

  if (number.value !== "" && number.value !== "" && number.value !== "" && number.value !== "") {
    tableBody.innerHTML += `
    <tr>
      <th scope="row">${numberValue}</th>
      <td>${titleValue}</td>
      <td>${artistValue}></td>
      <td>${durationValue}</td>
      <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
  `;
  }
};
addNewTrack.addEventListener("click", trackAdded);
// number, artist, title, duration
