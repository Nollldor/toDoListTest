import React, {useState, ChangeEvent} from "react";
import {TasksType} from "../App";
import {Button} from "./Button";
import {FullInput} from "./FullInput";
import {Input} from "./Input";
import s from "./ToDoList.module.css"



type ToDoListPropsType = {
    tasks: TasksType[]
    deleteTask: (id: string) => void
    addMessage: (title: string) => void
    changeCheck: (key: string, checked: boolean) => void
}

type FilterType = "all" | "active" | "complete"


export const ToDoList: React.FC<ToDoListPropsType> = ({tasks, deleteTask, addMessage, changeCheck}) => {
    const [filter, setFilter] = useState<FilterType>("all")

    const [title, setTitle] = useState<string>("")

    const [error, setError] = useState<string | null>(null)

    const changeFilter = (newFilter: FilterType) => {
        setFilter(newFilter)
    }

    let filteredTasks = tasks
    if (filter === "complete") {
        filteredTasks = tasks.filter(task => task.isDone)
    }
    if (filter === "active") {
        filteredTasks = tasks.filter(task => !task.isDone)
    }

    const deleteHandler = (tID: string) => {
        deleteTask(tID)
    }


    const tasksElements = filteredTasks.map(task => {
        const onCheckedIsDoneHandler = (e: ChangeEvent<HTMLInputElement>) => {

            changeCheck(task.id, e.currentTarget.checked)
        }

        return (
            <li key={task.id}>

                {/*<button onClick={() => props.deleteTask(task.id)}>x</button>*/}
                <Button buttonName={"x"} callback={() => deleteHandler(task.id)} className={""}/>
                <input type={"checkbox"} checked={task.isDone} onChange={onCheckedIsDoneHandler}/>{task.title}
            </li>

        )
    })

    const changeFilterHandler = (filter: FilterType) => {
        changeFilter(filter)
    }

    const changeInputTitleHandler = (s: string) => {
        setTitle(s)
        setError(null)
    }

    const addMessageHandler = () => {
        if (title.trim() !== "") {
            addMessage(title)
            setTitle("")
        } else {
            setError("Title is required")
        }

    }




    return (
        <div>
            <h1>ToDoList</h1>
            {/*<FullInput addMessage={props.addMessage}/>*/}
            <Input title={title} changeInputTitle={changeInputTitleHandler} addMessage={addMessageHandler} error={error}/>
            <Button buttonName={"+"} callback={addMessageHandler} className={""}/>
            {error && <div className={s.errorMessage}>{error}</div>}
            <ul>
                {tasksElements}
            </ul>

            {/*<button onClick={() => changeFilter("all")}>All</button>
            <button onClick={() => changeFilter("complete")}>Complete</button>
            <button onClick={() => changeFilter("active")}>Active</button>*/}

            <Button buttonName={"All"} callback={() => changeFilterHandler("all")} className={filter==="all" ? "active-filter":""}/>
            <Button buttonName={"Active"} callback={() => changeFilterHandler("active")} className={filter==="active" ? "active-filter":""}/>
            <Button buttonName={"Complete"} callback={() => changeFilterHandler("complete")} className={filter==="complete" ? "active-filter":""}/>
        </div>
    )
}