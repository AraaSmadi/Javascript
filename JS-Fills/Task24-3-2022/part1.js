/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)



var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
*/
function person(fname, lname, age, BD, FavFood, Favmovie) {
    this.fn = fname;
    this.ln = lname;
    this.ag = age;
    this.b = BD;
    this.FF = FavFood;
    this.fm = Favmovie;
}

let ob1 = new person("John", 'Hob', 35, "28.12.1989", "Pizza ", " Pulp Fiction");
let ob2 = new person("Alex", 'Mercer', 25, "28.12.1996", "Pizza ", " Pulp Fiction");
let ob3 = new person("Alice", 'Zaheer', 24, "28.12.1997", "Pizza ", " Pulp Fiction");
let ob4 = new person("Zues", 'Odin', 23, "28.12.1998", "Pizza ", " Pulp Fiction");
let ob5 = new person('Soso', 'Al-Amora', 22, "28.12.1999", "Pizza ", " Pulp Fiction");

console.log(ob1.fn + "  " + ob1.ln + "  " + ob1.ag + "  " + ob1.b + "  " + ob1.FF + "  " + ob1.fm);


/*


2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

function FirstName(persons) {

    for (i = 0; i < 5; i++) {
        console.log(this.persons[i].name.first);
    }

}
FirstName(persons);

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/
function averageAge(persons) {
    var sum = 0;
    var index = 0;
    for (i = 0; i < 5; i++) {
        sum += this.persons[i].age;
        index++;
    }
    var avarage = sum / index;
    return avarage
}
console.log("average age of those persons :", averageAge(persons));

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(p) {
    var x = p[0].age;
    var index = 1;
    for (i = 0; i < 5; i++) {
        if (p[i].age > x) {
            index = i;
            x = p[i].age;

        }
    }
    console.log(p[index].name.first + "  " + p[index].name.last);
}
olderPerson(persons);

/*
/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(persons) {
    var fullname;
    var x = persons[0].name.first + "  " + persons[0].name.last;
    for (i = 0; i < 5; i++) {
        fullname = persons[i].name.first + "  " + persons[i].name.last;
        if (fullname.length > x.length) {
            x = fullname;

        }

    }
    console.log("full name of the person have longest full name:", x)
}
longestName(persons);

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(persons) {
    var fullname;
    var x = persons[0].name.first + "  " + persons[0].name.last;
    for (i = 0; i < 5; i++) {
        fullname = persons[i].name.first + "  " + persons[i].name.last;
        if (fullname.length > x.length) {
            x = fullname;

        }

    }
    console.log("full name of the person have longest full name:", x)
}
longestName(persons);

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(string) {
    split = string.toLowerCase().split(" "),
        obj = {};

    for (let i = 0; i < split.length; i++) {
        if (obj[split[i]] === undefined) {
            obj[split[i]] = 1;
        } else {
            obj[split[i]]++;
        }
    }
    return obj
}
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));
/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar(string) {

    split = string.toLowerCase().split(""),
        obj = {};

    for (let i = 0; i < split.length; i++) {
        if (obj[split[i]] === undefined) {
            obj[split[i]] = 1;
        } else {
            obj[split[i]]++;
        }

    }
    return obj
}
console.log(repeatChar("mamababatetacedo"));
/*
9
Create a function called selectFromObject
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(ob, ar) {

    console.log("{" + ar[0] + ": " + ob.a + ", " + ar[1] + ": " + ob.cat + "}");

}
var array = ['a', 'cat', 'd'];
var obj = { a: 1, cat: 3 };
selectFromObject(obj, array);