import React from 'react'

// 每一个属性只读
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}


// 使用方式
interface IProps {
    name: string
    age?: number
    male: string
}

let x: Readonly<IProps>