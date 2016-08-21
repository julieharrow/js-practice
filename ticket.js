function tickets(peopleInLine){
  var bank = 0;
  var sell= "YES";
  for(var i=0; i<peopleInLine.length; i++) {
    bank += 25;
    console.log("input: " + peopleInLine[i]);
    console.log("bank: " + bank);
    var change = peopleInLine[i] - 25;
    console.log("change: " + change);
    if (bank-change >= 0){
      bank -= change
      console.log("bank: " + bank);
    }
    else {
      sell = "NO";
    }

  }
  return sell
}

tickets([25,25,50,100,25,50,25,100,25,25,50,100,25,50,25,100,50,50])
