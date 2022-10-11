

///Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's 
//height (in cm) and weight (in kg). 
function calculator(weight, height){
  let BMI = weight/((height/100) ** 2)
  return BMI.toFixed(2);
}