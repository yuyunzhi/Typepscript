import React from 'react'

// 每一个属性都必须有
type Required<T> = {
    [P in keyof T]-?: T[P]
}


// 使用方式
interface IProps {
    name: string
    age?: number
    male: string
}

let x: Required<IProps>


