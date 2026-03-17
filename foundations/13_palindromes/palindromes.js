const palindromes = function (str) {
  const validChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  
  const cleanedStr = str
    .toLowerCase()
    .split("")
    .filter(ch => validChars.includes(ch))
    .join("");

  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
