import { ButtonHTMLAttributes, HTMLAttributes, ReactChild, CSSProperties, ReactElement} from 'react'


// 1、对一个元素属性进行透传可以使用HTMLAttributes<HTMLElement>

/**
interface Props extends React.HTMLAttributes<HTMLElement> {}

const Aside: FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={className} {...rest}>
      {props.children}
    </div>
  );
};

 */



// 原生元素的属性
//  NativeXXX = XXXHTMLAttributes<HTMLElement>
type NativeButton = ButtonHTMLAttributes<HTMLElement>;

interface DataSourceObject {
    value: string;
}




// 函数可以用 type
type Renderer = (item: any) => void;
// 联合类型用 type
type DataSourceType<T = {}> = T & DataSourceObject;
// 有几种值可以用  type 
type MenuMode = "horizontal" | "vertical";


// 递归,key value ,可以使用 interface
interface SourceDataItem {
    text: string;
    children ?: SourceDataItem[];
}





// 一些react 特别的属性写法
interface IReact {
    style: CSSProperties
    children: ReactChild
    render: Renderer
    map: { [key: string]: string[] };
    buttons?: Array<ReactElement>;
}

const reactData: IReact = {
    style: 'class',
    children : null,
    render:(item:number):void=>{},
    map:{
        's':['1','2'],
        'name':['1','2,3']
    }
}