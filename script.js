document.addEventListener("DOMContentLoaded", () => {
  const array = [11, 21, 31, 41, 51, 61, 71, 81, 91, 101];
  fetch("https://frail-boa-headscarf.cyclic.app")
    .then((response) => response.json())
    .then((data) => {
      let i = 0;
      for (i = 0; i < 10; i++) {
        const playerRank = document.getElementById(`${array[i]}`);
        const playerName = document.getElementById(`${array[i] + 1}`);
        const playerCountry = document.getElementById(`${array[i] + 2}`);
        const playerPoints = document.getElementById(`${array[i] + 3}`);

        playerRank.innerText = data[i].ranking;
        playerName.innerText = data[i].name;
        playerCountry.innerText = data[i].country;
        playerPoints.innerText = data[i].points;
      }
    });
});
