function isPalindrome(word) {
  // Write your algorithm here

 let stringOrig = word;

 // takes the word and reverses it though an IIFE
 let stringReverse = (function () {
  let splitWord = word.split("");
  let reverseWord = splitWord.reverse();
  let wordReverse = reverseWord.join("");
  return (wordReverse);
})();
 

//Compares the 2 variables
 if (`${stringOrig}` == `${stringReverse}`) {
    return (true);
 } else {
    return (false);
 };
};

/* 
  Add your pseudocode here
  function (imput string)>
    save string to temporary variable
    copy the string into a second variable 
    reverse copy
    check both variables to see if they ==
    returns "true" is == or "false" is !=
    return
*/ 


/*
  Add written explanation of your solution here
  the function "isPalindrome" takes a word as input
  then saves the word to 2 variables.
  one variable reversed the string though an IIFE.
  then both variables are compared for equality in an if else statement,
  then its returns true if they are equal.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
