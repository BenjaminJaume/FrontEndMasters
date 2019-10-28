// IIFE
// var student = 'Benjamin';

// (function displayStudent() {
//   var student = 'Lana';
//   console.log(student);
// })();

// console.log(student);

// Closure
// function ask(question) {
//   return function holdIt() {
//     console.log(question);
//   };
// }

// var myQuestion = ask('What is closure');

// myQuestion();

// this keyword

var teacher = 'Nathalie';

var workshop = {
  teacher: 'Kyle',
  ask(question) {
    console.log(this.teacher, question);
  }
};

workshop.ask('Implicit binding');
