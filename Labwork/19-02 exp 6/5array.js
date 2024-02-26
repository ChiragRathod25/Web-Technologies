
var friends=["Khushii",6,"Himanshu","Tulsi"]
var country=["India","Russia"]
document.writeln("Original Array : [",friends,"]","</br>")

friends.reverse()
document.writeln("Reversed Array : [",friends,"]","</br>")

friends.sort()
document.writeln("Sorted Array : [",friends,"]","</br>")

const concats_array=friends.concat(country) 
//concate method will concate two arrays and return a new array
document.writeln("Concateed Array :[" ,concats_array,"]","</br>")

const new_array=friends.join("-")
//join method will convert all array element into string and  join all of them by '-'
document.writeln("Join : ",new_array)