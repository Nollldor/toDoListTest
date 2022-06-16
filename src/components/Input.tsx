import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    addTask: (taskTitle: string) => void
    inputValue: string
    setInputValue: (inputValue: string) => void
}

export const Input: React.FC<InputPropsType> = ({addTask, inputValue,setInputValue}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter"){
            addTask(inputValue)
            setInputValue("")
        }
    }

    return (
        <input onChange={onChangeHandler} onKeyDown={onEnterHandler} value={inputValue}/>
    )
}