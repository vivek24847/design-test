import React, { useState } from "react";
import { Calendar, Circle, CircleCheck, Send } from "lucide-react";
import dayjs from "dayjs";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTask,
  deleteTask,
  reorderTasks,
  addTask,
} from "../redux/tasksSlice";

const MainContent = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.taskList);

  const [newTaskText, setNewTaskText] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleTaskCompletion = (id) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      dispatch(
        updateTask({ ...taskToUpdate, completed: !taskToUpdate.completed })
      );
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddTodo = () => {
    const time = dayjs().format("h:mm A").toLowerCase();

    if (editingTaskId !== null) {
      const existingTask = tasks.find((task) => task.id === editingTaskId);
      if (existingTask) {
        dispatch(
          updateTask({
            ...existingTask,
            name: newTaskText,
          })
        );
      }
      setEditingTaskId(null);
    } else {
      const newTodo = {
        id: Date.now().toString(),
        name: newTaskText,
        time,
        completed: false,
        category: "general",
      };
      dispatch(addTask(newTodo));
    }

    setNewTaskText("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTask(id));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(tasks);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    dispatch(reorderTasks(reordered));
  };

  return (
    <div className="flex-1 bg-[rgb(165_152_243)] border-4 border-[white] rounded-r-[25px]">
      <div className="p-10 rounded-r-[25px]">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-2 rounded-md text-gray-700 border border-gray-300 focus:outline-none"
          />
        </div>
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
              <div className="p-1 text-purple-400 ">
                <button onClick={handleAddTodo}>
                  <Send size={20} />
                </button>
              </div>
              <div className="p-1 text-purple-400">
                <Calendar size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 px-[10px] h-[250px] overflow-y-scroll scrollbar-hide">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="task-list">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {filteredTasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="flex items-center justify-between p-4 mb-2 bg-white rounded-[15px]"
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
                            <span className="text-gray-700 font-medium">
                              {task.name}
                            </span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">
                              {task.time}
                            </span>
                            <button
                              onClick={() => handleTaskCompletion(task.id)}
                              className="text-gray-400 hover:text-purple-500"
                            >
                              {task.completed ? (
                                <CircleCheck
                                  className="text-purple-500"
                                  size={20}
                                />
                              ) : (
                                <Circle size={20} />
                              )}
                            </button>
                            <button
                              className="text-blue-500 hover:text-blue-700 text-sm"
                              onClick={() => {
                                setNewTaskText(task.name);
                                setEditingTaskId(task.id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-500 hover:text-red-700 text-sm"
                              onClick={() => handleDeleteTodo(task.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
