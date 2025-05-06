{

     type AlhpaNewmaiec = string | number
    const add = ( param1: AlhpaNewmaiec, param2: AlhpaNewmaiec )
     : AlhpaNewmaiec =>{
      
         if( typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2
         } else{
             return param1.toString()  + param2.toString()
         }
      
          
    }

  // in guard
   type normalUser = {
       name : string
   }

   type AdminUser ={
       name: string,
       role : 'role'
   }


   const getUser = ( user : normalUser | AdminUser ) => {
       if('role' in user ){
           console.log(`my name is ${user.name} my role is ${user.role}`);
       }
   }


   const normalUser : normalUser ={
     name:'Mr.x'
   }

   const AdminUser : AdminUser ={
      name:'Mr. Admin',
      role:'role'
   }
  
   getUser(AdminUser)

}