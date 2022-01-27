

const someValue: any = "this is a string";
const strLength: number = (<string>someValue).length;


const someValue2: any = "this is a string";
const strLength2: number = (someValue2 as string).length;

console.log('strLength2', strLength2);
