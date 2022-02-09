declare var aNumber: number
declare const aMax: number

type voidFn = () => void

declare function getList<T>(params: T): void
declare function getData(params: number): void

declare function render(callback?: voidFn): string

declare class Person {
    static maxAge: number
    static getMaxAge: () => number
    constructor(name: string, age: number)

    getName(id: number): string
}


declare namespace OOO {
    var aaa: number | string
    function getName(id: number | string): string
    class Person {
        static maxAge: number //静态变量
        static getMaxAge(): number //静态方法

        constructor(name: string, age: number) //构造函数
        getName(id: number): string //实例方法
    }
}

declare namespace NodeJS {
    function getList<T>(params: T): void
    function getData(params: number): void
    function render(callback?: voidFn): string
    const NODE_ENV: 'development' | 'production' | 'test';
    namespace ProcessEnv {
        var NODE_ENV: 'development' | 'production' | 'test';
        var PUBLIC_URL: string;
    }
}

declare function $2(s: string): void
declare namespace $2 {
    const A: number
}

declare function Animal():void

declare class Animal {
    staticA():void
    static maxAge : number
    constructor(n:number)
}

declare module "abcde" {
    export let a: number
    export function b(): number
    export namespace c {
        let cd: string
    }
}



