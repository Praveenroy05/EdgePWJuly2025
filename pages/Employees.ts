// Class - ES6 (ECMA SCRIPT 6 - 2015)
//Syntax:


// Tool - jar - packages -> classes -> Properties and methods

/*
class ClassName {

    // properties = variable

    key1 :datatype - Instance variable - Belongs to the object
    private key2 :datatype 
    static key3 :datatype - ClassName.key3
    readonly key4 : datatype - Instance variable - Belongs to the object

    constructor(key1, key2, key4){
      this.key1 = key1   // obj.key1 = arg1
      this.key2 = key2 // obj.key2 = arg2
      this key4 = 6764
    }


    method(): returtype{ // function
    }

    static method2(): returtype{
    }

}

//ClassName obj = new ClassName(arg) - JAVA

let obj = new ClassName(arg1,arg2,arg3)
obj.key1
obj.key4

ClassName.key3
ClassName.method2()

*/
//instance of a class = object

//1. constructor - You have to create a constructor by using a keyword known as constructor in both JS/TS. This use to assign the value of the variable at the time of creation of an object

// 2. static - static keyword belongs to class not to the object. That mens to access the static properties and methods we can access by using the ClassName directly. Example: ClassName.key3

// 3. Non-static keyword belong to the instance of a class that is an object. TO access non-static properties or method you have to create an object for a class.

// 4. contructor overloading is not possible in both JS/TS
// 5. Private variables and methods cannot be accessible outside of the class.
// 6. readonly keyword is use to define the variable which is constant in nature
// 7. Propeties declaration is mandatory in TS but not mandatory in JS.
// 8. this keyword referes to the object of current class. That means whenever you create an object for a class this keywrod will get replaced by the objectname.

    // let empid1: number


export class Employees{
    // Properties
    empId: number
    empName: string
    empAge 
    private empSalary
    static CName = "ABC"
    readonly offer = 30000

    constructor(eid, empName, empAge, empSalary){
      this.empId = eid   // this.empId = 101
      this.empName = empName // this.empName = "Rahul"
      this.empAge = empAge
      this.empSalary = empSalary
    }


    employeeInformation() :void{
      console.log("Employee ID: ", this.empId);
      console.log("Employee Name: ", this.empName);
      console.log("Employee Age: ",this.empAge);
      console.log("Employee Salary: ", this.empSalary);
      console.log("Employee Offer: ", this.offer);
    }

    static greeting(){
      return `Welcome to ${Employees.CName}`
    }
  
}

let employees = new Employees(101, "Rahul", 30, 100000) 
console.log(employees.empId)
console.log(employees.empName)
console.log(employees.empAge)
//employees.empSalary
console.log(Employees.CName)
console.log(employees.offer)
const reuturnValue = Employees.greeting()
console.log(reuturnValue)

//employees.offer = 200000

let employees2 = new Employees(102, "John", 30, 100000) 
console.log(employees2.empName)
employees2.employeeInformation()
Employees.greeting()



