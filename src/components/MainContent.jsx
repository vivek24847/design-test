import React, { useState } from "react";
import { Calendar, Circle, CircleCheck, Clock } from "lucide-react";

const MainContent = ({}) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Work out",
      time: "8:00 am",
      completed: true,
      category: "personal",
    },
    {
      id: 2,
      name: "Design team meeting",
      time: "2:30 pm",
      completed: false,
      category: "work",
    },
    {
      id: 3,
      name: "Hand off the project",
      time: "7:00 pm",
      completed: false,
      category: "freelance",
    },
    {
      id: 5,
      name: "Cooking",
      time: "8:00 am",
      completed: true,
      category: "personal",
    },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  const handleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div
      className="flex-1 bg-[rgb(165_152_243)] border-4 border-[white] rounded-r-[25px]
 "
    >
      <div
        className="p-10 rounded-r-[25px]
"
      >
        <div className="mb-10 text-white">
          <h2 className="text-xl font-normal">Today main focus</h2>
          <h1 className="text-2xl font-semibold">Design team meeting</h1>
        </div>

        <div className="p-2 mb-4 bg-white rounded-[15px]">
          <div className="flex items-center px-4">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-pink-400"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            </div>
            <input
              type="text"
              className="flex-1 px-3 py-2 text-sm text-gray-500 bg-transparent border-none focus:outline-none"
              placeholder="What is your next task?"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <div className="flex">
              <div className="p-1 text-purple-400">
                <Clock size={20} />
              </div>
              <div className="p-1 text-purple-400">
                <Calendar size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 px-[10px]">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-white rounded-[15px]"
            >
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 mr-4 rounded-full ${
                    task.category === "personal"
                      ? "bg-pink-400"
                      : task.category === "work"
                      ? "bg-yellow-400"
                      : "bg-cyan-400"
                  }`}
                ></div>
                <span className={"text-gray-700 font-medium"}>{task.name}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4 text-sm text-gray-500">{task.time}</span>
                <button
                  onClick={() => handleTaskCompletion(task.id)}
                  className="text-gray-400 hover:text-purple-500"
                >
                  {task.completed ? (
                    <CircleCheck className="text-purple-500" size={20} />
                  ) : (
                    <Circle size={20} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
