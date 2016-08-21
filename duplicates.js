function duplicateEncode(word){
    var downWord = word.toLowerCase();
    var returnWord = "";
    for (var i = 0; i < downWord.length; i++){
      var letter = downWord.charAt(i);
      var count = 0;
      for (var j = 0; j < downWord.length; j++){
        if (letter == downWord.charAt(j)) {
          count++;
        }
      }
      if (count > 1) {
        returnWord += ")";
      }
      else {
        returnWord += "(";
      }
    }
    return returnWord;
}

duplicateEncode("din") //   "((("
duplicateEncode("recede") //   "()()()"
duplicateEncode("Success") //   ")())())"
duplicateEncode("(( @") //   "))(("
