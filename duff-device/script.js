// my array
var arr = [];

// creating an array with many elements
(function() {
  var i = 20000;
  while (i > 0) {
    arr.push(i);    
    i--
  }
})();

// the process that will happen to every array element
function process(x) {
  return x * x;
}

//start the timer
var start = new Date().getTime();

/* Below is a version of Duff's Device. 
 * You can read about it more at 
 * http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html 
 */ 

// Instead of processing 1 element per loop we will process 8 per loop.
var iterations = Math.floor(arr.length / 8);

// get the remainder of elements that aren't evenly divided by 8
var remainder = arr.length % 8;
var i = 0;

if (remainder > 0) {
  do {
    process(arr[i++]);
  } while (--remainder > 0);
}

do {
  process(arr[i++]);
  process(arr[i++]);
  process(arr[i++]);
  process(arr[i++]);
  process(arr[i++]);
  process(arr[i++]);
  process(arr[i++]);
  process(arr[i++]);
} while (--iterations > 0);

//stop the timer
var end = new Date().getTime();
var time = end - start;

/* Now we are dont using Duff's Device. We will now process the same array without Duff's Device */

var start2 = new Date().getTime();

// Less code, but more time.
for (var i = arr.length; i--;) {
  process(arr[i]);
};

var end2 = new Date().getTime();
var time2 = end2 - start2;

/* We are done with the test. We will now display the results into the HTML document */

var percen = round(((time2-time)/time2), 3)  * 100;
var percent = percen.toFixed(1);

document.getElementById("insert").innerHTML += "Array Length: " + "20,000" + "<br /> Processing time without Duff's Device: " + time2 + "ms <br /> Processing time with Duff's Device: " + time + "ms <br /> Improvement: " + percent + "%";

var disp = document.getElementById('percent');
disp.innerHTML = percent + "%";

var tr_2k1 = document.getElementById('tr_2k1');
tr_2k1.innerHTML = "<td class='l'>20,000</td><td class='1'>1</td><td class='r'>" + time2 + "</td><td class='r'>" + time + "</td><td class='r'>" + percent + "</td>";


function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}