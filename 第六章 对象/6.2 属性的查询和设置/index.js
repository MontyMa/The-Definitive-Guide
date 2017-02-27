/**
 * Created by Monty on 2017/2/27.
 */

/*
 *
 *
 *
 *
 *
 * */

//对象的引用
let o1 = {
    name: 'Monty',
    age: '25',
    adr: 'AnHui'
};

console.log(o1.name, o1["age"]);    //这两种引用都行
//第二种用法为关联数组、字典或者散列，更灵活；例如：

let o2 = {
    addr1: 1,
    addr2: 2,
    addr3: 3,
    addr4: 4,
    addr5: 5,
    addr6: 6
};

// Object.getOwnPropertyNames(o2)和keys()的区别在于前者可返回所有对象的属性，包括不可枚举的;
let o2_len = Object.keys(o2).length;

function getSum(len) {
    let total = 0;

    for (let i = 0; i < len; i++) {
        total += o2['addr' + (i + 1)];
    }

    return total;
    // return len * (len + 1) / 2;
}

let sum = getSum(o2_len);
console.log(sum);

function getRes(obj) {
    let total = 0;

    for (elem in obj) {
        console.log(elem + '' === elem); //true
        total += obj[elem + '']
    }

    return total;
}
let sum2 = getRes(o2);
console.log(sum2);


console.log(o2.valueOf());











