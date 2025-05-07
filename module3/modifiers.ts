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

        addDeposit(amount: number){
             this._balance = this._balance + amount
        }

        getBalance(){
            return this._balance
        }
        
    } 

    class student extends bankAccount{
        test(){
            this.
        }
    }
    
const poorManAccount = new bankAccount (222, 'Mr.X', 20 )

 // poorManAccount.balance=99 

 poorManAccount.addDeposit(10)
  const myBalance = poorManAccount.getBalance()
  console.log(myBalance);
 


}