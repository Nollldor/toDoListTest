import React, {MouseEvent} from "react";

type ButtonPropsType = {
    title:string
    callback: (e:MouseEvent<HTMLButtonElement>)=> void
}

export const Button:React.FC<ButtonPropsType> = ({title,callback})=>{

    const onClickHandler = (e:MouseEvent<HTMLButtonElement>)=>{
        callback(e)
    }

    return(
        <button onClick={onClickHandler}>{title}</button>
    )
}