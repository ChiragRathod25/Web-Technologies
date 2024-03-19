
var emp1=["ankit", 23, false, 18000];
var emp2=["aakash", 24, true, 28000];
// var emps=[emp1,emp2];
// document.writeln(emp3);
emps=emp1.concat(emp2)

var totalsalary=0;
console.log(emps)
for(i=0;i<emps.length;i++)
    totalsalary+=emps[i][3];
// document.writeln("total salary is &nbsp",totalsalary);

