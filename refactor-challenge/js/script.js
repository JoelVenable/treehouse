/*   ORIGINAL CODE:

var html = '';
var red;
var green;
var blue;
var rgbColor;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

document.write(html);



What I changed:


1.  added repeated code into a loop.
2.  created a function for generating random colors.
3.  removed red, green, and blue variables and replaced them with function calls.
4.  removed rgbColor variable and changed the string builder to use backticks.
*/



function rand() {
  return Math.floor(Math.random() * 256);
}

for (let i = 0; i < 10; i++) {
  document.write(`<div style="background-color: rgb(${rand()}, ${rand()}, ${rand()};"></div>`);
}

var nums = [1, 2, 3, 4, 5];