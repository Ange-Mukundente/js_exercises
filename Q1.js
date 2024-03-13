// <!-- In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces. -->
   
   /*=================== ANSWER ================== */

   function makeString(str) {
    // Split the input string into words
    const words = str.split(" ");
    
    // Initialize an empty string to store the result
    let result = "";
    
    // Iterate through each word
    for (let i = 0; i < words.length; i++) {
      // Add the first character of the word to the result
      result += words[i][0];
    }
    
    // Return the final result
    return result;
  }
  
  console.log(makeString("My Name Is Ange"));
  