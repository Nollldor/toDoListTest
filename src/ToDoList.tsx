import React, {ChangeEvent, MouseEvent} from "react";
import {FilterType, TaskType} from "./App";
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import s from "./ToDoList.module.css"


type ToDoListPropsType = {
    title: string
    tasks: TaskType[]
    deleteTask: (tId: string) => void
    filter: FilterType
    setFilter: (filter: FilterType) => void
    addTask: (taskTitle: string) => void
    inputValue: string
    setInputValue: (inputValue: string) => void
    changeTaskStatus: (tId: string, status: boolean) => void
    error: null | string
    setError: (error: null | string) => void
}


export const ToDoList: React.FC<ToDoListPropsType> = (
    {
        title,
        tasks,
        deleteTask,
        filter,
        setFilter,
        addTask,
        inputValue,
        setInputValue,
        changeTaskStatus,
        error,
        setError
    }) => {


    const onClickDeleteHandler = (tID: string) => {
        deleteTask(tID)
    }

    const onClickSetFilterHandler = (filter: FilterType) => {
        setFilter(filter)
    }

    const addTaskHandler = () => {
        addTask(inputValue)
        setInputValue("")
    }

    const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>, tId: string) => {
        changeTaskStatus(tId, e.currentTarget.checked)
    }

    return (
        <div>
            <h3>{title}</h3>
            {/*<FullInput addTask={addTask}/>*/}
            <Input className={error ? s.errorInput : ""} addTask={addTask} inputValue={inputValue}
                   setInputValue={setInputValue} setError={setError}/>
            <Button className={""} title={"+"} callback={addTaskHandler}/>
            <div className={s.error}>{error}</div>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id} className={task.isDone ? s.completedTask : ""}>
                            <input onChange={(e) => onChangeCheckBoxHandler(e, task.id)} type={"checkbox"}
                                   checked={task.isDone}></input>
                            <Button className={s.deleteButton} callback={() => onClickDeleteHandler(task.id)} title={"x"}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button className={filter === "all" ? s.activeButton : ""} title={"All"}
                        callback={() => onClickSetFilterHandler("all")}/>
                <Button className={filter === "active" ? s.activeButton : ""} title={"Active"}
                        callback={() => onClickSetFilterHandler("active")}/>
                <Button className={filter === "complete" ? s.activeButton : ""} title={"Complete"}
                        callback={() => onClickSetFilterHandler("complete")}/>

            </div>

        </div>
    )
}