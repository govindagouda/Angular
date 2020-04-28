export class car {

    private x:string;
    private y:number;
     constructor(x?:string,y?:number){
      this.x=x;
      this.y=y;
     }
  
      sayHello() {
         console.log("value x" + this.x+ " value y " + this.y);
     }
  
  }

  export class brake{

    applyBrake(){
      console.log("Brake Applied");
    }

  }