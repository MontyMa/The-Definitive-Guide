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
let empty = {}; // 没有任何属性的对象
let point = {x: 1, y: 2};    //有两个属性的对象
console.dir(empty);

let a = new Array();    //new 操作符创建对象


console.log(Object.prototype);

let o1 = Object.create([1, 2]);
let o2 = Object.create(null);
console.log(o1, o1[1]);

o2.name = "Monty";

console.log(o2);

//通过原型继承创建一个对象
function inherit(obj) {
    //obj是一个对象但不是null
    if (obj === null) {
        throw TypeError();
    }

    //如果支持Object.create则直接创建
    if (Object.create) {
        return Object.create(obj)
    }

    //若不支持Object.create使用下列方法
    let obj_type = typeof obj;
    if (obj_type !== 'object' && obj_type !== 'function') {
        throw TypeError();
    }

    function EmptyFn() {
    }

    EmptyFn.prototype = obj;
    return new EmptyFn();
}

function Hello() {
    let name = "Monty";
}
Hello.prototype.add = () => {
    return 1;
};

class Hello2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(z) {
        return this.x + this.y + z;
    }
}

let sumXY = new Hello2(2, 3).add(30);
console.log(sumXY);


let box = inherit(point);
console.log(box.x);










