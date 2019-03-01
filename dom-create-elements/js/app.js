const myList = document.getElementsByTagName("li");
// Returns a collection of all the <li> elements (array)
const evens = document.querySelectorAll("li:nth-child(even)");
// Can select classes, IDs, types, even attributes.  Also returns an array.  Target using [i].

const notPurple = document.getElementsByClassName("not-purple");

// 'qS' is shorthand I created for 'document.querySelector', located in the heading.js file.
const descriptionInput = qS("input.description");
const descriptionP = qS("p.description");
const descriptionButton = qS("button.description");
const toggleListBtn = qS("#toggleList");
const listDiv = qS(".list");
const hideNotPurple = qS("#hideNotPurple");

// Add list item function
const addItemInput = qS("input.addItemInput");
const addItemButton = qS("button.addItemButton");
const removeItemButton = qS("button.removeItemButton");



toggleListBtn.addEventListener('click', () => {

  if (listDiv.style.display == 'none') {
    listDiv.style.display = '';
    toggleListBtn.textContent = 'Hide list';
  } else {
    listDiv.style.display = 'none';
    toggleListBtn.textContent = 'Show list';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.textContent = descriptionInput.value + ":";
  descriptionInput.value = "";
});


hideNotPurple.addEventListener('click', () => {
  for (let i = 0; i < notPurple.length; i++) {
    toggleClass(notPurple[i], "hide");
  }
});


//  Yes, we're using JS to do things that should be done with CSS on a static site...
for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = "purple";
}

//  
for (let i = 0; i < notPurple.length; i++) {
  notPurple[i].style.color = "red";
}

for (let i = 0; i < evens.length; i++) {
  evens[i].style.backgroundColor = "lightgray";
}

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = "";
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});