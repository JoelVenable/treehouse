function qS(sel) { return document.querySelector(sel); } 
function el(el) { return document.getElementById(el); }
const myHeading = el("myHeading");
const myButton = el("myButton");
const myTextInput = el("myTextInput");
const inputHeading = qS("#inputHeading");
const inputHeadingBtn = qS('#inputHeadingBtn');



//  Changes heading color based on user input
myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

//  Changes heading text based on user input
inputHeadingBtn.addEventListener('click', () => {
  
  //  Let's animate the text change
  addClass(myHeading, "hide");
  setTimeout(() => {
    removeClass(myHeading, "hide");
    myHeading.textContent = inputHeading.value;
  }, 400);
  inputHeading.value = "";
});




