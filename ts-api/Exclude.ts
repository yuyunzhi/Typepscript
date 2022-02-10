import React from 'react'
// T U 两个参数对比过滤出前面参数独有的值
type Exclude<T, U> = T extends U ? never : T

type IED = '1' | '2' | '3';
type IEE = '4' | '2';


type xExclude = Exclude<IED, IEE> 

/** 
 * T extends U ？ never : T
 * T = [t1,t2,t3 ……]
 * 对T做循环遍历
 * t1 是否在 U
 * t2 是否在 U
 * t3 是否在 U 
 * ……
 */