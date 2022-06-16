import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = "all" | "complete" | "active"


function App() {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: "HTML&CSS", isDone: false},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    const deleteTask = (tId: string) => {
        setTasks([...tasks.filter(el => el.id !== tId)])
    }

    let filteredTasks = tasks
    if (filter === "all") {
        filteredTasks = tasks
    } else if (filter === "complete") {
        filteredTasks = tasks.filter(el => el.isDone)
    } else {
        filteredTasks = tasks.filter(el => !el.isDone)
    }

    const addTask = (tasksTitle: string) => {

        setTasks([{id: v1(), title: tasksTitle, isDone: false}, ...tasks])
    }


    return (
        <div className="App">
            <ToDoList
                title={"What to learn"}
                tasks={filteredTasks}
                deleteTask={deleteTask}
                filter={filter}
                setFilter={setFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
