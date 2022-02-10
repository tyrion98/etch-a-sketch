


// create 16x16 grid of square divs
function createDivs() {
  // vars
  let i, j = 0;
  // get main div container
  const gridContainer = document.querySelector(".grid-container");

  for(i = 0; i < 16; i++){
    for(j = 0; j < 16; j++){
        // create divs
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        // add to grid gridContainer
        gridContainer.appendChild(newDiv);
    }

  }


}

// checks if a grid item has been clicked
function mouseHover() {
  // vars
  let isMouseHover = false;
  const gridContainer = document.querySelector(".grid-container");
  const listOfDivs = gridContainer.querySelectorAll(".grid-item");
  for(let i = 0; i < listOfDivs.length; i++){
    // toggles the color

    listOfDivs[i].addEventListener("mouseover", function() {
      isMouseHover = true;
      listOfDivs[i].style.backgroundColor = "#191919";

    });


  }

}

// color change
function changeColor () {

  listOfDivs[i].style.backgroundColor = "#191919";

}

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

const newBtn = document.querySelector(".new-button");
// listen to button click
newBtn.addEventListener("click", onNewButtonClick);
// 100x100 grid
function onNewButtonClick(){
  console.log("clicked");
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.classList.add("big-grid");

}

// call createDivs function
createDivs();
mouseHover();
