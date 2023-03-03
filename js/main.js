//----------------delete array using index------------------

let a = ["a","b","c","d","e","f","g"];
let b = prompt("Enter the index remove one");
let c = [];
let d = 0;
for(i=0;i<a.length;i++){
	if(a[i]!=a[b]){
		c[d]=a[i];
		d++;
	}
}
document.write(c);
document.write("<br>");