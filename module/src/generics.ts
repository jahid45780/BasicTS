{

   // generics

   type genericsArray <t> = Array<t>

 // const RollNumber : number[] = [1,3,4,5,6,] 
//  const RollNumber : Array <number> = [1,3,4,5,6,]
const RollNumber : genericsArray<number> = [1,3,4,5,6,]

  // const mentor : string[]= ['abul', 'cabul','tabul','mukbul']
 // const mentor : Array < string > = ['abul', 'cabul','tabul','mukbul']
 const mentor : genericsArray<string> = ['abul', 'cabul','tabul','mukbul']

  // const bolleArray : boolean[] = [true, false,]
 // const bolleArray : Array < boolean > = [true, false,]

 const bolleArray : genericsArray <boolean> = [true, false,]




 const user : genericsArray<{ name:string, age:number }> = [
    {
        name:"jahid",
        age:21
    },
    {
        name:"mim",
        age:19
    }
 ]

//  generics tuple

type genericsTuple <x,y> = [x,y]

const man: genericsTuple< string, string > = ["mrX", "mrY"]

const userWithId : genericsTuple < number, {name:string, email:string} > = 
[ 1236, { name:'Jahid', email:"jahid@gmail.com" }]


}