//chanining after a catch
// new Promise((resolve, reject) => {
//     console.log('Initial');
//
//     resolve();
// })
// .then(() => {
//     throw new Error('Something failed');
//
//     console.log('Do this');
// })
// .catch(() => {
//     console.log('Do that');
// })
// .then(() => {
//     console.log('Do this whatever happened before');
// });

// var promise = new Promise(function(resolve, reject) {
//   resolve("Success!");
// });
//
// promise.then(function(value) {
//  console.log(value);
// }
// );

// var number = document.querySelector(".input-box");
// var btn = document.querySelector(".btn");

//FROM https://scotch.io/tutorials/javascript-promises-for-dummies
var isMomHappy = false;
//alert(isMomHappy);


//
// btn.addEventListener('click', function() {
//     if(number.value > 0){
//       isMomHappy = true;
//     }
//     else if (number.value < 0){
//         isMomHappy = false;
//     }
//   }
// , false
// );

var willIGetNewPhone = new Promise(
    (resolve, reject) => {
       if (isMomHappy) {
        var phone = {
            brand: "Apple",
            color: "black"
        };
        resolve(phone);
      }
      else {
        var reason = new Error("mom is not happy");
        reject(reason);
      }

    }
);


var showOff = function (phone) {
  return new Promise(
    function (resolve, reject) {
      var message = "Hey friend, look at my new " +
          phone.color + " " + phone.brand + " phone";

          resolve(message);
    }
  );
};


var askMom = function() {
  console.log("before asking Mom");
  willIGetNewPhone
  .then(showOff)
    .then( fulfilled  => console.log(fulfilled))
    .catch( error =>  console.log(error.message));
    console.log("after asking mom");
};

askMom();
