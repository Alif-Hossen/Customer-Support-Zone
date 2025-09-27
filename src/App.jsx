


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Customer from './components/Customer';
import TaskStatus from './components/TaskStatus'; 
import Footer from './components/Footer';
import toast, { Toaster } from 'react-hot-toast'; 

const CompletedToast = ({ t, title }) => (
  <div 
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5 overflow-hidden`}
  >
    <div className="flex-1 w-full p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
            Completed: {title}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Successfully Removed
          </p>
        </div>
        
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="inline-flex text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Close</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div className="w-full h-1 bg-green-500"></div>
  </div>
);


const BASE_URL = import.meta.env.BASE_URL;

function App() {
  const [customers, setCustomers] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}customers.json`) 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCustomers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        toast.error('Something Wrong', { duration: 4000 });
      });
  }, []);

  const handleTicketClick = (customer) => {
    toast.success(`"${customer.title}" Completed `, { duration: 2000 });
    
    setInProgressCount(prev => prev + 1);
    
    const newTask = { ...customer, uniqueId: Date.now() + Math.random(), originalId: customer.id };
    setInProgressTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleCompleteTask = (uniqueId) => {
    const completedTask = inProgressTasks.find(task => task.uniqueId === uniqueId);
    
    if (completedTask) {
      toast.custom((t) => <CompletedToast t={t} title={completedTask.title} />, { duration: 3000 });

      setResolvedCount(prev => prev + 1);
      setInProgressCount(prev => Math.max(0, prev - 1));
      
      setResolvedTasks(prevResolved => [...prevResolved, completedTask]);
      setInProgressTasks(prevTasks => prevTasks.filter(task => task.uniqueId !== uniqueId));
      setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== completedTask.originalId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      
      <Toaster position="top-right" /> 

      <Navbar />

      <Banner 
        inProgress={inProgressCount} 
        resolved={resolvedCount} 
      />

      <div className="max-w-[1320px] mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2">
          <Customer 
            customerData={customers} 
            onTicketClick={handleTicketClick} 
          />
        </div>

        <div className="lg:col-span-1">
          <TaskStatus 
            inProgressTasks={inProgressTasks} 
            resolvedTasks={resolvedTasks}
            onComplete={handleCompleteTask} 
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;



















