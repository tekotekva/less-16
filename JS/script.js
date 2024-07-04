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


// task #8

let array3= [1, 2, 3, 4, 5];
let sum = 0;

for (let item = 0; item < array3.length; item++) {
    sum += array3[item];
    
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


