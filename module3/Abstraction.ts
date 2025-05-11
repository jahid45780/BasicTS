{


 // idea
 
 interface vehicle1{
     startEngine(): void
     stopEngine():void
     movie():void
 }

 // real impremention 

 class Car implements vehicle1{
     startEngine(): void {
         console.log(`iam start the car engine`);
     }

     stopEngine(): void {
         console.log(`iam stopping the car engine`);
     }

     movie(): void {
         console.log(`iam move the ctg in the car`);
     }
 }

 const toyotaCar = new Car()
 toyotaCar.startEngine()
 console.log(toyotaCar);

// class Abstraction


 // real impremention 



  abstract class Car2 {
    abstract startEngine(): void

    abstract stopEngine(): void 

    abstract movie(): void 
 }

 class toyotaCar2 extends Car2{
    startEngine(): void {
        console.log(`the car now start`);
    }

    stopEngine(): void {
        console.log(`the car now stop`);
    }

    movie(): void {
        console.log(` the car now moved the place `);
    }
 }




}