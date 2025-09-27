

import React from 'react';

function TaskStatus({ inProgressTasks, onComplete }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-black">Task Status</h2>
      
      <div className="space-y-4 mb-6">
        {inProgressTasks.length > 0 ? (
          inProgressTasks.map(task => (
            <div 
              key={task.uniqueId} 
              className="bg-white p-4 rounded-xl shadow-lg border border-gray-200"
            >
              <div className="flex flex-col space-y-4">
                <p className="text-lg font-semibold text-black">{task.title}</p>
                <button 
                  onClick={() => onComplete(task.uniqueId)} 
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                >
                  Complete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 h-20 flex items-center justify-center text-center text-gray-500">
            <p className="font-medium">Select a ticket to add to task status</p>
          </div>
        )}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-black">Resolved Task</h2>
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
        <div className="h-20 flex items-center justify-center text-gray-500">
          <p className="">No Resolved Tasks Yet</p>
        </div>
      </div>
    </>
  );
}

export default TaskStatus;

