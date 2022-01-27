import { InputHTMLAttributes } from "react";

// 在第一个参数里的属性，剔除第二个参数里的所有属性
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
    /**是否禁用 Input */
    disabled?: boolean;
}


type x = Omit<InputProps, "onSelect">
