
let isEraser = false;
// clear divs
function clearDivs() {

  // vars
  // get main div container
  const gridContainer = document.querySelector(".grid-container");

  while(gridContainer.firstChild) {

    gridContainer.removeChild(gridContainer.firstChild);
  }


}
// create 16x16 grid of square divs
function createDivs(n) {
  // vars
  let i, j = 0;
  // get main div container
  const gridContainer = document.querySelector(".grid-container");

  for(i = 0; i < n; i++){
    for(j = 0; j < n; j++){
        // create divs
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        // add to grid gridContainer
        gridContainer.appendChild(newDiv);
    }

  }


}

// erase button
const eraseBtn = document.querySelector(".erase-button");
// listen to button click
eraseBtn.addEventListener("click", onErasePressed);
// erase mouseHover

function onErasePressed(){

  if(isEraser){
    isEraser = false;
    eraseBtn.style.backgroundColor = "#2D4263";

  }else{
    isEraser = true;
    eraseBtn.style.backgroundColor = "#2F4F4F";
  }
  mouseHover(isEraser);
}

// checks if a grid item has been clicked
function mouseHover(isEraser) {
  // vars
  let isMouseHover = false;
  const gridContainer = document.querySelector(".grid-container");
  const listOfDivs = gridContainer.querySelectorAll(".grid-item");
  for(let i = 0; i < listOfDivs.length; i++){
    // toggles the color

    listOfDivs[i].addEventListener("mouseover", function() {
      isMouseHover = true;
      if (!isEraser){
        listOfDivs[i].style.backgroundColor = "#191919";
      } else if(isEraser){
        listOfDivs[i].style.backgroundColor = "#ECDBBA";
      }

    });
  }
}

// remove class
function removeClass(gridType, gridContainer){

  switch(gridType){
    case "small":
      gridContainer.classList.remove("big-grid");
      gridContainer.classList.remove("normal-grid");
      break;

    case "normal":
      gridContainer.classList.remove("big-grid");
      gridContainer.classList.remove("small-grid");
      break;

      case "big":
        gridContainer.classList.remove("small-grid");
        gridContainer.classList.remove("normal-grid");
        break;
  }


}

// clear grid
const clearBtn = document.querySelector(".clear-button");
// listen to button click
clearBtn.addEventListener("click", onClearButtonClick);

// clear grid
function onClearButtonClick(){
  const gridContainer = document.querySelector(".grid-container");
  const listOfDivs = gridContainer.querySelectorAll(".grid-item");
  for(let i = 0; i < listOfDivs.length; i++){

    listOfDivs[i].style.backgroundColor = "#ECDBBA";

  }
}

// big grid
const bigBtn = document.querySelector(".big-button");
// listen to button click
bigBtn.addEventListener("click", onBigButtonClick);
// 100x100 grid
function onBigButtonClick(){
  const gridContainer = document.querySelector(".grid-container");
  removeClass("big", gridContainer);
  gridContainer.classList.add("big-grid");
  clearDivs();
  createDivs(8);
  mouseHover();


}

// normal button
const normalBtn = document.querySelector(".normal-button");
// listen to button click
normalBtn.addEventListener("click", onNormalButtonClick);
// 100x100 grid
function onNormalButtonClick(){
  console.log("clicked");
  const gridContainer = document.querySelector(".grid-container");
  removeClass("normal", gridContainer);
  gridContainer.classList.add("normal-grid");
  clearDivs();
  createDivs(16);
  mouseHover();

}

// Small button
const smallBtn = document.querySelector(".small-button");
// listen to button click
smallBtn.addEventListener("click", onSmallButtonClick);
// 100x100 grid
function onSmallButtonClick(){
  const gridContainer = document.querySelector(".grid-container");
  removeClass("small", gridContainer);
  gridContainer.classList.add("small-grid");
  clearDivs();
  createDivs(64);
  mouseHover();

}


// call createDivs function
createDivs(16);
mouseHover();
