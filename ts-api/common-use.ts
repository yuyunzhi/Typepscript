import { ButtonHTMLAttributes} from 'react'


// 原生元素的属性
//  NativeXXX = XXXHTMLAttributes<HTMLElement>
type NativeButton = ButtonHTMLAttributes<HTMLElement>;


//T泛型 默认值 = {}
interface DataSourceObject {
    value: string;
}

type DataSourceType<T = {}> = T & DataSourceObject;





