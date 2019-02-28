//  Create an array named 'students', that will hold a list of objects.
//  Each object will represent a student and should have the following properties:

//  Name
//  Track (iOS, Web Desgin, or Front End Development)
//  Achievements which includes a number value, and a points property
//  Build at least 5 student objects.

var students = [];

function addStudent(name, track, achievements, points) {
  students.push({
    name: name,
    track: track,
    achievements: achievements,
    points: points
  });
}

addStudent("Bob", "iOS Swift Development", 55, 3);
addStudent("Jane", "Front End Development", 108, 44);
addStudent("Kevin", "Front End Development", 77, 32);
addStudent("Alex", "Full Stack Development", 10777, 114);
addStudent("Sean", "Web Design", 114, 3);
//for (let i of students) clean(i);  // Removes undefined elements from array.

