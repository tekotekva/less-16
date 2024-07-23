'use strict'


// task #12
let array8 =  [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

for (let index = 0; index < array8.length; index++) {
    let element = array8[index];

    for (let item = 0; item < element.length; item++) {
        const number = element[item];
        if (number > 0) {
            console.log(number);
        }
        
    }
    
}

//  version 2
let array8 =  [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

for ( let item of array8 ) {
    for (let element of item) {
        if (element > 0) {
            console.log(element);
        }    
    }
}   

// task #11
let array7 =  [32, 14, null, '40', 50]

for (let index of array7) {
    if ( typeof index === 'number' && index %  5 === 0) {
        console.log(index);
    }
}




// task #10

let array5 = [1, 2, 3, 7, 6, 9];

for (let index of array5) {
    if (index === 7) {
        continue;
    }
    console.log(index);
    
}


// task #9

let array4= [1, 2, 3, 4, 5];
let sum1 = 0;
for (const item of array4) {
    sum1 += item;
}
let average = sum1 / array4.length;
console.log(average);


// task #8

let array3= [1, 2, 3, 4, 5];
let sum = 0;

// for (let item = 0; item < array3.length; item++) {
//     sum += array3[item];
    
// }
for (let item of array3) {
    sum = sum + item;
}
console.log(sum);



// task #7

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 5) {
        console.log('არის');
        break;
    }
}

// task #6

let getAge = (birthYear,yearNow) => {
    let age = yearNow - birthYear;
    // if (age > 18) {
    //     return 'adult'
    // }
    // return 'not adult';

    let ageResult = age > 18 ? 'adult' : 'not abult'
    return ageResult
}

let result = getAge(1991,2024)
console.log(result);


// task #5

let array1 = [1,2,3,4,5];

let reversed = []
for (let i = array1.length - 1; i >= 0; i--){
    reversed.push(array1[i])
}
console.log(reversed);

// let numbers_array = [1, 2, 3, 4, 5];
// numbers_array.reverse();
// console.log(numbers_array);


// task #4

let number = 7

if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}


// task #3

let array9= [ 10, 142, 542, 8410, 383]
console.log(Math.max(...array9));

// task #2

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  function formatName(user) {
    if (user.isloggedin) {
      return `${user.firstname} ${user.lastname}`;
    } else {
      return false;
    }
  }
  console.log(formatName(user));


  // task #1

  function sum(...numbers) {
    let numberSum = 0;
    for (let item of numbers) {
        numberSum += item;
    }
    return numberSum;
  }

  let resultSum = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
  console.log(resultSum);
