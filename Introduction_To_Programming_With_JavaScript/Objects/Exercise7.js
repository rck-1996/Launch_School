// Add a qux property with value 3 to the myObj object we created in the previous exercise. 
// Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj['qux'] = 3;

console.log(myObj);

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

//Without running this code, can you determine whether these two snippets produce the same output? 
// Why?

// The first snippet will return only 'qux' sinced Object.keys only returns an object's own properties
// never any inherited from a proto-object. The second snippet will return "foo". "bar", "qux" b/c
// the "for..in" method iterates over objects inherited properties as well as its own.