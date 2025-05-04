{


    const createArray =( param: string ) : string [] =>{
           return [param]
    }

    const createArrayWithGeneric = <T> ( param:T ) : T[] =>{
        return [param]
 }

const res1 = createArray("jjj")

const res2 = createArrayWithGeneric <string> ('ddd')

type user = {
    id:number,
    name:string
}

const user = createArrayWithGeneric <user> ({
      id:888,
      name: "jahid"
})



const addCourchStudent = <T> (Student: T)=>{
     const coursc = "next lavel devloper"
     return {
        ...Student,
        coures
     }
}
 
const student1 = addCourchStudent({name:'jahid', email:"v@gmail.com", Devtype:"kjl"})

const student2 = addCourchStudent({name:'kld', email:"lu@gmail.com", WatchOver:"AIU"})


}