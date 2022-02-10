
import React from 'react'

// 每个属性变为可选
type Partial<T> = {
    [P in keyof T]?: T[P];
};

// 使用方式
interface IProps {
    name: string
    age: number
    male: string
}

let x : Partial<IProps> = {
   name:'1'
}
