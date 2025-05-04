{


    interface developer <T>  {
         name: string,
         computer :{
             brand: string,
             model: string,
             ressreYear: number
         },

         smartWatch: T
    }

    const poorDevloper: developer <{
         brand: string,
         display: string,
         model: string

    }> ={
         name:"Jahid",
         computer:{
            brand:"ASIO",
            model:"AS66",
            ressreYear:2013
         },
         smartWatch:{
            brand:"ASDR",
            model:"LK9",
            display:"HGY"
         }
    }


    
    const richDevloper: developer <{
         brand:string,
         model: string,
         display: string,
         hartTark: boolean,
         slepTarck:true

    }> ={
        name:"Jahid Dev",
        computer:{
           brand:"HV",
           model:"AS66",
           ressreYear:2013
        },
        smartWatch:{
           brand:"ASDR",
           model:"LK8",
           display:"HGY",
           hartTark: true,
           slepTarck: true
        }
   }


}