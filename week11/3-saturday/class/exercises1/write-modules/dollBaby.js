const dollSize = require("./russianDoll");

const isObject = function (val) {
  if (val === null) {
    return false;
  }
  return typeof val === "object";
};

const objProps = function (obj) {
  for (let val in obj) {
    if (isObject(obj[val])) {
      objProps(obj[val]);
      //   for (let val2 in obj[val]) {
      //     console.log(val2, obj[val][val2]);
      //   }
    } else {
      console.log(val, obj[val]);
    }
  }
};

objProps(dollSize);

// const isObject = function (value) {
//   if (value === null) {
//     return false;
//   }
//   return typeof value === "object";
// };

// const objProps = function (Object) {
//   for (let value of Object.value(dollSize)) {
//     if (isObject(Object.value)) {
//       objProps(Object.value);
//       for (let value2 in Object.value) {
//         console.log(value, Object.value);
//       }
//     } else {
//       console.log(value, Object.values);
//     }
//   }
// };

// objProps(dollSize);
