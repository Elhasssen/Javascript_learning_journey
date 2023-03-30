// creating a basic JS Object
// let duck = {
//   name: "Aflac",
//   numLegs: 2
// };
// Objects in JavaScript are used to model real-world objects, giving them properties and behavior 
// just like their real-world counterparts. Here's an example using these concepts to create a 
// duck object
// Use Dot Notation to Access the Properties of an Object
// let duck = {
//     name: "Aflac",
//     numLegs: 2
//   };
//   console.log(duck.name);
// ----------------------------------------------------
// Create a Method on an Object
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs : () => {return 'This dog has ' + dog.numLegs + ' legs.'}
  
//   };
  
//   console.log(dog.sayLegs())
// --------------------------------
// Make Code More Reusable with the this Keyword
// let duck = {
//     name: "Aflac",
//     numLegs: 2,
//     sayName: function() {return "The name of this duck is " + this.name + ".";}
//   };
// this is a deep topic, and the above example is only one way to use it. In the current context, 
// this refers to the object that the method is associated with: duck. If the object's name is 
// changed to mallard, it is not necessary to find all the references to duck in the code. It 
// makes the code reusable and easier to read.
// --------------------------------------
// Define a Constructor Function
// Constructors are functions that create new objects. They define properties and behaviors 
// that will belong to the new object.
// function Bird() {
//     this.name = "Albert";
//     this.color = "blue";
//     this.numLegs = 2;
//   }
// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword this to set properties of the object they will create. Inside the constructor,
//  this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.