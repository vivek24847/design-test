import React from "react";
import { Calendar, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 px-6 py-8 bg-white ">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14">
          <img
            src="/user1.png"
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-3">
          <div className="text-xs font-medium text-gray-500">Do-it</div>
          <div className="text-base font-medium text-[rgb(165_152_243)]">
            Hamza mameri
          </div>
        </div>
      </div>

      <div className="w-full h-[3px] my-4 bg-[rgb(165_152_243)]"></div>

      <div className="space-y-4 ">
        <div className="flex items-center py-2 space-x-3 text-gray-700">
          <div className="p-1 rounded bg-purple-50">
            <div className="w-5 h-5 text-purple-400">
              <Calendar size={20} />
            </div>
          </div>
          <span className="font-medium">Today tasks</span>
        </div>

        <div className="pl-8 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-pink-400"></div>
            <span className="text-sm text-gray-600">Personal</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
            <span className="text-sm text-gray-600">Freelance</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <span className="text-sm text-gray-600">work</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full border border-gray-300"></div>
            <span className="text-sm text-gray-400">Add filter</span>
          </div>
        </div>

        <div className="flex items-center py-2 space-x-3 text-gray-700">
          <div className="p-1 rounded">
            <div className="w-5 h-5 text-gray-300">
              <Calendar size={20} />
            </div>
          </div>
          <span className="font-medium">Scheduled tasks</span>
        </div>

        <div className="flex items-center py-2 space-x-3 text-gray-700">
          <div className="p-1 rounded">
            <div className="w-5 h-5 text-gray-300">
              <Settings size={20} />
            </div>
          </div>
          <span className="font-medium">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
