// Anchor
document.getElementById("anchor").addEventListener("click", anchor);
function anchor() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `<a href="https://www.google.com/search?q=${encodeURIComponent(input)}" target="_blank">${input}</a>`;
}
// At
document.getElementById("at").addEventListener("click", at);
function at() {
  let input = document.getElementById("input").value;
  const promptAt = prompt(
    "The `at()` method takes one parameter, which is the index (positive or negative) of the character to retrieve from a string."
  );
  document.getElementById("display").innerHTML = `${input.at(`${promptAt}`)}`;
}
// Big
document.getElementById("big").addEventListener("click", big);
function big() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.big()}`;
}
// Bold
document.getElementById("bold").addEventListener("click", bold);
function bold() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.bold()}`;
}
// CharAt
document.getElementById("charAt").addEventListener("click", charAt);
function charAt() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The `charAt()` method returns the character at a specified index in a string.");
  document.getElementById("display").innerHTML = `${input.charAt(`${promptAt}`)}`;
}
// CharCodeAt
document.getElementById("charCodeAt").addEventListener("click", charCodeAt);
function charCodeAt() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The `charCodeAt()` method returns the Unicode value of the character at a specified index in a string.");
  document.getElementById("display").innerHTML = `${input.charCodeAt(`${promptAt}`)}`;
}
// CodePointAt
document.getElementById("codePointAt").addEventListener("click", codePointAt);
function codePointAt() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The `codePointAt()` method returns the Unicode code point of the character at a specified position in a string, including characters with code points above 65535 (e.g., emojis).");
  document.getElementById("display").innerHTML = `${input.codePointAt(`${promptAt}`)}`;
}
// Concat
document.getElementById("concat").addEventListener("click", concat);
function concat() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The `concat()` method joins two or more strings and returns a new combined string.");
  document.getElementById("display").innerHTML = `${input.concat(`${promptAt}`)}`;
}
// EndsWith
document.getElementById("endsWith").addEventListener("click", endsWith);
function endsWith() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The `endsWith()` method checks if a string ends with a specified substring, returning `true` or `false`.");
  document.getElementById("display").innerHTML = `${input.endsWith(`${promptAt}`)}`;
}
// FontColor
document.getElementById("fontColor").addEventListener("click", fontColor);
function fontColor() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The fontColor() method changes the color of the text in a string by specifying a color name or hex code.");
  document.getElementById("display").innerHTML = `${input.fontcolor(`${promptAt}`)}`;
}
// FontSize
document.getElementById("fontSize").addEventListener("click", fontSize);
function fontSize() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The fontColor() method changes the size of the text in a string.");
  document.getElementById("display").innerHTML = `${input.fontsize(`${promptAt}`)}`;
}
// Includes
document.getElementById("includes").addEventListener("click", includes);
function includes() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("includes() checks if a string contains a specified substring and returns true or false.");
  document.getElementById("display").innerHTML = `${input.includes(`${promptAt}`)}`;
}
// IndexOf
document.getElementById("indexof").addEventListener("click", indexof);
function indexof() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The `indexOf()` method returns the index of the first occurrence of a specified value in a string or array, or `-1` if the value is not found.");
  document.getElementById("display").innerHTML = `${input.indexOf(`${promptAt}`)}`;
}
// Italics
document.getElementById("italics").addEventListener("click", italics);
function italics() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.italics()}`;
}
// LastIndexOf
document.getElementById("lastIndexOf").addEventListener("click", lastIndexOf);
function lastIndexOf() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The `lastIndexOf()` method returns the index of the last occurrence of a specified value in a string or array, or `-1` if the value is not found.");
  document.getElementById("display").innerHTML = `${input.lastIndexOf(`${promptAt}`)}`;
}
// Length
document.getElementById("length").addEventListener("click", length);
function length() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.length}`;
}
// LocaleCompare
document.getElementById("localeCompare").addEventListener("click", localeCompare);
function localeCompare() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The `localeCompare()` method compares two strings according to the local language settings, returning a number that indicates whether the string comes before, after, or is the same as the specified string.");
  document.getElementById("display").innerHTML = `${input.localeCompare(`${promptAt}`)}`;
}
// Repeat
document.getElementById("repeat").addEventListener("click", repeat);
function repeat() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The repeat() method returns a new string that repeats the original string a specified number of times.");
  document.getElementById("display").innerHTML = `${input.repeat(`${promptAt}`)}`;
}
// Replace
document.getElementById("replace").addEventListener("click", replace);
function replace() {
  let input = document.getElementById("input").value;
  const searchValue = prompt("Enter the value to search for:");
  const replaceValue = prompt("Enter the replacement value:");
  document.getElementById("display").innerHTML = `${input.replace(searchValue, replaceValue)}`;
}
// ReplaceAll
document.getElementById("replaceAll").addEventListener("click", replaceAll);
function replaceAll() {
  let input = document.getElementById("input").value;
  const searchValue = prompt("Enter the value to search for:");
  const replaceValue = prompt("Enter the replacement value:");
  document.getElementById("display").innerHTML = `${input.replaceAll(searchValue, replaceValue)}`;
}
// Search
document.getElementById("search").addEventListener("click", search);
function search() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The search() method searches a string for a specified regular expression and returns the index of the first match, or -1 if no match is found.");
  document.getElementById("display").innerHTML = `${input.search(`${promptAt}`)}`;
}
// Slice
document.getElementById("slice").addEventListener("click", slice);
function slice() {
  let input = document.getElementById("input").value;
  const searchValue = prompt("Enter the index to start value:");
  const replaceValue = prompt("Enter the index to end value:");
  document.getElementById("display").innerHTML = `${input.slice(searchValue, replaceValue)}`;
}
// Split
// document.getElementById("split").addEventListener("click", split);
// function split() {
//   let input = document.getElementById("input").value;
//   const separator = prompt("The split() method divides a string into an array of substrings based on a specified separator.");
//   document.getElementById("display").innerHTML = `${input.split(separator)}`;
// }
// StartsWIth
document.getElementById("startsWith").addEventListener("click", startsWith);
function startsWith() {
  let input = document.getElementById("input").value;
  const promptAt = prompt("The startsWith() method checks if a string begins with a specified substring, returning true if it does, and false otherwise.");
  document.getElementById("display").innerHTML = `${input.startsWith(`${promptAt}`)}`;
}
// Strike
document.getElementById("strike").addEventListener("click", strike);
function strike() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.strike()}`;
}
// Sub
document.getElementById("sub").addEventListener("click", sub);
function sub() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.sub()}`;
}
// Substr
document.getElementById("substr").addEventListener("click", substr);
function substr() {
  let input = document.getElementById("input").value;
  const searchValue = prompt("Enter the index to start value:");
  const replaceValue = prompt("Enter the index to end value:");
  document.getElementById("display").innerHTML = `${input.substr(searchValue, replaceValue)}`;
}
// Substring
document.getElementById("substring").addEventListener("click", substring);
function substring() {
  let input = document.getElementById("input").value;
  const searchValue = prompt("Enter the index to start value:");
  const replaceValue = prompt("Enter the index to end value:");
  document.getElementById("display").innerHTML = `${input.substring(searchValue, replaceValue)}`;
}
// Sup
document.getElementById("sup").addEventListener("click", sup);
function sup() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.sup()}`;
}
// ToLocaleLowerCase
document.getElementById("toLocaleLowerCase").addEventListener("click", toLocaleLowerCase);
function toLocaleLowerCase() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.toLocaleLowerCase()}`;
}
// ToLocaleUpperCase
// ToLocaleUpperCase
document.getElementById("toLocaleUpperCase").addEventListener("click", toLocaleUpperCase);
function toLocaleUpperCase() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.toLocaleUpperCase()}`;
}
// ToWellFormed
// document.getElementById("toWellFormed").addEventListener("click", toWellFormed);
// function toWellFormed() {
//   let input = document.getElementById("input").value;
//   document.getElementById("display").innerHTML = `${input.toWellFormed()}`;
// }
// Trim
document.getElementById("trim").addEventListener("click", trim);
function trim() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.trim()}`;
}
// TrimEnd
document.getElementById("trimEnd").addEventListener("click", trimEnd);
function trimEnd() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.trimEnd()}`;
}
// TrimStart
document.getElementById("trimStart").addEventListener("click", trimStart);
function trimStart() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.trimStart()}`;
}
// ValueOf
document.getElementById("valueOf").addEventListener("click", valueOf);
function valueOf() {
  let input = document.getElementById("input").value;
  document.getElementById("display").innerHTML = `${input.valueOf()}`;
}
console.log(String.prototype);



