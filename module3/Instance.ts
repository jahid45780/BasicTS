{


    class Animal {
          name: string;
          species: string

          constructor ( name:string, species:string ){
               this.name = name,
               this.species = species
          }

          makeSound(){
              console.log('make sound this good');
          }
    }

    class Dog extends Animal {
         constructor(name : string , species: string){
              super (name, species)
         }

         makeBerk(){
            console.log('dog is ');
         }
    }

    


    class Cat extends Animal {
        constructor(name : string , species: string){
             super (name, species)
        }

        makeMeaw(){
           console.log(' cat is cute ');
        }
   }

   const dog = new Dog("dog vai", "dog")
   const cat = new Cat ("cat vai", "cat")

   //smart way this handle

   const isDog = ( animal: Animal ) : animal is Dog => {
      return animal instanceof Animal
   }

   const isCat = (animal: Animal) : animal is Cat  => {
       return animal instanceof Animal
   }

   const getAnimal = (animal: Animal)=>{
         if(isDog(animal)){
             animal.makeBerk()
         } else if ( isCat(animal) ){
             animal.makeMeaw()
         } else{
            animal.makeSound()
         }
         
   }

   getAnimal(dog)
   
   


}