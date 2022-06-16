import React, {MouseEvent} from "react";

type ButtonPropsType = {
    title:string
    callback: ()=> void
    className: string
}

export const Button:React.FC<ButtonPropsType> = ({title,callback,className})=>{

    const onClickHandler = ()=>{
        callback()
    }

    return(
        <button className={className} onClick={onClickHandler}>{title}</button>
    )
}