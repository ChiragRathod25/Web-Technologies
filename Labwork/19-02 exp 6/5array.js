function display(arr){
    for(var i=0;i<arr.length;i++){
    document.writeln(arr[i]," ")
    }
}

var friends=["Khushii",6,"Himanshu","Tulsi"]
document.writeln("Original Array : [")
display(friends)
document.writeln("]","</br>")

friends.reverse()
document.writeln("Reversed Array : [")
display(friends)
document.writeln("]","</br>")

friends.sort()
document.writeln("Sorted Array : [")
display(friends)
document.writeln("]","</br>")

var country=["India","Russia"]
display(country)