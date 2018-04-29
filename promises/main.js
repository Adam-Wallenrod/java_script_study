var number = document.querySelector(".input-box");
var btn = document.querySelector(".btn");


// const promise = doSomething();
// promise.then(successCallback, failureCallbac);

btn.addEventListener('click', function() {
    if(number.value > 0){
      successCallback(number.value);
    }
    else if (number.value < 0){
      failureCallback(number.value);
    }
  }
, false
);




function successCallback(result) {
  console.log("It succeeded with " + result);
  return 1;
}

function failureCallback(error) {
  console.log("It failed with " + error);
  return 0;
}

function doSomething()
{
  console.log("we did something!");
}
