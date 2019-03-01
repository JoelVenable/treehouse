const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput"); //  Returns a single HTML element
const myList = document.getElementsByTagName("li"); // Returns a collection of all the <li> elements (array)
const evens = document.querySelectorAll("li:nth-child(even)"); // Can select classes, IDs, types, even attributes.  Also returns an array.  Target using [i].
const inputHeading = document.querySelector("#inputHeading");
const inputHeadingBtn = document.querySelector('#inputHeadingBtn');
const notPurple = document.getElementsByClassName("not-purple");
const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const button = document.querySelector("button.description");
const toggleListBtn = document.querySelector("#toggleList");
const listDiv = document.querySelector(".list");

//  Heading color change button
myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

//  Heading text change button
inputHeadingBtn.addEventListener('click', () => {
  myHeading.textContent = inputHeading.value;
});


toggleListBtn.addEventListener('click', () => {

  if (listDiv.style.display == 'none') {
    listDiv.style.display = '';
    toggleListBtn.textContent = 'Hide list';
  } else {
    listDiv.style.display = 'none';
    toggleListBtn.textContent = 'Show list';
  }
});

button.addEventListener('click', () => {
  p.textContent = input.value + ":";
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