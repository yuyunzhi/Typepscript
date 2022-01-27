import React from 'react'
// T U 两个参数对比过滤出前面参数独有的值
type Exclude<T, U> = T extends U ? never : T

type IED = '1' | '2' | '3';
type IEE = '4' | '2';

type xExclude = Exclude<IED, IEE> 
