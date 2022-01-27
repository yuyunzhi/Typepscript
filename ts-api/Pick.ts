import React from 'react'

// 在已有的IProps选出子属性组合返回新的类型
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

interface IProps {
    name: string
    number: number
    age: number
}

type t = Pick<IProps, 'age' | 'name'>
