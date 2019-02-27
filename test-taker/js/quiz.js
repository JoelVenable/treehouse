function print(message) {
  var outputDiv = document.getElementById('output'); // stores the DOM object
  outputDiv.innerHTML = message;
}

var test = [
  ["What is the answer to life, the universe, and everything?", "42"],
  ["What's the best college football team EVER?", "LSU"],
  ["What is your name?", "Jason"]
];



function takeTest() {
  var answer, correct = "", incorrect = "";
  var numCorrect = 0;

  for (var i = 0; i < test.length; i++) {
    answer = prompt(test[i][0]);
    if (answer.toLowerCase() === test[i][1].toLowerCase()) {
      numCorrect++;
      correct += `<li>${test[i][0]}</li>`;
    } else incorrect += `<li>${test[i][0]}</li>`;
  }

  print(`<h2>You got ${numCorrect} questions correct.</h2>
  <h4>Questions answered correctly:</h4>
  <ol>
    ${correct}
  </ol>

  <h4>Questions answered incorrectly:</h4>
  <ol>
    ${incorrect}
  </ol>`);

}


takeTest();