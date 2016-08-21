function triangleType(a,b,c)
{
  var sides = [a,b,c].sort(function(a, b){return a - b});

  if (sides[0] + sides[1] <= sides[2]) {
    return 0;
  }
  else if (sides[0]*sides[0] + sides[1]*sides[1] > sides[2]*sides[2]) {
    return 1;
  }
  else if (sides[0]*sides[0] + sides[1]*sides[1] == sides[2]*sides[2]) {
    return 2;
  }
  else {
    return 3;
  }
}


console.log(triangleType(2, 4, 6)); // return 0 (Not triangle)
console.log(triangleType(8, 5, 7)); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
console.log(triangleType(3, 4, 5)); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
console.log(triangleType(7, 12, 8)); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
