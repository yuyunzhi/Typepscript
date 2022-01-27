import React from 'react'

// 每一个属性都必须有
type Required<T> = {
    [P in keyof T]-?: T[P]
}
