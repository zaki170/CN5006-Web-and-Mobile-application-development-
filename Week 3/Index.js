function EmployeeInfo(name,Salary){
    console.log("Welcome"+ name+"yoUR monthly salary is"+Salary)

}
console.log("This is my first programme")
var EmpName="John"
var EmpSalary=50000
EmployeeInfo(EmpName,EmpSalary)
const EmpSkills=(skills)=>{
    console.log("Expert in "+skills)
}
EmpSkills("java")
const student= require('./StudentInfo')
const person = require('./Person') 
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
// creating new Person

person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")
