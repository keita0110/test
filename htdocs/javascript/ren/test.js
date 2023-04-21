// if
function testNum(a) {
    let result;
    if (a > 0) {
        result = 'okです';
    } else {
        result = 'noです';
    }
    return result;
}
document.getElementById("a").innerHTML = testNum(-5);

// ループ
let str = '';
for (let i = 0; i < 9; i++) {
    str += i;
}
document.getElementById('b').innerHTML = str;

const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
    document.getElementById('c').innerHTML = `${property}: ${object[property]}`;
}
const ob = { a: 1, b: 2, c: 3 };

for (const property in ob) {
    console.log(`${property}: ${ob[property]}`);
}
const a = ['a', 'b', 'c'];

for (const element of a) {
    console.log(element);
}

const aa = ['ok', 'yes', 'no', 'bad'];
for (const text of aa) {
    console.log(text);
}

let re = '';
let i = 0;
do {
    i += 1;
    re += i;
} while (i < 5);
console.log(re);

let o = 0;
while (o < 5) {
    if (o === 3) {
        break;
    }
    o++;
}
console.log(o);

let t = '';
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    t += i;
}
console.log(t);

// 列挙型 HttpMethod
const HttpMethod = Object.freeze({
    DELETE: Symbol('HttpMethod.DELETE'),
    GET: Symbol('HttpMethod.GET'),
    PATCH: Symbol('HttpMethod.PATCH'),
    POST: Symbol('HttpMethod.POST'),
    PUT: Symbol('HttpMethod.PUT'),
});

// enum(列挙型)
function test(httpMethod) {
    switch (httpMethod) {
        case HttpMethod.DELETE:
            console.log('HttpMethod = delete');
            break;
        case HttpMethod.GET:
            console.log('HttpMethod = get');
            break;
        case HttpMethod.PATCH:
            console.log('HttpMethod = patch');
            break;
        case HttpMethod.POST:
            console.log('HttpMethod = post');
            break;
        case HttpMethod.PUT:
            console.log('HttpMethod = put');
            break;
        // default:
        //     throw new Error('Invalid argument');
        //     break;
    }
}
test(HttpMethod.DELETE);
test(HttpMethod.GET);
test(HttpMethod.PATCH);
test(HttpMethod.POST);
test(HttpMethod.PUT);
test('HttpMethod.GET'); // エラー

// 関数
function int(n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {     // 階乗
        return (n * int(n - 1));
    }
}
console.log(int(1));
console.log(int(2));
console.log(int(3));
console.log(int(4));
console.log(int(5));

// アロー関数式
int = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {     // 階乗
        return (n * int(n - 1));
    }
}
console.log(int(1));
console.log(int(2));
console.log(int(3));
console.log(int(4));
console.log(int(5));

const ma = [
    'aa',
    'aaaa',
    'ここ',
    'あ',
    'ああ'
];
console.log(ma.map(ma => ma.length));

// クロージャ
function init() {
    var name = "Mozilla"; // name は、init が作成するローカル変数
    function displayName() {
        // displayName() は内部に閉じた関数
        console.log(name); // 親関数で宣言された変数を使用
    }
    displayName();
}
init();

function mm(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = mm(5);
const add10 = mm(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

// css fontsize変更
function makeSizer(size) {
    return function () {
        document.body.style.fontSize = `${size}px`;
    };
}
const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

// Class
class polygon {
    constructor(h, w){
        this.area = h * w;
    }
}
console.log(new polygon(2, 3).area);
