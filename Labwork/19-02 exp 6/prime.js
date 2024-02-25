let a=3
let b=23
let i=a;
for(i;i<=b;i++){
    flag=false
    for(var j=2;j<i;j++){
        if(i%j==0){
            flag=true
        }
    }
    if(!flag){
        document.writeln(i," ")
    }
}