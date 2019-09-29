// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// console.log(Role.Reporter);
// console.log(Role);

// 字符串枚举
enum Message {
    Success = '成功',
    Fail = '失败'
}
// console.log(Message);

// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}
// console.log(Answer);

// 枚举成员
// Role.Reporter = 2 x
enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // computed,不会在编译阶段进行计算，会保留在执行阶段
    d = Math.random(),
    e = '123'.length
}
// console.log(Char);

// 常量枚举
const enum Mouth {
    Jan,
    Feb,
    Mar
}
let month = [Mouth.Jan, Mouth.Feb, Mouth.Mar]

// 枚举类型
enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b = 'banana'}

let e: E = 3
let f: F = 3
// e === f

let e1: E.a = 1
let e2: E.b
// e1 === e2
let e3: E.a = 1
// e1 === e3

let g1: G = G.b
let g2: G.a