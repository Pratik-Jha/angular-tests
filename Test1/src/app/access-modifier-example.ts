class acessmModifierDemo{
    constructor(public val1:number,private val2:number,protected val3:number){
    }
    run(){
        console.log(`Value1 is: ${this.val1} and Value2 is: ${this.val2} and Value3 is: ${this.val3}`)
    }
}
let obj1=new acessmModifierDemo(09,23,98);
//This both are public that why we can access it here.
obj1.val1;
obj1.run();
// obj1.val3; //This protected value we can't access.
// obj1.val2; //we cannot access this value because this value is private 