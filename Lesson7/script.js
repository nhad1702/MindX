function bangCuuChuong(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " " + "*" + " " + i + " " + "=" + " " + (n * i));
    }
}

bangCuuChuong(8);
/*-------------------------*/
function getAge(x) {
    let d = new Date();
    let year = d.getFullYear();
    let age = year - x
    return age;
}

console.log(getAge(2005));
/*------------------------------------*/
function qGia(arr) {
    var maxLen = arr[0].length;
    var ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        var maxLeni = arr[i].length;
        if (maxLeni > maxLen) {
            ans = arr[i];
            maxLen = maxLeni;
        }
    }
    return ans;
}

console.log(qGia(["Australia", "Vietnam", "United Kingdom", "Canada", "Japan", "Korea"]));
/*--------------------------------------*/
function findNum(arr, n) {
    var num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            num = i;
            break;
        } else {
            num = -1;
        }
    }
    return num;
}

console.log(findNum([2, 5, 7, 6, 8, 1, 3], 1));
/*--------------------------------------------*/
function numPow(x, y) {
    for (let i = 1; i < y; i++) {
        if (y == 1) {
            let sum = x;
            return sum;
        } else if (y == 0) {
            let sum = 1;
            return sum;
        } else if (x = 0) {
            let sum = 0;
            return sum;
        } else {
            let sum = x;
            sum *= x;
            return sum;
        }
    }
}

console.log(numPow(2, 3));
/*--------------------------------------------*/
function BMIcalc(arr) {
    for (let i = 0; i < arr.length; i++) {
        let BMI = arr[i].weight / ((arr[i].height / 100) ** 2);
        arr[i]["BMI"] = BMI;
    }
    return arr;
}

const Person = [
    {
        name: "Bob",
        height: 175,
        weight: 55
    },
    {
        name: "Alice",
        height: 168,
        weight: 55
    },
    {
        name: "Max",
        height: 180,
        weight: 66,
    },
    {
        name: "James",
        height: 174,
        weight: 80.
    },
    {
        name: "Anna",
        height: 165,
        weight: 64
    }
];

console.log(BMIcalc(Person));

const BMIselector = [];

for (let i = 0; i < Person.length; i++) {
    if (Person[i].BMI < 18.5) {
        BMIselector.push("Thin");
    } else if (18.5 <= Person[i].BMI && 24.9 >= Person[i].BMI) {
        BMIselector.push("Normal");
    } else {
        BMIselector.push("overweight");
    }
};

console.log(BMIselector);
/*------------------------*/
let arr1 = [1, 4, 5, 2];
let arr2 = [4, 6, 8, 9, 0];

for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
};

let arr3 = [];

for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i] * 3);
};

console.log(arr3);
/*-----------------------------------*/
arr1 = [2, 5, 6, 3, 5, 9];
arr1.push(0, 8, 1);
console.log(arr);
arr1.shift();
console.log(arr);
arr1.splice(2, 2);
console.log(arr);
arr1.splice(2, 0, 7);
console.log(arr);
arr1.pop();
console.log(arr);
arr1.sort();
console.log(arr);
arr1.sort().reverse();
console.log(arr);
/*---------------------*/
bob = [5000, 4300, 4000, 5800, 6000, 4500, 3000];
alice = [3000, 4200, 6000, 4000, 5500, 4500, 3500];
var bobSum, aliceSum = 0;
var tbc1, tbc2;
for (let i = 0; i < bob.length; i++) {
    bobSum += bob[i];
    tbc1 = bobSum / bob.length;
};

for (let j = 0; j < alice.length; j++) {
    aliceSum += alice[j];
    tbc2 = aliceSum / alice.length;
}

if (tbc1 > tbc2) {
    console.log("Bob");
} else {
    console.log("Alice");
};
/*-------------------------------------------------*/
const stuIn4 = [
    {
        name: "Bob",
        age: 20
    },
    {
        name: "Alice",
        age: 25
    },
    {
        name: "Lisa",
        age: 19
    },
    {
        name: "Max",
        age: 22
    }
];

stuIn4.push({name: "Adam", age: 18});
console.log(stuIn4);
stuIn4.shift();
console.log(stuIn4);
for (let i = 0; i < stuIn4.length; i++) {
    if (stuIn4[i].age > 20) {
        console.log(stuIn4[i]);
    }
};


