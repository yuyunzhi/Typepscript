import React from 'react'

// 每一个属性只读
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

