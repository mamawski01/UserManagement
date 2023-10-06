import { useState } from "react";

const PracticePage = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="text-white flex-col">
      <input
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const newTask = {
            id:
              taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
            taskName: task,
          };
          setTaskList([newTask, ...taskList]);
        }}
      >
        add task
      </button>
      <div>
        {taskList.map((v, k) => {
          return (
            <div className="flex gap-x-3" key={k}>
              <p>
                {v.taskName}
                {v.id}
              </p>
              <button
                onClick={() => {
                  setTaskList((e) => e.filter((e) => (e === v ? false : true)));
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PracticePage;
