import React from "react";

// 在第一个参数里的属性，剔除第二个参数里的所有属性
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface InputProps {
    disabled: boolean;
    onSelect:()=>void;
    class:string
    attr:string
    id:number
}

// Omit是剔除，保留剩余的 等价于 Pick选出所要保留的
let x : Omit<InputProps, "disabled">



