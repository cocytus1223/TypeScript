import { type } from "os";

// 对象接口类型
interface List {
    readonly id: number; // readonly 只读属性，不允许修改
    name: string;
    age?: number; // ？ 可选属性，可以有可以没有
    // [x: string]: any;
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
    })
}

let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 10}
    ]
}

render(result)
// 类型断言
// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B'}
//     ]
// } as Result)

// 也可以<>形式，不推荐，和react冲突
// render(<Result>{
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B'}
//     ]
// })


interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
    [x: string]: string
    // y: number X
    [z: number]: string
}

// 函数接口类型
// let add: (x: number, y: number) => number

// interface Add {
//     (x: number, y: number): number
// }
type Add = (x: number, y: number) => number

let add: Add = (a, b) => a + b

// 混合类型接口

interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib: Lib = (() => {}) as Lib;
    lib.version = '1.0.0';
    lib.doSomething = () => {}
    return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomething();