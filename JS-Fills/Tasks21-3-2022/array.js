console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
let arr1 = [1, 7, 9, 45];
let arr2 = ["Str", "alex", "moh"];
let arr3 = ['the', 'fox', 'over', 'lazy', 'dog'];

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits = ["Tomato", "Banana", "Watermelon"];
console.log("Tomato in index 0 ", fruits[0]);
console.log("Banana in index 1", fruits[1]);
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let Favorite_Food = ["Pasta", "fish", "Pizza", "Mansaf", "Kibbeh"];
let Favorite_Sport = ["Golf", "Basketball", "Table Tennis"];
let Favorite_Movie = ["Schindler's List", "The Lego Movie", "The Social Network", "Man on the Moon"];
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let array = ['araa', 'tasneem', 'haya', 'shifaa'];

function firstOfArray(array) {
    if (array.length > 0) {

        return array[0];
    } else {
        console.log("The array is empty!");
        return undefined;
    }
}
console.log(firstOfArray(array));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let array2 = ['araa', 'tasneem', 'haya', 'shifaa'];

function lastOfArray(array) {
    if (array.length > 0) {
        return array[array.length - 1];
    } else {
        console.log("The array is empty!");
        return undefined;
    }
}
console.log(lastOfArray(array2));

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
let array3 = [0, 5, 7, 9];
array.shift();
array.shift();
array.push(10);
array[0] = 8;
let add = [3, 4, 6];
add.unshift(1);
console.log(add.concat(array3));

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

let array4 = [0, 5, 4, 6, 7, 9];
console.log("Array witout methods", array4);
array4.push(10);
console.log("Add elements to end Array ,using method push", array4);
array4.unshift(33);
console.log("Add elements to start Array ,using method unshift ", array4);
array4.pop();
console.log("Delete elements to end Array ,using method pop ", array4);
array4.shift();
console.log("Delete elements to start Array ,using method shift", array4);
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
let oddarray = [5, 4, 6, 7, 9, 10];

function middleItem(oddArr) {
    let count = 0;
    if (oddArr.length % 2 !== 0) {
        for (i = 0; i < oddArr.length; i++) {
            oddArr[i] === oddArr[(oddArr.length - 1) / 2] && (count = oddArr[i]);
        }
    } else {
        for (i = 0; i < oddArr.length; i++) {
            oddArr[i] === oddArr[(oddArr.length - 1) / 2]
            oddArr[i + 1] === oddArr[(oddArr.length) / 2] && (count = `${oddArr[i]} ${oddArr[i + 1 ]}`);
        }
    }
    return count
}


console.log(middleItem(oddarray));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
let animals = ['cat', 'ele', 'bird'];
console.log("original array :", animals);
animals.pop();
animals[0] = 'zebra';
animals[1] = 'elephant';
console.log("array after change  :", animals);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
let array6 = [5, 4, 6, 7, 9];

function indexOfArray(arr, index) {
    if (arr.length > 0) {
        return arr[index];
    } else {
        console.log("The array is empty!");
        return undefined;
    }
}
console.log(indexOfArray(array6, 2));
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
let array7 = [5, 4, 6, 7, 9];
console.log("original Array :", array7);

function arrayExceptLast(arr) {
    if (arr.length > 0) {
        arr.pop();
        return arr;
    } else {
        console.log("The array is empty!");
        return undefined;
    }
}
console.log(" Array except the last elemnt  :", arrayExceptLast(array7));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
let array8 = [10, 20, 30, 40, 50];
console.log("original Array :", array8);

function addToEnd(arr, value) {
    if (arr.length > 0) {
        arr.push(value);
        return arr;
    } else {
        console.log("The array is empty!");
        return undefined;
    }
}
console.log(" Add value to the end of this array  :", addToEnd(array8, 60));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

let array9 = [1, 2, 3, 4, 5];
console.log("original array", array9);
// use for
function sumArray(arr) {
    if (arr.length > 0) {
        let sum = 0;
        for (i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    } else {
        console.log("The array is empty!");
        return undefined;
    }


}
console.log("summation of all elemnt in this array use for :", sumArray(array9));
// use while
function sumArray2(arr) {
    if (arr.length > 0) {
        let sum = 0;
        let count = 0;
        while (count < arr.length) {
            sum = sum + arr[count];
            count++;
        }
        return sum;
    } else {
        console.log("The array is empty!");
        return undefined;
    }
}
console.log("summation of all elemnt in this array use while:", sumArray2(array9));
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let array10 = [1, 2, 3, 4, 5, 0];
console.log("original array", array10);
// use for
function minInArray(arr) {
    if (arr.length > 0) {
        let min = arr[0];

        for (i = 0; i < arr.length; i++) {
            min = Math.min(min, arr[i]);
        }
        return min;
    } else {
        console.log("The array is empty!");
        return undefined;
    }


}
console.log("minimum value inside this array use for :", minInArray(array10));
// use while
function minInArray2(arr) {
    if (arr.length > 0) {
        let min = arr[0];
        let count = 0;
        while (count < arr.length) {
            min = Math.min(min, arr[count]);
            count++;
        }
        return min;
    } else {
        console.log("The array is empty!");
        return undefined;
    }
}
console.log("minimum value inside this array  use while:", minInArray2(array10));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let array11 = [1, 2, 3, 4, 5, 0];
console.log("original array", array11);
// use for
function removeFromArray(arr, value) {
    if (arr.length > 0) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                delete arr[i];
            }
        }
        return arr;
    } else {
        console.log("The array is empty!");
        return undefined;
    }


}
console.log("array after remove this elemnt use for:", removeFromArray(array11, 2));
// use while
function removeFromArray2(arr, value) {
    if (arr.length > 0) {
        let count = 0;
        while (count < arr.length) {
            if (arr[count] == value) {
                delete arr[count];
            }
            count++;
        }
        return arr;
    } else {
        console.log("The array is empty!");
        return undefined;
    }
}
console.log("array after remove this elemnt  use while:", removeFromArray2(array11, 2));


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

let array12 = [1, 2, 3, 4, 5, 0];
console.log("original array", array12);

function oddArray(oddar) {
    if (oddar.length > 0) {
        for (i = 0; i < oddar.length; i++) {
            if (oddar[i] % 2 === 0) {
                oddar.splice(i, 1)
            }
        }
        return oddar
    } else {
        console.log("The array is empty!");
        return undefined;
    }

}
console.log("array have only the odd elemnts use for :", oddArray(array12));
// use while
function oddArray2(oddar) {
    if (oddar.length > 0) {
        let count = 0;
        while (count < oddar.length) {
            if (oddar[i] % 2 === 0) {
                oddar.splice(i, 1)
            }
            count++;
        }
        return oddar;
    } else {
        console.log("The array is empty!");
        return undefined;
    }
}
console.log("array have only the odd elemnts  use while:", oddArray2(array12));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let array13 = [90, 80, 95, 99, 75, 88];
console.log("original array", array13);

function aveArray(avgA) {
    if (avgA.length > 0) {
        let avarage = 0;
        let sum = 0;
        for (i = 0; i < avgA.length; i++) {
            sum += avgA[i];
        }
        avarage = sum / avgA.length;
        return avarage
    } else {
        console.log("The array is empty!");
        return undefined;
    }

}
console.log("average of the numbers inside this array use for :", aveArray(array13));
// use while
function aveArray2(avgA) {
    if (avgA.length > 0) {
        let count = 0;
        let avarage = 0;
        let sum = 0;
        while (count < avgA.length) {
            sum += avgA[count];
            count++;
        }
        avarage = sum / avgA.length;
        return avarage
    } else {
        console.log("The array is empty!");
        return undefined;
    }
}
console.log("average of the numbers inside this array  use while:", aveArray2(array13));

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
console.log("original array", strings);

function shorterInArray(short) {
    let index = 0;
    for (let i = 1; i < short.length; i++) {
        if (short[i].length < short[0].length) {
            short[0].length = short[i].length;
            index = i;
        }
    }
    return short[index];
}
console.log("shortest string inside this array :", shorterInArray(strings));



/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function repeatChar(string, char) {
    let counter = 0
    for (i = 0; i < string.length; i++) {
        if (string[i].includes(char)) {
            counter++
        }
    }
    return counter;
}
let repeatCharstring = "alex mercer madrasa rashed2 emad hala"
console.log("this is string: ", repeatCharstring)
console.log("times that this char a repeat inside this string:", repeatChar(repeatCharstring, "a"));
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(string) {
    var newArr = [];
    var index = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i].length % 2 != 0 && i % 2 == 0) {
            newArr[index] = string[i];
            index++;
        }
    }

    return newArr;
}
let strings2 = ["alex", "mercer", "madrasa", "rashedd2", "emad", "hala"];
console.log(evenIndexOddLength(strings2));
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(numbers) {
    var newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        newArr[i] = Math.pow(numbers[i], i);
    }
    return newArr;
}
let strings3 = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(strings3));

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(string) {
    let newArr = [];
    let index = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] % 2 == 0 && i % 2 == 0) {
            newArr[index] = string[i];
            index++;
        }
    }

    return newArr;
}
let strings4 = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndex(strings4));