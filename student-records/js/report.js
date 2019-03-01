//  This function outputs all data from the 'students' object.


function print(message) {
  document.getElementById('output').innerHTML = message;
}

function addRow(el) {
  console.log(el.name);
  var string = `<h2>Name: ${el.name}</h2>
  <p>Track: ${el.track}</p>
  <p>Achievements: ${el.achievements}</p>
  <p>Points: ${el.points}</p>`;
  console.log(string);
  return string;
}

var message = "";

for (let i = 0; i < students.length; i++) {
  message += addRow(students[i]);  
}

print(message);






