let sum=2+3
document.writeln("2 + 3 ;= ",sum, typeof(sum),"</br>")

let clg="Hello"+" BVM"
document.writeln("\"Hello\" + \"bvm\" ;= ",clg,typeof(clg),"</br>")

let bits=2+"MB"
document.writeln("2 + \"MB\" ;= ",bits,typeof(bits),"</br>")

let a=3-2
document.writeln("3 - 2 ;= ",a,typeof(a),"</br>")

let b=3-"MB"
document.writeln("3 - \"MB\" ;= ",b,typeof(b),"</br>")

let multi=3*2
document.writeln("3 * 2 ;= ",multi,typeof(multi),"</br>")

let devide=7/3
document.writeln("7 / 3 ;= ",devide,typeof(devide),"</br>")

let infdevide=7/0
document.writeln("7 / 0 ;= ",infdevide,typeof(infdevide),"</br>")

let modu=10%3
document.writeln("10 % 3 ;= ",modu,typeof(modu),"</br>")

let zero_modu=10%0
document.writeln("10 % 0 ;= ",zero_modu,typeof(zero_modu),"</br>")

let x=1;
document.writeln("x ;= ",x,typeof(x),"</br>")
x++
document.writeln("x++ ;= ",x,typeof(x),"</br>")

let y=++x
document.writeln("y=++x; y=",y," x=",x,typeof(x),"</br>")
y=x++
document.writeln("y=x++; y=",y," x=",x,typeof(x),"</br>")

x=5
document.writeln("x ;= ",x,typeof(x),"</br>")
x--
document.writeln("x-- ;= ",x,typeof(x),"</br>")
y=--x
document.writeln("y=--x; y=",y," x=",x,typeof(x),"</br>")
y=x--
document.writeln("y=x--; y=",y," x=",x,typeof(x),"</br>")
