//here i create a interface in which i declare the variable which i want.
interface Emp {
    name: string;
    empAge:number;
    getAge:(number)=>number;
}

//Here i create a class in which i implement the interface and also access or inherit their variable.
class Employee implements Emp { 
    name: string;
    empAge:number;
    constructor(name: string,age: number) { 
                this.name = name;
    }

    getAge(empAge:number):number { 
        return 2021-empAge;
    }
}

let emp = new Employee("Pratik",1998);

