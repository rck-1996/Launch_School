// Write the code necessary to retrieve the value of the courses property of our student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

student.courses

// or student['courses'] can also be used

// 

// What is returned if you attempt to access an object property that does not exist? Try it out for yourself,
console.log(student.locker); 
// for example calling student.locker with the above example object. Especially notice that no exception is raised.
// we get back undefined.