class Dog {
    constructor(name: string) {
        // this.name = name
    }
    public name: string = 'dog' // 所有人可见（默认）
    run() {}
    private pri() {} // 只能被类本身调用，不能被类的实例调用，也不能被子类调用
    protected pro() {} // 只能在类或类的子类中调用
    readonly legs: number = 4 // 只读
    static food: string = 'bones' // 静态属性，可以被类或类的子类调用，不能被实例调用
}
// console.log(Dog.prototype);
let dog = new Dog('wangwang');
// console.log(dog);
// dog.pri()
// dog.pro()
// console.log(Dog.food, dog.food);

// name属性只在原型上不在实例上

// 继承

class Husky extends Dog {
    constructor (name: string, color: string) {
        super(name)
        this.color = color
        // this.pri()
        this.pro()
    }
    color: string
}
// console.log(Husky.food);


// 抽象类
abstract class Animal {
    eat() {
        console.log('eat');
    }
    abstract sleep(): void
}

class Cat extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string
    run() {}
    sleep() {
        console.log('cat sleep');
    }
}
let cat = new Cat('mimi')
cat.eat()

// 多态

class Bird extends Animal {
    sleep() {
        console.log('bird sleep');
    }
}
let bird = new Bird()
let animals: Animal[] = [cat, bird]
animals.forEach(i => {
    i.sleep()
})

class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}
new WorkFlow().step1().step2();

class Myflow extends WorkFlow {
    next() {
        return this;
    }
}
new Myflow().next().step1().step2()