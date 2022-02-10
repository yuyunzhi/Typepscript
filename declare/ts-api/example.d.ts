declare const someValue: any;
declare const strLength: number;
declare const someValue2: unknown;
declare const strLength2: number;
declare const foo: Function;
declare let user: any;
declare let getInfo: any;
declare class Man {
    handsome: string;
}
declare class Women {
    beautiful: string;
}
declare function Human(args: Man | Women): void;
interface Ip {
    age: number;
    text: string;
}
declare const person: Ip;
declare function get1<T, K extends keyof T>(o: T, name: K): T[K];
declare const age1: number;
declare const text1: string;
declare type x = keyof Ip;
interface Hero {
    name: string;
    skill: string;
}
declare const zed: Hero;
declare type LOL = typeof zed;
declare function sleep(args: number): Promise<unknown>;
