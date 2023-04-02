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
// ----------------------------------------------------
// Use a Constructor to Create Objects
// function Bird() {
//     this.name = "Albert";
//     this.color  = "blue";
//     this.numLegs = 2;
//   }
  
//   let blueBird = new Bird();
//   otice that the new operator is used when calling a constructor. This tells JavaScript to create a 
//   new instance of Bird called blueBird. Without the new operator, this inside the constructor would 
//   not point to the newly created object, giving unexpected results. Now blueBird has all the 
//   properties defined inside the Bird constructor
// -----------------------------------------------
// Extend Constructors to Receive Arguments
// function Bird(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
//   }
//   Then pass in the values as arguments to define each unique bird into the Bird constructor: 
//   let cardinal = new Bird("Bruce", "red"); This gives a new instance of Bird with name and color 
//   properties set to Bruce and red, respectively. The numLegs property is still set to 2.
// -----------------------------------------------
// Verify an Object's Constructor with instanceof
// let Bird = function(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
//   }
  
//   let crow = new Bird("Alexis", "black");
  
//   crow instanceof Bird;
//   JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows 
//   you to compare an object to a constructor
// ------------------------------
// Understand Own Properties
// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let duck = new Bird("Donald");
// let canary = new Bird("Tweety");
// every instance of Bird will have its own copy of these properties. 
// ----------------------------------------------------------------
// Use Prototype Properties to Reduce Duplicate Code
// imagine if there are millions of instances. That would be a lot of duplicated variables.
// A better way is to use the prototype of Bird. Properties in the prototype are shared among 
// ALL instances of Bird. Here's how to add numLegs to the Bird prototype
// Bird.prototype.numLegs = 2;
// ---------------------------
// Iterating over properties 
// 
// function Bird(name) {
//   this.name = name;  //own property
// }
// Bird.prototype.numLegs = 2; // prototype property
// let duck = new Bird("Donald");
// let ownProps = [];
// let prototypeProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// console.log(ownProps);
// console.log(prototypeProps);
// console.log(ownProps) would display ["name"] in the console, 
// and console.log(prototypeProps) would display ["numLegs"].
//-----------------------------------
// Understand the Constructor Property
// let duck = new Bird();
// let beagle = new Dog();

// console.log(duck.constructor === Bird); 
// console.log(beagle.constructor === Dog);
// Both of these console.log calls would display true in the console.

// Note that the constructor property is a reference to the constructor function that created the 
// instance. The advantage of the constructor property is that it's possible to check for this 
// property to find out what kind of object it is.
// ------------------------------------------
// Change the Prototype to a New Object
// A more efficient way is to set the prototype to a new object that already contains the properties. 
// This way, the properties are added all at once:
// Bird.prototype = {
//     numLegs: 2, 
//     eat: function() {
//       console.log("nom nom nom");
//     },
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
//   };
//----------------------------------------------
// Remember to Set the Constructor Property when Changing the Prototype
// There is one crucial side effect of manually setting the prototype to a new object. It erases the 
// constructor property! This property can be used to check which constructor function created the 
// instance, but since the property has been overwritten.
// Bird.prototype = {
//     constructor: Bird,
//     numLegs: 2,
//     eat: function() {
//       console.log("nom nom nom");
//     },
//     describe: function() {
//       console.log("My name is " + this.name); 
//     }
//   };
// ------------------------------------
// Understand Where an Object’s Prototype Comes From
// let log = console.log

// function Dog(name) {
//     this.name = name;
//   }
  
// let beagle = new Dog("Snoopy");
  
// log(Dog.prototype.isPrototypeOf(beagle))
// --------------------------
// Understand the Prototype Chain
// function Bird(name) {
//     this.name = name;
//   }
  
// typeof Bird.prototype;
// Object.prototype.isPrototypeOf(Bird.prototype);
//-----------------------------------
// Use Inheritance So You Don't Repeat Yourself
// There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is 
// a problem is because any change requires fixing code in multiple places. This usually means more 
// work for programmers and more room for errors.
// function Animal() { };

// Animal.prototype = {
//   constructor: Animal, 
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };
// Bird.prototype = {
//     constructor: Bird
//   };
  
//   Dog.prototype = {
//     constructor: Dog
//   };
//-----------------------------------------------
// Inherit Behaviors from a Supertype
// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// // Only change code below this line

// let duck = Object.create(Animal.prototype);; // Change this line
// let beagle = Object.create(Animal.prototype);;
//--------------------------------------------------------------
// Set the Child's Prototype to an Instance of the Parent
// Bird.prototype = Object.create(Animal.prototype);
// let duck = new Bird("Donald");
// duck.eat();
// duck inherits all of Animal's properties, including the eat method.
// ----------------------------------
// Reset an Inherited Constructor Property
// When an object inherits its prototype from another object, it also inherits the 
// supertype's constructor property.
// function Bird() { }
// Bird.prototype = Object.create(Animal.prototype);
// let duck = new Bird();
// duck.constructor
// But duck and all instances of Bird should show that they were constructed by Bird and not Animal. 
// To do so, you can manually set the constructor property of Bird to the Bird object:
// Bird.prototype.constructor = Bird;
// duck.constructor
// --------------------------------
// Add Methods After Inheritance
// function Animal() { }
// Animal.prototype.eat = function() {
//   console.log("nom nom nom");
// };
// function Bird() { }
// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;
// Bird.prototype.fly = function() {
//     console.log("I'm flying!");
//   };
// let duck = new Bird();
// duck.eat();
// duck.fly();
// ------------------------------------------------
// Override Inherited Methods
// function Animal() { }
// Animal.prototype.eat = function() {
//   return "nom nom nom";
// };
// function Bird() { }

// Bird.prototype = Object.create(Animal.prototype);

// Bird.prototype.eat = function() {
//   return "peck peck peck";
// };
// duck => Is eat() defined here? No.
// Bird => Is eat() defined here? => Yes. Execute it and stop searching.
// Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
// Object => JavaScript stopped searching before reaching this level.
// -----------------------------------------------------
// Use a Mixin to Add Common Behavior Between Unrelated Objects.
// As you have seen, behavior is shared through inheritance. However, there are cases when inheritance 
// is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. 
// They can both fly, but a Bird is not a type of Airplane and vice versa.
// let flyMixin = function(obj) {
//     obj.fly = function() {
//       console.log("Flying, wooosh!");
//     }
//   };

//   let bird = {
//     name: "Donald",
//     numLegs: 2
//   };
  
//   let plane = {
//     model: "777",
//     numPassengers: 524
//   };
  
//   flyMixin(bird);
//   flyMixin(plane);
//   bird.fly();
// plane.fly();