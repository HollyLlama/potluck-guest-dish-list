// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// only appears when the guest list is full
const assignButton = document.querySelector(".assign");
// targets the list that will populate with the guest’s name and their assigned dish
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  //get the name of the guest from the input field
  const guest = guestInput.value;
  // if this is a new guest, add name to list, clear input and add to count
  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  //create a new li and put the guest name in it and add to guestList div
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  //get all the guests listed
  let guests = document.querySelectorAll(".guest-list li");
  //show the number of guests in the list
  guestCount.innerText = guests.length;
  //stop guest list at 8 ppl, hide add guest button, input, label and show guestFull message
  if (guests.length > 7) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  //potluck items array
  const potluckItems = [
    "potato salad",
    "hummus",
    "cookies",
    "fruit",
    "mac & cheese",
    "baked beans",
    "fried chicken",
    "ice cream"
  ];
  // grab all the guest names
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    //get a random number for each of my potluck items
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    //remove the random dish from the list of available dishes if it's already been chosen
    let randomPotluckItem = potluckItems.splice(randomPotluckIndex, 1);
    //create a new li element
    let listItem = document.createElement("li");
    //put a string with guest name, and putluck item they are bringing
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;

    assignedItems.append(listItem);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
