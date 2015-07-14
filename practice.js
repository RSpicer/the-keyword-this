//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //The "this" keyword is used to gather the context of the function being called.
      //This allows the function to operate directly on the object.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //Implicit - implied based on the immediate context that is given (obj.method()).
      //Explicit - manually declared with bind, call, or apply.
      //new - declared as a result of constructing a "new" object, used to add values to a new obj.
      //Default/Window - no context implicitly, explicitly, or new - defaults to Window.


  // 3) What is the difference between call and apply?

      //Answer
      //Both of them offer a one-time context for a function call, but call requires passing specific arguments in,
      //while apply deconstructs an array to find said arguments.

  // 4) What does .bind do?

      //Answer
      
      //Offers a closue-like context to a function, ensuring that any "this" call will result in that context being invoked.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "",
      email: "",
      getUsername: function(){
        return this.username;
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

  var Car = function(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.
var moveCar = function () {
  this.move = 0;
  this.move += 10;
  return this.move;
}
prius.moveCar = moveCar;
prius.moveCar();

mustang.moveCar = moveCar;
mustang.moveCar();

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
getYear.call(prius);
getYear.call(mustang);


//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.call(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  //Undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  //The Window
//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
