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
console.log(Method.staticProperty);
console.log(Method.staticMethod());

