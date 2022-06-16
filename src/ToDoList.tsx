import React, {MouseEvent} from "react";
import {FilterType, TaskType} from "./App";
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";

type ToDoListPropsType = {
    title: string
    tasks: TaskType[]
    deleteTask: (tId: string) => void
    filter: FilterType
    setFilter: (filter: FilterType) => void
    addTask: (taskTitle: string) => void
}


export const ToDoList: React.FC<ToDoListPropsType> = (
    {title, tasks, deleteTask, filter, setFilter, addTask}) => {

    const onClickDeleteHandler = (tID: string) => {
        deleteTask(tID)
    }

    const onClickSetFilterHandler = (filter: FilterType) => {
        setFilter(filter)
    }


    return (
        <div>
            <h3>{title}</h3>
            <FullInput addTask={addTask}/>

            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <input type={"checkbox"} checked={task.isDone}></input>
                            <Button callback={() => onClickDeleteHandler(task.id)} title={"x"}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button title={"All"} callback={() => onClickSetFilterHandler("all")}/>
                <Button title={"Active"} callback={() => onClickSetFilterHandler("active")}/>
                <Button title={"Complete"} callback={() => onClickSetFilterHandler("complete")}/>

            </div>

        </div>
    )
}