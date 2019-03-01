//  This file uses a prompt to search through the student array, and returns the student records queried.

function print(message) {
  document.getElementById('output').innerHTML = message;
}

function search(nameKey, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === nameKey) {
      return array[i];
    }
  }
  return false;
}
 
function addRow(el) {
  if (!el) {
    alert("No student by that namme found.");
    return "";
  }
  console.log(el.name);
  var string = `<h2>Name: ${el.name}</h2>
  <p>Track: ${el.track}</p>
  <p>Achievements: ${el.achievements}</p>
  <p>Points: ${el.points}</p>`;
  console.log(string);
  return string;
}

var message = "", response;

do {
  response = prompt("Search student records: type a name [Jody], or type 'quit' to end.");
  if (response.toLowerCase() === 'quit' || response === null) break;
  message += addRow(search(response, students));
} while (true);

print(message);






