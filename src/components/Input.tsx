import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    addTask: (taskTitle: string) => void
    inputValue: string
    setInputValue: (inputValue: string) => void
    setError: (error: null | string) => void
    className: string
}

export const Input: React.FC<InputPropsType> = ({addTask, inputValue,setInputValue,setError,className}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
        setError(null)
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter"){
            addTask(inputValue)
            setInputValue("")
        }
    }

    return (
        <input className={className} onChange={onChangeHandler} onKeyDown={onEnterHandler} value={inputValue}/>
    )
}