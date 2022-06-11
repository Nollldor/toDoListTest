import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ToDoList} from "./components/ToDoList";
import {v1} from "uuid";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

function App() {
    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);

    let resultTasks = tasks

    const deleteTask = (id: string) => {
        resultTasks = tasks.filter(task => task.id !== id)
        setTasks(resultTasks)
    }

    const addMessage = (title: string) => {
        setTasks([{id: v1(), title: title, isDone: false}, ...resultTasks])
    }

    const changeCheck = (key: string, checked: boolean) => {
        let changeCheckTAsk = tasks.find(task => task.id === key)
        if (changeCheckTAsk) {
            changeCheckTAsk.isDone = checked
        }

        setTasks([...tasks])
    }

    return (
        <div className="App">
            <ToDoList
                tasks={resultTasks}
                deleteTask={deleteTask}
                addMessage={addMessage}
                changeCheck={changeCheck}
            />
        </div>
    );
}

export default App;
