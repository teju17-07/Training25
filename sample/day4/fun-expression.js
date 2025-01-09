//let demo = function()
//{
//    console.log("hello");         
//}
//console.log(demo);
//demo()

// let operator = function(a)
// {
//     console.log(a);
//     console.log(arguments);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }
// operator(10 , 20 , 30)

//create a function expression to perform arthimetic operations for 3 numbers and find the largest of 3 numbers input should be taken from the end user
// Function expression to find sum, product, average, and largest of 3 numbers
// const calculateAndFindLargest = (a, b, c) => ({
//     sum: a + b + c,
//     product: a * b * c,
//     average: (a + b + c) / 3,
//     largest: Math.max(a, b, c),
// });

// // Take user input
// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// let num3 = Number(prompt("Enter the third number:"));

// // Perform calculations
// let result = calculateAndFindLargest(num1, num2, num3);

// // Display results
// alert(`Sum: ${result.sum}, Product: ${result.product}, Average: ${result.average}, Largest: ${result.largest}`);
// console.log(result);

let demo1=function(){
    let a=Number(prompt("enter a value"))
    let b=Number(prompt("enter b value"))
    let c=Number(prompt("enter c value"))
    let d=a+b+c;
    console.log(d);
    let e=a-b-c;
    console.log(e);
    let f=a*b*c;
    console.log(f);
    let g=a/b/c;
    console.log(g);
    if(a>=b && a>=c){
        console.log("a is greater");  
    }else if(b>=a && b>=c){
        console.log("b is greater");        
    }else{
        console.log("c is greater");      
    }
}
demo1()