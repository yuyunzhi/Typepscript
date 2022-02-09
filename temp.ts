import { getNodeMajorVersion } from "typescript"

// get
getList('1')
getData(1)

// render 可选
render()
render(function () {
    alert('1')
})

// class
const p = new Person('ps', 12)
Person.getMaxAge
p.getName(5)

// namespace 相当于一个对象
OOO.Person.getMaxAge()
OOO.aaa
OOO.getName(6)

NodeJS.getData(6)
NodeJS.NODE_ENV
NodeJS.ProcessEnv.NODE_ENV

// 变量是函数也是对象
$2('s')
$2.A