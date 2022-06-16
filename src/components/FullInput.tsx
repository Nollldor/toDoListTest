import React, {useState, ChangeEvent,KeyboardEvent} from "react";

type FullInputPropsType = {
    addTask: (taskTitle: string) => void
}

export const FullInput: React.FC<FullInputPropsType> = ({addTask}) => {

    const [inputValue, setInputValue] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }


    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter"){
            onClickHandler()
        }
    }

    const onClickHandler = () => {
        addTask(inputValue)
        setInputValue("")
    }

    return (
        <div>
            <input onChange={onChangeHandler} onKeyDown={onEnterHandler} value={inputValue}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}