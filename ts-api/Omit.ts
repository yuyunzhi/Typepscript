import { InputHTMLAttributes } from "react";

// 在第一个参数里的属性，剔除第二个参数里的所有属性
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;


interface InputProps {
    disabled: boolean;
    onSelect:()=>void;
    class:string
    attr:string
    id:number
}

type x = Omit<InputProps, "disabled">
