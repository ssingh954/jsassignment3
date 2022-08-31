let n = 4; z=1;
let string = "";
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= row; col++) {
    string += " "+z++;
  }
  string += "\n";
}
console.log(string);
