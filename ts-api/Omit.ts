import React from "react";

// 在第一个参数里的属性，剔除第二个参数里的所有属性
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// 逻辑为：先剔除 K 的值值值值 ，然后把联合类型 Exclude<keyof T, K> 变为 interface

interface InputProps {
    disabled: boolean;
    onSelect:()=>void;
    class:string
    attr:string
    id:number
}

type xType = Omit<InputProps, "disabled">
