import { useState } from "react";
import User from "../components/User";
const PracticePage = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const inputTask = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const newTaskWithId = {
      id: taskList.length === 0 ? 0 : taskList[taskList.length - 1].id + 1,
      name: newTask,
      done: false,
    };
    setTaskList([...taskList, newTaskWithId]);
  };
  const deleteTask = (id) => {
    setTaskList(
      taskList.filter((v) => {
        return v.id === id ? false : true;
      })
    );
  };
  const completeTask = (id) => {
    setTaskList(
      taskList.map((v) => {
        return v.id === id ? { ...v, done: v.done ? false : true } : v;
      })
    );
  };

  return (
    <div className=" text-white">
      <input onChange={inputTask} type="text" />
      <div className=" flex gap-x-3">
        <button onClick={addTask}>click</button>
        {newTask}
      </div>
      <div className="">
        {taskList.map((v, k) => {
          return (
            <User
              key={k}
              done={v.done}
              name={v.name}
              id={v.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
            ></User>
          );
        })}
      </div>
    </div>
  );
};

export default PracticePage;
