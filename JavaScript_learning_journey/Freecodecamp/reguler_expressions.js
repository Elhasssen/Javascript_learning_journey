// Regulat Expresions
// JavaScript has multiple ways to use regexes. One way to test a regex 
// is using the .test() method. The .test() method takes the regex,
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line
// the test ;ethod here returns true
//-------------------------------------
// Match literal strings
// n the last challenge, you searched for the word Hello using the regular expression /Hello/.
// That regex searched for a literal match of the string Hello. Here's another example searching 
// for a literal match of the string Kevin:
// let testStr = "Hello, my name is Kevin.";
// let testRegex = /Kevin/;
// testRegex.test(testStr);
// this test will retrun True
// match a literal string with differenet ^possibilities 
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);
// using "|" the alternation operator
// ------------------------
// igonre a case while matching
// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);
//------------------------------------------
// Extracting matches 
// you have only been checking if a pattern exists or not within a string. You can also 
// extract the actual matches you found with the .match() method.
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
//-------------------------------------------
// Finding more than the first match
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// using the global search 'g' and igonoring the case with 'i'
//---------------------------------------------------------
// match anything with wildcard period 
// // let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un./; // Change this line
// let result = unRegex.test(exampleStr);
// this will match word like, sun, run, nun, fun
//----------------------------
// Match single chartcher with multiple possibilities 
// You can search for a literal pattern with some flexibility with character classes. 
// Character classes allow you to define a group of characters you wish to match by placing 
// them inside square ([ and ]) brackets.
// in this example we want to match all the vowels inside this string 
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// so we put the class of all the vowels wanted to be matched, by ignoring the case by 'i' and searching more tha
// than on match using the global match 'g' 
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); 
// console.log(result);// Change this line
// -----------------------------------
// match Letters of the alphabet
// Inside a character set, you can define a range of 
// characters to match using a hyphen character: -.
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
// this will match all the alphabets with uppercase aswell 
// and will match more than one match
//--------------------------------------------------------
// match numbers and letters of the alphabet
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex);
// -----------------------------------------
// Match single characters not specified 
// To create a negated character set, you place a caret character (^) after the opening bracket 
// and before the characters you do not want to match.
// let quoteSample = "6 abs";
// let myRegex = /[^aeiou0-5]/ig; // Change this line
// let result = quoteSample.match(myRegex);
// console.log(result) // Change this line
// --------------------------------
// Match characters that occur one or more times 
// You can use the + character to check if that is the case. Remember, 
// the character or pattern has to be present consecutively. That is, 
// the character has to repeat one after the other.
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result);
// -------------------------------
// Match Characters that Occur Zero or More Times
// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex);
// gPhrase.match(goRegex);
// oPhrase.match(goRegex);
// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.
// --------------------------------------------------------------------------------------------
// Find Characters with Lazy Matching
// In regular expressions, a greedy match finds the longest possible part of a string that fits 
// the regex pattern and returns it as a match. The alternative is called a lazy match, which 
// finds the smallest possible part of the string that satisfies the regex pattern.
// using '?' 
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<[a-z0-9]*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result)
// The output is <h1> 
// ---------------------------------------------------
// Exercice : 
// Find One or More Criminals in a Hunt
// let reCriminals = /[^a-zA-Z0-9]?C+[a-zA-Z0-9]*?/g;
// console.log('P1P54CCCcP2P6P3'.match(reCriminals)) // Change this line
// ^ will negate those characters, and '?' will match the least short patterns whichis is zero
// ----------------------

// Match beginning string patterns
// // let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);
// this will return true because the string actually starts with cal
// --------------------------------------
// matching ending string patterns
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);
// the resulkt will be true
// matching the end using the '$' sign
//---------------------------------
// matching all letters and numbers 
// usinjg \w 
//let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w+?/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2);
// console.log(result);
// the result will be each letter in the string which is 31 letters
//------------------------------------------
// Matching everything but letters and numbers 
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex);
// console.log(result);
// the result is six, inclding the period and five space.
// ---------------------------------
// matching all numbers 
// using \d 
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex);
// console.log(result)
// result is 4 digits 
// ---------------------------------------------
// match all non_numbers 
// using \D
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // gChange this line
// let result = movieName.match(noNumRegex).length;
// console.log(result)
// the result will be 17. 
//------------------------------------
// Restrict possible Usernames
// exercice
// Usernames can only use alpha-numeric characters.
// The only numbers in the username have to be at the end. 
// There can be zero or more of them at the end. 
// Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long. 
// A two-character username can only use alphabet letters as characters.
// solution ; 
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// let result = userCheck.test(username);
// console.log(result)
// code expalantion : 
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input
// Matching white spaces 
// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);
// This match call would return [" ", " "].
///---------------------------------
// match all non-whitespace
// using \S
// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let nonSpaceRegex = /\S/g;
// whiteSpace.match(nonSpaceRegex).length;
// The value returned by the .length method would be 32.
//---------------------------------------
// Specify Uppder and lower number of matches 
// You can specify the lower and upper number of patterns with quantity specifiers. 
// Quantity specifiers are used with curly brackets ({ and }). 
// You put two numbers between the curly brackets - for the lower and upper number of patterns.
// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// multipleA.test(A4);
// multipleA.test(A2);
// The first test call would return true, while the second would return false.
//---------------------------------------------
// Matyhcing at least n time with no higher numeber
// To only specify the lower number of patterns, keep the first number followed by a comma.

// For example, to match only the string hah with the letter a appearing at least 3 times, 
// your regex would be /ha{3,}h/.
// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// multipleA.test(A4);
// multipleA.test(A2);
// multipleA.test(A100);
// In order, the three test calls would return true, false, and true.
// Specifyu Exact number of matches
// To specify a certain number of patterns, just have that one number between the curly brackets.
// For example, to match only the word hah with the letter a 3 times, 
// your regex would be /ha{3}h/.
// let A4 = "haaaah";
// let A3 = "haaah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleHA = /ha{3}h/;
// multipleHA.test(A4);
// multipleHA.test(A3);
// multipleHA.test(A100);
// --------------------------
// Check for all or none
// You can specify the possible existence of an element with a question mark, ?. 
// This checks for zero or one of the preceding element. You can think of this symbol as 
// saying the previous element is optional.
// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// rainbowRegex.test(american);
// rainbowRegex.test(british);
// Both uses of the test method would return true.
// -------------------------------
// Postivie and negative lookahead 
// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. 
// A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. 
// A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.
//  The rest of the pattern is returned if the negative lookahead part is not present.
// example : 
// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// quit.match(quRegex);
// noquit.match(qRegex);
// result : Both of these match calls would return ["q"].
// ---------------------------------------
// Check For Mixed Grouping of Characters
// If you want to find either Penguin or Pumpkin in a string, 
// you can use the following Regular Expression: /P(engu|umpk)in/g
// using the '|' 
// let testStr = "Pumpkin";
// let testRegex = /P(engu|umpk)in/;
// testRegex.test(testStr);
// the test will return true
// --------------------------------
// Reuse Patterns Using Capture Groups
// Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. 
// In this case, the goal is to capture a word consisting of alphanumeric characters so the 
// capture group will be \w+ enclosed by parentheses: /(\w+)/.

// The substring matched by the group is saved to a temporary "variable", 
// which can be accessed within the same regex using a backslash and the number of the 
// capture group (e.g. \1). Capture groups are automatically numbered by the position of 
// their opening parentheses (left to right), starting at 1.
// 
// let repeatStr = "row row row your boat";
// let repeatRegex = /(\w+) \1 \1/;
// repeatRegex.test(repeatStr); // Returns true
// repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
//----------------------------------------
// Use Capture Groups to Search and Replace
//You can search and replace text in a string using .replace() on a string. 
// The inputs for .replace() is first the regex pattern you want to search for. 
// The second parameter is the string to replace the match or a function to do something.
// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// wrongText.replace(silverRegex, "blue");
// The replace call would return the string The sky is blue..

// You can also access capture groups in the replacement string with dollar signs ($).
// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// The replace call would return the string Camp Code.
//------------------------------------------
// Remove Whitespace from Start and End
// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex,''); // Change this line
// console.log(result)
// ------------------------------------------------