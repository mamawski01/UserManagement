import { useState } from "react";

const PracticePage = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [id, setId] = useState(0);

  const addTask = (e) => {
    setNewTask(e.target.value);
  };
  const addTaskList = () => {
    const newTaskWithID = {
      id: id,
      name: newTask,
      done: false,
    };
    setId(id + 1);
    setTaskList([newTaskWithID, ...taskList]);
  };

  const deleteShit = (id) => {
    setTaskList(
      taskList.filter((v) => {
        return v.id === id ? false : true;
      })
    );
  };

  const finish = (id) => {
    setTaskList(
      taskList.map((v) => {
        return v.id === id ? { ...v, done: true } : v;
      })
    );
  };

  return (
    <div className=" text-white flex-col">
      <input type="text" name="" id="" onChange={addTask} />
      <button onClick={addTaskList}>add task</button>
      <div className="">
        {taskList.map((v, k) => {
          return (
            <div className=" flex gap-x-3" key={k}>
              <p style={{ backgroundColor: v.done ? "green" : "inherit" }}>
                {v.name}
              </p>
              <p> {v.id}</p>
              <button
                onClick={() => {
                  deleteShit(v.id);
                }}
              >
                x
              </button>
              <button
                onClick={() => {
                  finish(v.id);
                }}
              >
                done
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PracticePage;
