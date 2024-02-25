function display(arr){
    for(var i=0;i<arr.length;i++){
    document.writeln(arr[i]," ")
    }
}

function sort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
}

var arr=[89,43,1,54,34,87,12,76,4,3,78]
document.writeln("Original Array : [")
display(arr)
document.writeln("]","</br>")

sort(arr)
document.writeln("Sorted Array : [")
display(arr)
document.writeln("]","</br>")