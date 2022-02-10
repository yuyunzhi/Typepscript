import { ButtonHTMLAttributes, HTMLAttributes, ReactChild, CSSProperties, ReactElement } from 'react'


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


// 2、原生元素的属性

//  NativeXXX = XXXHTMLAttributes<HTMLElement>
type NativeButton = ButtonHTMLAttributes<HTMLElement>;



// 3、interface使用

// 递归,key value ,可以使用 interface
interface SourceDataItem {
  text: string;
  children?: SourceDataItem[];
}


// 4、type 使用

// 函数可以用 type
type Renderer = (item: any) => void;
// 联合类型用 type
type DataSourceType<T = {}> = T & SourceDataItem;
// 有几种值可以用  type 
type MenuMode = "horizontal" | "vertical";


// 5、可选链

let user = {
  info: {
    getAge() {
      return 1
    }
  }
}

let age = user?.info?.getAge?.()

// 6、空值合并运算
// 当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。

const users: any = {
  level: 0
}

let level1 = users.level ?? '无' // 0
let level2 = users.other_level ?? '无' // 无

// 7、类型守卫 typeof instanceof in

// 1） if(typeof xxx === 'string'){}
interface Hero {
  name: string;
  skill: string;
}

const zed: Hero = { name: "影流之主", skill: "影子" };
type LOL = typeof zed; // type LOL = Hero

// 2) if(xxx instanceof Man){}
// 3) if('a' in Man){}

// 8、双重断言

function handler (event:Event){
  const element = event as any as HTMLElement
}



// other 一些react 特别的属性写法
interface IReact {
  style: CSSProperties
  children: ReactChild
  render: Renderer
  map: { [key: string]: string[] };
  buttons?: Array<ReactElement>;
}

const reactData: IReact = {
  style: { color: 'red' },
  children: null,
  render: (item: number): void => { },
  map: {
    's': ['1', '2'],
    'name': ['1', '2,3']
  }
}