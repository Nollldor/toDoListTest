import React, {useState, ChangeEvent, KeyboardEvent} from "react";

type FullInputPropsType = {
    title: string
    changeInputTitle: (s: string) => void
    addMessage:()=>void
    error: string|null
}

export const Input: React.FC<FullInputPropsType> = ({title,changeInputTitle, addMessage,error}) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeInputTitle(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter"){addMessage()}
    }


    return (

        <input className={error ? "error" : ""} onKeyDown={onKeyDownHandler} onChange={onChangeHandler} value={title}/>


    )
}