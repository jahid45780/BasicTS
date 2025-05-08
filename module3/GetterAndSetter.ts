{


    class bankAccount {
        public readonly id: number ;
        public name: string ;
        protected _balance: number
         
         
         constructor (id: number, name: string, balance:number){
             this.id= id,
             this.name= name,
             this._balance=balance
         }


         set addDeposit ( amount : number ){
              this._balance = this.balance+amount
         }

        // addDeposit(amount: number){
        //      this._balance = this._balance + amount
        // }

        


        // getBalance(){
        //     return this._balance
        // }

     // gater
     get balance (){
        return this._balance
     }
        
    } 

    
const poorManAccount = new bankAccount (222, 'Mr.X', 20 )

 // poorManAccount.balance=99 

//  poorManAccount.addDeposit(10)

 poorManAccount.addDeposit= 70

//   const myBalance = poorManAccount.getBalance()
const myBalance = poorManAccount.balance
  console.log(myBalance);


}