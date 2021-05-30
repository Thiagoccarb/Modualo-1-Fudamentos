function verifyPalindrome (word){
  let wordCheck = word.split('').reverse().join('');
  if (word===wordCheck){
    return  true;
  } else {
    return false;
  }
}
console.log(verifyPalindrome('arara'));
console.log(verifyPalindrome('desenvolvimento'));