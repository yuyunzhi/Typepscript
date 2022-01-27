
import React from 'react'

// 每个属性变为可选
type Partial<T> = {
    [P in keyof T]?: T[P];
};

