


document.querySelector("#check").addEventListener("click",checkingTag);


function checkingTag(){
let a = document.querySelector("#firstText").value;
a = a.toLowerCase()
a = a.replaceAll(".", "").replaceAll(",", "").replaceAll("!", "").replaceAll("*", " ").replaceAll("?", "").replaceAll(")", "").replaceAll("(", "").replace(/(\r\n|\n|\r)/gm, " ").replaceAll("  ", " ");
a = a.split(" ");

let b = document.querySelector("#secondText").value;
b = b.toLowerCase()
b = b.replaceAll(".", "").replaceAll(",", "").replaceAll("!", "").replaceAll("*", " ").replaceAll("?", "").replaceAll(")", "").replaceAll("(", "").replace(/(\r\n|\n|\r)/gm, " ").replaceAll("  ", " ");
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

let ignore = ["to","and","or","but","the","a","an","in","on","at","it","i","me","my","you","your","will","of","for","is","so","with","if",",",".",":","/","-","_"];

for (let i = 0; i < num ; i++) {
    if (b.includes(a[i]) && ignore.includes(a[i])== false){
        tag.push(a[i]);
    }
}

tag = tag.filter(deleteEmpty);

function deleteEmpty(a) {
    return a != "";
}



document.querySelector("#textShow").innerHTML = "<h3>Total similar keyword: " + tag.length + ".</h3>" + "<h3>The keywords are:  </h3> <p id='forTag'>  </p> ";
document.querySelector("#forTag").innerText = tag[0];

for(let i=1;i<tag.length;i++){
    document.querySelector("#forTag").innerText = document.querySelector("#forTag").innerText + ", " + tag[i] ;
}


console.log(tag);
}
