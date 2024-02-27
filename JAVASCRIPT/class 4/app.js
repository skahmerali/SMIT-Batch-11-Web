// var hasnain = "hasnain"

// var classStudents = ["hussain", "kaif", "ismail", "zain", "hasnain"];

// var topStudent = classStudents.slice(0, 4)
// topStudent.splice(1, 2)
// console.log(topStudent)

// var topStudent = classStudents.slice(2, classStudents.length)
// console.log('===>',topStudent)
// var topStudent = classStudents.slice(2, 5)
// console.log(topStudent)
// var inputData = Number(prompt(" Enter your desire table number !"));
 
// var value = Number(prompt(" enter your number"))
// for (i=1; i<value; i--){
//     for (i=1; i<value ; i--)

// }
var inputNumber = Number(prompt("Enter the maximum number of desire table "))
 
for (var i = 1 ; i <= inputNumber; i++){
    for(var j = 1; j < 11; j++ ){
        console.log(i + " * " + j + " = " + j*i)
    }
}