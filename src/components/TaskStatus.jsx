// MAIN 


import React from 'react';

function TaskStatus({ inProgressTasks, resolvedTasks, onComplete }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-black">Task Status</h2>
      
      <div className="space-y-4 mb-8">
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
          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 h-20  items-center justify-center text-center text-gray-500">

            

            <div>
                <p className="text-lg font-semibold">
                    No Tasks In Progress
                </p> 
                <p>
                    Click On A Ticket To Start Working
                </p>
            </div>

            
          </div>
        )}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-black">Resolved Task</h2>
      
      <div className="space-y-4">
        {resolvedTasks.length > 0 ? (
          resolvedTasks.map(task => (
            <div 
              key={task.uniqueId} 
              className="bg-green-50 p-4 rounded-xl shadow-lg border-1 border-green-300" 
            >
              <p className="text-md font-medium mb-2 text-black">{task.title}</p>
              <div className="flex items-center text-green-600 font-bold space-x-1">
               
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>

                <div className='flex justify-between md:gap-35 gap-45'>

                    <p>Completed</p>
                    <p className='text-gray-600 font-normal'>Click To Remove</p>

                </div>

              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 h-20 flex items-center justify-center text-gray-500">
            <p className="">No Resolved Tasks Yet</p>
          </div>
        )}
      </div>
    </>
  );
}

export default TaskStatus;





