{


    class Prent {


        name: string;
        age: number;
        address: string

         constructor (name:string, age:number, address:string){
            this.name =name,
            this.age = age,
            this.address = address
         }

         getSleping( numberOfHour: number ) {
              console.log(` ${this.name} this sleep ${numberOfHour} `);
         }



    }


    class Student extends Prent   {
      

          constructor (name:string, age:number, address:string){
             super (name, age, address)
          }


    }

    const Student1 = new Student ("he is a student", 21, "ctg")



    class Techer extends Prent  {
        deginision: string


         constructor (name:string, age:number, address:string, deginision: string ){
             super (name, age, address)
            this.deginision= deginision
         }

         takeClass( numberOfHour: number ){
             console.log(` he is good techecr ${this.name} and he agr ${numberOfHour} `);
         } 

         
   }

const techer = new Techer ("mr. cv", 21, "Good Exective", 'ctg')



}