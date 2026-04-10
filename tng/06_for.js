for (let i = 1; i <= 5; i++) {
  let line = "";
  for(let j = 1; j <=i; j++){
    line += "*";
  }
  console.log(line);
}
console.log('--------------------------');
for (let i = 5; i <= 5; i++) {
  let line="";
  for(j=1; j<=5-i; j++){
    line +=" ";
  }
  for(k=1; k<=i; k++){
    line +="*";
  }
  console.log(line);
}

console.log('--------------------------');

for (let i = 1; i <= 5; i++) {
  let line="";
  for(k=1; k<=5-i; k++) {
    line +=" ";
  }
  for(j=1; j<=i*2-1; j++) {
    line +="*";
  }
  console.log(line);
}


for (let i =1; i < 6; i++) {
  let line="";
  for(k=1; k < i; k++) {
    line += " ";
  }
  for(j=1; j < 7-i; j++) {
    line += "*";
  }
  console.log(line);
}