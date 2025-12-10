

// hello(wait);



// function hello(callback)
// {  
//    console.log("Hello World");
//     callback();
// }
// function wait()
// {
//    console.log("Waiting World");
// }

// function leave()
// {
//    console.log("Leaving World");
// }

// function goodbye()
// {
//    console.log("Goodbye World");
// }




sum (displaypage, 5, 10);



function sum(callback ,x, y){
    let result = x + y;
    callback(result);
}

function printResult(result){
    console.log("Result: " + result);
}

function displaypage(result)
{
    document.getElementById("myid").innerHTML = "Result: " + result;
}
