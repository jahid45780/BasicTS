{


    type Vehicel ={
        bike: string,
        car: string,
        ship: string
    }


    type owner = "bike" | "car" | "ship" // manully

    type owner2 = keyof Vehicel



    const getPropratyValues = <X,Y extends keyof X > ( obj:X, key:Y )=>{
          return obj [key]
    }
    const user = {
         name:'jahid',
         age:87,
         address:"ctg"
    }

    const result = getPropratyValues (user, "name")





}