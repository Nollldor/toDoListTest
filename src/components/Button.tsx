import React, {MouseEvent} from "react";

type ButtonPropsType = {
    buttonName: string
    callback:()=>void
    className: string
}

export const Button:React.FC<ButtonPropsType> = ({buttonName, callback, className})=>{

    const onClickHandler = (e:MouseEvent<HTMLButtonElement>) => {
        callback()
    }

    return <button className={className} onClick={onClickHandler}>{buttonName}</button>
}