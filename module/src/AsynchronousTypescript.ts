{

    // get data ts

   type todo = {
       id: number,
       userId: number,
       title: string,
       completed:boolean
   } 

  const getTodo = async() : Promise <todo> =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

      const data = await response.json()
      return data
      console.log(data);
  }





    // end 

    type Something = { something: string };

    const createPromise = (): Promise<Something> => {
      return new Promise<Something>((resolve, reject) => {
        const data: Something = { something: 'something' }; // ✅ string না, object হতে হবে
        if (data) {
          resolve(data); // ✅ resolve spelling ঠিক
        } else {
          reject('Failed to load data');
        }
      });
    };
    
    // calling createPromise function
    const showData = async (): Promise<Something> => {
      const data: Something = await createPromise();
    //   console.log(data); // ✅ console.log এর আগে return করলে log হবে না
      return data;
    };
    
    showData();
    

}