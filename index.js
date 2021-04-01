let a = prompt("First text: ");
a = a.toLowerCase()
a = a.replaceAll(".", "");
a = a.replaceAll(",", "");
a = a.replaceAll(")", "");
a = a.replaceAll("(", "");
a = a.split(" ");
let b = prompt("First text: ");
b = b.toLowerCase()
b = b.replaceAll(".", "");
b = b.replaceAll(",", "");
b = b.replaceAll(")", "");
b = b.replaceAll("(", "");
b = b.split(" ");
let tag = []

let numberb = b.lenght;
let numbera = a.length;

num = 0
if (numbera<numberb){
    num = numberb;
}else{
    num = numbera;
}

let ignore = ["to","and","or","but","the","a","an","in","on","at","it","i","will","of","for","is","so","with","if",",",".",":","/","-","_"];

for (let i = 0; i < num ; i++) {
    if (b.includes(a[i]) && ignore.includes(a[i])== false){
        tag.push(a[i]);
    }
}

var tagNumber = document.createElement("h3");
  tagNumber.innerText = "Total similar keyword: " + tag.length + ".";
  document.body.appendChild(tagNumber);


for (let r = 0; r < (tag.length) ; r++) {

  var showtag = document.createElement("p");
    showtag.innerText =  tag[r] + ", ";
    document.body.appendChild(showtag);
}

console.log(tag);
