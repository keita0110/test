// 例外処理
function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new Error('例外です!');
    }
}
try {
    getRectArea(3, 'A');
} catch (e) {
    console.error(e);
    // 出力結果 Error: 例外です!
}

class ThisTest {
    constructor(value) {
        this.val = value;
    }
    dumpThis() {
        console.log('# this');
        console.log(this);
    }
}
const ok = new ThisTest(1);
ok.dumpThis();
console.log('# ok');
console.log(ok);

const no = new ThisTest(2);
no.dumpThis();
console.log("# thisTest2");
console.log(no);

// 静的クラス static
class Method {
    static staticProperty = 'ok';
    static staticMethod() {
        return 'okです';
    }
    static {
        console.log('okじゃないです');
    }
}

// 例外処理
console.log(Method.staticProperty);
console.log(Method.staticMethod());

function increment(count) {
    if (!Number.isInteger(count) || count < 0) {
        throw new Error('Invalid argument');
    }
    return ++count;
}
try {
    console.log(increment(2));
    console.log(increment(-1));
    console.log(increment(3));
} catch (ex) {
    console.error('エラー message=' + ex.message);
    // エラーがあったら終了
} finally {
    console.log('終了');
}
// イテレータ(ジェネレータ)

// function* 宣言
// function キーワードにアスタリスクが付いたものは、
// オブジェクト(foo)を返すジェネレーター関数を定義します。
function* foo(index) {
    while (index < 2) {
        yield index;
        index++;
    }
}
const iterator = foo(0);
console.log(iterator.next().value);
console.log(iterator.next().value);

// 配列の比較
var a1 = [1, 2, 3];
var a2 = [1, 2, 3];
var a3 = [1, 2, 3, 4];
console.log("a1 と a2 があってるか", JSON.stringify(a1) === JSON.stringify(a2));
console.log("a1 と a3 があってるか", JSON.stringify(a1) === JSON.stringify(a3));