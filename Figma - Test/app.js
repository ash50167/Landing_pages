var arr = [];

console.log(typeof(arr));

//

const outerFunction = () => {
    let outerVariable = 'I am from the outer function';
  
    const  innerFunction = () => {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const inner = outerFunction();
  inner(); // Output: "I am from the outer function"
  