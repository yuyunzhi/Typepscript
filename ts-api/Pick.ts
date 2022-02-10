import React from 'react'

// 在已有的IProps选出子属性组合返回新的类型
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// 使用方式
interface IProps {
    name: string
    age: number
    male: string
}

let x : Pick<IProps,'name'>
console.log(x)















interface IProps {
    name: string
    number: number
    age: number
}

type t = Pick<IProps, 'age' | 'name'>

type xPick<T,K extends keyof T> = {
    [P in K] : T[P]
}