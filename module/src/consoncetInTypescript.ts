{


    const addCourchStudent = <T extends {id:number, name:string, email:string} > (Student: T)=>{
        const coursc = "next lavel devloper"
        return {
           ...Student,
           coures
        }
   }
   
   const student3 = addCourchStudent ({ id:44, name:"Mr.C", email:'C@gmail.com', emmi:"emmi"}) 


   const student1 = addCourchStudent  <{
    id: number,
    name: string,
    email: string,
    Devtype: string
   }>(
 {
 id:99,
 name:'me x', 
 email:"v@gmail.com",
 Devtype:"kjl"})
   
   
 const student2 = addCourchStudent(
{
id:88,    
name:'kld', 
email:"lu@gmail.com", 
WatchOver:"AIU"})




}