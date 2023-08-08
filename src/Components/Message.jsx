export const Message=({msg,classname,value=""})=>{
    const myClassName= `${classname} text-center`;
    return (<h2 className={myClassName}>{msg} {value}</h2>)
}