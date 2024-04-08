// Functionize Minecraft Fishing Start Code


// Variables
let img = document.getElementById("result-img");

// Fish Variables
let numCod = 0;
let numSalmon = 0;
let numTropic = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {  
  // Determine Character Selected
  let character = document.getElementById("character-select").value

  if (character === `steve`) {
    // Steve Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.7) {
      numCod += 1;
      img.src = "img/Raw-Cod.png";
      console.log("cod");
    } else if (randNum < 0.9) {
      numSalmon += 1;
      img.src = "img/Raw-Salmon.png";
      console.log("salmon");
    } else if (randNum < 0.95) {
      numTropic += 1;
      img.src = "img/Tropical-Fish.png";
      console.log("tropical");
    } else {
      numPuffer += 1;
      img.src = "img/Pufferfish.png";
      console.log("puffer");
    }
  } else if (character === `alex`) {
    // Alex Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.1) {
      numCod += 1;
      img.src = "img/Raw-Cod.png";
      console.log("cod");
    } else if (randNum < 0.2) {
      numSalmon += 1;
      img.src = "img/Raw-Salmon.png";
      console.log("salmon");
    } else if (randNum < 0.5) {
      numTropic += 1;
      img.src = "img/Tropical-Fish.png";
      console.log("tropical");
    } else {
      numPuffer += 1;
      img.src = "img/Pufferfish.png";
      console.log("puffer");
    }
  } else {
    // villager Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.25) {
      numCod += 1;
      img.src = "img/Raw-Cod.png";
      console.log("cod");
    } else if (randNum < 0.5) {
      numSalmon += 1;
      img.src = "img/Raw-Salmon.png";
      console.log("salmon");
    } else if (randNum < 0.75) {
      numTropic += 1;
      img.src = "img/Tropical-Fish.png";
      console.log("tropical");
    } else {
      numPuffer += 1;
      img.src = "img/Pufferfish.png";
      console.log("puffer");
    }
  }
  document.getElementById("num-cod").innerHTML = numCod;
  document.getElementById("num-salmon").innerHTML = numSalmon;
  document.getElementById("num-tropical").innerHTML = numTropic;
  document.getElementById("num-puffer").innerHTML = numPuffer;
}
