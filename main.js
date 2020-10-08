let s = [];
const row = [0, 0];
for (var i = 0; i < 2; i++) {
  console.log(row);
  s.push(row);
  console.log("s" + s, "row" + row);
  s[0][1] = 1;
  console.log(s, row);
}
console.log(s);
