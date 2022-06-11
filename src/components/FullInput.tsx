import React, {useState, ChangeEvent, MouseEvent} from "react";

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput: React.FC<FullInputPropsType> = ({addMessage}) => {

    const [title, setTitle] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onclickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div>
            <input onChange={onChangeHandler} value={title}/>
            <button onClick={onclickHandler}>+</button>
        </div>
    )
}