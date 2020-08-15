// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  //renderButtons();
  renderIngredientsBoard();
  renderPrice();
  // console.log(state);
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
    
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let Cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    Cheese.style.display = "inherit";
  } else {
    Cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let Tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    Tomatoes.style.display = "inherit";
  } else {
    Tomatoes.style.display = "none";
  }
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
}

function renderOnions() {
  let Onions = document.querySelector("#onion");
  if (state.Onions) {
    Onions.style.display = "inherit";
  } else {
    Onions.style.display = "none";
  }
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
}

//Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
function renderLettuce() {
  let Lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    Lettuce.style.display = "inherit";
  } else {
    Lettuce.style.display = "none";
  }
}
// Trial 2 - Setup event listener for the patty button
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};
// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


// function renderButtons()
// {
//   if(!state.patty)
//   {
//     $("btnpatty").addClass("deactive");
//   }
// }
//Challenge 1 - Add/Remove the class active to the buttons based on state

//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard()
{
  let Ign_patty = document.querySelector("#Ing_patty");
  //you can also use getElementById
  if (state.Patty) {
    Ign_patty.style.display = "inherit";
  } else {
    Ign_patty.style.display = "none";
    
  }
  let Ing_cheese = document.querySelector("#Ing_cheese");
  //you can also use getElementById
  if (state.Cheese) {
    Ing_cheese.style.display = "inherit";
  } else {
    Ing_cheese.style.display = "none";
    
  }
  let Ing_tomatoes = document.querySelector("#Ing_tomatoes");
  if (state.Tomatoes) {
    Ing_tomatoes.style.display = "inherit";
  } else {
    Ing_tomatoes.style.display = "none";
    
  }
  let Ing_onions = document.querySelector("#Ing_onions");
  if (state.Onions) {
    Ing_onions.style.display = "inherit";
  } else {
    Ing_onions.style.display = "none";
    
  }
  let Ing_lettuce = document.querySelector("#Ing_lettuce");
  if (state.Lettuce) {
    Ing_lettuce.style.display = "inherit";
  } else {
    Ing_lettuce.style.display = "none";
    
  }

}



//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice()
{
  var sumtotal=wholeWheatBun;
  if(state.Patty)
  {
    sumtotal+=ingredients.Patty;
  }
  if(state.Cheese)
  {
    sumtotal+=ingredients.Cheese;
  }
  if(state.Tomatoes)
  {
    sumtotal+=ingredients.Tomatoes;
  }
  if(state.Onions)
  {
    sumtotal+=ingredients.Onions;
  }
  if(state.Lettuce)
  {
    sumtotal+=ingredients.Lettuce;
  }
  document.getElementById("price").innerHTML="INR "+sumtotal;
}
