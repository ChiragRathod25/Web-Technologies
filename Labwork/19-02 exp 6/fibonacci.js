let n=10
let a=0
let b=1
let c
var i;
for (i = 0; i < n; i++) {
    c=a+b
    document.writeln(a," ")
    a=b;
    b=c;
}