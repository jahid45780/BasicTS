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




}