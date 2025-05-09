{


    class Person{
        getSleep(){
           console.log(` iam sleeping for 8 hour per day `);
        }
    }

    class student extends Person {
        getSleep(){
            console.log(` iam sleeping for 7 hour per day `);
         }
    }


    class developer extends Person {
        getSleep(){
            console.log(` iam sleeping for 6 hour per day `);
         }
    }



    const getSleepingHours = ( param: Person ) => {
          param.getSleep()
    }

    const person1 = new Person()
    const person2 = new student()
    const person3  = new developer()

    getSleepingHours(person1)

    


    class shape{
        getArea() : number {
            return 0
        }
    }

    class Circle extends shape{
        radius: number

        constructor(radius: number){
            super()
            this.radius= radius
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius

        }
    }

// Rectangle
  
    class Rectangle extends shape{
        hight: number;
        width:number

        constructor(hight: number, width:number ){
            super()
            this.hight=hight
            this.width=width 
        }

        getArea(): number {
            return this.hight * this.width

        }
    }

    const getShapArea =  (param: shape)=>{
        
          console.log(param.getArea());

    }

  const shap1= new shape()
  const shap2= new Circle(10)
  const shap3= new Rectangle(20,25)

  getShapArea(shap1);
 getShapArea(shap2);
 getShapArea(shap3);

}