import React, {MouseEvent} from "react";

type ButtonPropsType = {
    title:string
    callback: ()=> void
}

export const Button:React.FC<ButtonPropsType> = ({title,callback})=>{

    const onClickHandler = ()=>{
        callback()
    }

    return(
        <button onClick={onClickHandler}>{title}</button>
    )
}